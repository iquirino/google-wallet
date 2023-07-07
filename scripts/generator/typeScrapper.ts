import * as cheerio from "cheerio";

export type ClassDefinition = Partial<{
  key: string;
  resource: string;
  description: string;
  fields: FieldItem[];
  enum_values: EnumItem[];
  schema_representation: string;
}>;

export type ImportReference = {
  name: string;
  path: string;
}

export type FieldItem = {
  name: string;
  type: string;
  description: string;
  required: boolean;
  deprecated: boolean;
  reference: ImportReference[];
  isArrayOf: boolean;
};

export type EnumItem = {
  name: string;
  description: string;
  deprecated: boolean;
};

//get property names from ClassDefinition type
export type ClassDefinitionKeys = keyof ClassDefinition;
const allKeys: ClassDefinitionKeys[] = [
  "key",
  "resource",
  "description",
  "fields",
  "enum_values",
  "schema_representation",
];

export const scrapClass = async (
  className: string,
  html: string,
  baseKey?: string
) => {
  const $ = cheerio.load(html);
  let data: ClassDefinition[] = [];
  $(`#${className.replaceAll(".", "\\.").replaceAll("/", "\\/")}`)
    .children("section")
    .each((_i, sectionEl) => {
      data = reduceSection($, sectionEl, data, baseKey);
    });

  return data;
};

const reduceSection = (
  $: cheerio.CheerioAPI,
  sectionEl: cheerio.Element,
  acc: ClassDefinition[],
  baseKey?: string
) => {
  const section = processClassSection($, sectionEl, baseKey);
  if (!section) return acc;

  const accBySection = acc.findIndex((item) => item.key === section.key);
  if (accBySection === -1) {
    acc.push({ ...(baseKey ? { key: baseKey } : {}), ...section });
  } else {
    acc[accBySection] = { ...acc[accBySection], ...section };
  }
  return acc;
};

const processClassSection = (
  $: cheerio.CheerioAPI,
  sectionEl: cheerio.Element,
  baseKey?: string
): ClassDefinition | undefined => {
  let key = baseKey || $(sectionEl).attr("id");
  const ret: ClassDefinition = { key };
  const lastKey = $(sectionEl)
    .attr("id")
    ?.split(".")
    .pop()
    ?.toLowerCase() as ClassDefinitionKeys;

  if (!baseKey) {
    const splitKey = key?.split(".");
    const lastKey = splitKey?.[
      splitKey.length - 1
    ]?.toLowerCase() as ClassDefinitionKeys;
    if (lastKey) {
      if (allKeys.includes(lastKey as ClassDefinitionKeys)) {
        key = splitKey?.slice(0, splitKey.length - 1).join(".");
        ret.key = key;
      }
    }
  }
  if (!allKeys.includes(lastKey as ClassDefinitionKeys)) {
    return undefined;
  }

  if (lastKey === "fields") {
    ret["fields"] = processClassFields($, sectionEl);
  } else if (lastKey === "enum_values") {
    ret["enum_values"] = processClassEnums($, sectionEl);
  } else {
    ret[lastKey] = $(sectionEl).text() || lastKey;
  }

  return ret;
};

const processClassFields = (
  $: cheerio.CheerioAPI,
  sectionEl: cheerio.Element
): FieldItem[] => {
  const ret: FieldItem[] = [];
  $(sectionEl)
    .find("table")
    .find("tbody")
    .find("tr")
    .each((_i, trEl) => {
      const fieldItem: FieldItem = {
        name: "",
        type: "",
        description: "",
        required: false,
        deprecated: false,
        reference: [],
        isArrayOf: false,
      };
      $(trEl)
        .find("td")
        .each((i, tdEl) => {
          switch (
            i //fieldName
          ) {
            case 0:
              const name = $(tdEl).find("code").text();
              const text = $(tdEl).text();
              fieldItem.isArrayOf = name.includes("[]");
              fieldItem.name = name
                .replaceAll("(deprecated)", "")
                .replaceAll("[]", "")
                .trim();
              fieldItem.deprecated = fieldItem.deprecated || text.toLowerCase().includes("deprecated");

              break;
            case 1: {
              const text = $(tdEl).text();
              let type = $(tdEl).find("code").html();
              let innerType = $(tdEl).find("code > ").html();
              const description = $(tdEl).find("p").last().text();

              fieldItem.deprecated = fieldItem.deprecated || text.toLowerCase().includes("deprecated");

              if (innerType && innerType.toLowerCase().startsWith("int"))
                type = "number";

              if (type && type.startsWith("object") && innerType) {
                const objectLink = $(innerType).attr("href");
                type = $(innerType).text();
                const hasReference = fieldItem.reference.filter(q=>q.name === type).length > 0;
                if (objectLink && !hasReference) {
                  fieldItem.reference.push({name: type, path: type});
                }
              }

              if (type && type.startsWith("enum") && innerType) {
                const objectLink = $(innerType).attr("href");
                type = $(innerType).text();
                const hasReference = fieldItem.reference.filter(q=>q.name === type).length > 0;
                if (objectLink && !hasReference) {
                  fieldItem.reference.push({name: type + "Enum", path: type});
                }
                type = $(innerType).text() + "Enum";
              }

              fieldItem.type = type || "";
              fieldItem.description = description;
              fieldItem.required = text.includes("Required");
              break;
            }
          }
        });
      ret.push(fieldItem);
    });

  return ret;
};

const processClassEnums = (
  $: cheerio.CheerioAPI,
  sectionEl: cheerio.Element
): EnumItem[] => {
  const ret: EnumItem[] = [];
  $(sectionEl)
    .find("table")
    .find("tbody")
    .find("tr")
    .each((_i, trEl) => {
      const enumItem: EnumItem = {
        name: "",
        description: "",
        deprecated: false,
      };
      $(trEl)
        .find("td")
        .each((i, tdEl) => {
          switch (
            i //fieldName
          ) {
            case 0:
              const name = $(tdEl).find("code").text();
              const text = $(tdEl).text();
              enumItem.name = name.replaceAll("(deprecated)", "").trim();
              enumItem.deprecated = enumItem.deprecated || text.toLowerCase().includes("deprecated");

              break;
            case 1: {
              const text = $(tdEl).text();
              const description = $(tdEl).find("p").last().text();
              enumItem.deprecated = enumItem.deprecated || text.toLowerCase().includes("deprecated");
              enumItem.description = description;
              break;
            }
          }
        });
      ret.push(enumItem);
    });

  return ret;
};
