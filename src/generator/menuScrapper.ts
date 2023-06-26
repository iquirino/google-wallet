import * as cheerio from "cheerio";

export const getTypesMenu = (html: string) => {
  const $ = cheerio.load(html);
  const menus = $(".devsite-expandable-nav").filter((_x, el) => {
    const text = $(el).find(".devsite-nav-title span").html();
    return text === "Types";
  });
  return menus.find("a").map((_i, el) => {
    const href = $(el).attr("href");
    const text = $(el).text();
    return { href, text, root: false };
  });
};
