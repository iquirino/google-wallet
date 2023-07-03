import fs from "fs";
export const generateExports = () => {
  //generateFile("./src/types");
  //generateForFolder("./src/types", generateIndexFile);

  generateFile("./src/types/generic");

  generateFile("./src/types/retail/gift-card");
  generateFile("./src/types/retail/loyalty-card");
  generateFile("./src/types/retail/offer");

  generateFile("./src/types/tickets/boarding-pass");
  generateFile("./src/types/tickets/event");
};

const generateForFolder = (
  folder: string,
  generator: (path: string) => void
) => {
  const folders = fs.readdirSync(folder).filter((f) => !f.endsWith(".ts"));
  folders.forEach((f) => {
    generator(`${folder}/${f}`);
  });
};

const generateFile = (path: string) => {
  fs.writeFileSync(`${path}/index.ts`, generateFileContent(path));
};

const generateFileContent = (path: string) => {
  return (
    fs
      .readdirSync(path)
      .filter((type) => !type.endsWith("index.ts"))
      .map((type) =>
        type.endsWith(".ts")
          ? `export * from "./${type.slice(0, -3)}.js"`
          : `export * from "./${type}/index.js"`
      )
      .join("\n") + "\r\n"
  );
};

const generateIndexFile = (path: string) => {
  fs.writeFileSync(`${path}/index.ts`, generateFileIndexContent(path));
};

const generateFileIndexContent = (path: string) => {
  return (
    fs
      .readdirSync(path)
      .filter((type) => !type.endsWith("index.ts"))
      .map(
        (type) =>
          `export * as ${toPascalCase(type)} from "./${type}/index.js"`
      )
      .join("\n") + "\r\n"
  );
};

const toPascalCase = (text: string) => {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
};

const clearAndUpper = (text: string) => {
  return text.replace(/-/, "").toUpperCase();
};
