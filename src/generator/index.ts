import fs from "fs";
import got from "got";
import { generateObject } from "./typescriptGenerator.js";
import { getTypesFromPage } from "./menuTypesScrapper.js";
import { scrapClass, ClassDefinition } from "./typeScrapper.js";
import { getTypesMenu } from "./menuScrapper.js";

export type ScrapOptions = {
  type: string;
  docsUrl: string;
  pojos: Pojo[];
  additionalTypes: string[];
};

export type Pojo = {
  name: string;
  objects: string[];
  data: string;
};
const baseUrl = "https://developers.google.com";

export const scrap = async (toScrap: ScrapOptions) => {
  fs.mkdirSync(`src/types/${toScrap.type}`, { recursive: true });
  const classHtml = toScrap?.pojos?.[0]?.data || "";
  const menu = getTypesMenu(classHtml).toArray();
  const types = await Promise.all(
    menu.map(async (item) => {
      if (!item.href) return;
      const pageHtml = await got(baseUrl + item.href).text();
      return {
        menu: item,
        types: getTypesFromPage(pageHtml, item.href, item.text).toArray(),
      };
    })
  );
  const genTypes = types.reduce((acc, item) => {
    if (!item) return acc;
    if (!item.menu) return acc;
    if (!item.menu.href) return acc;
    if (item.types && item.types.length > 0) {
      return [
        ...acc,
        item.menu.text,
        ...item.types.map((y) => item.menu.text + "##" + y),
      ];
    }
    return [...acc, item.menu.text];
  }, [] as string[]);

  const pojos = await Promise.all(toScrap.pojos.map(async (pojo) => {
    return [
      await scrapClass(pojo.name, pojo.data),
      ...(await Promise.all(
        pojo.objects.map(async (type) => {
          return await scrapClass(type, pojo.data);
        })
      )),
    ];
  }));

  const additionalTypes = await Promise.all(toScrap.additionalTypes.map(async (type) => {
    return await scrapClass(
      `${toScrap.docsUrl}${type}`,
      await got(`${baseUrl}${toScrap.docsUrl}${type}`).text(),
      type
    );
  }));

  const classs = [
    ...(pojos.flat()),
    ...(additionalTypes.flat()),
    ...(await Promise.all(
      genTypes.map(async (type) => {
        const typeParsed = type.split("##");
        const api = typeParsed[0];
        const name = typeParsed[1] || typeParsed[0];
        return await scrapClass(
          typeParsed[1] || `/wallet/retail/loyalty-cards/rest/v1/${api}`,
          await got(
            `https://developers.google.com/wallet/retail/loyalty-cards/rest/v1/${api}`
          ).text(),
          name
        );
      })
    )),
  ]
    .flat()
    .reduce((acc, item) => {
      if (!item) return acc;
      if (!item.key) return acc;
      const accBySection = acc.findIndex((x) => x.key === item.key);
      if (accBySection !== -1) {
        acc[accBySection] = { ...acc[accBySection], ...item };
        return acc;
      }

      return [...acc, item];
    }, [] as ClassDefinition[]);

  classs.forEach((item) => {
    if (!item.key) return;
    const file = generateObject(item.key, item);
    const lastKey = item.key.split(".").pop();

    //save file on disk at src/types
    fs.writeFileSync(`src/types/${toScrap.type}/${lastKey}.ts`, file);
  });
};
