import * as cheerio from "cheerio";

export const getTypesFromPage = (html: string, key: string, _title: string) => {
  const $ = cheerio.load(html);
  return $(`#${key.replaceAll("/", "\\/")} section h2`).map((_i, el) => {
    const text = $(el).text();
    return text;
  });
};
