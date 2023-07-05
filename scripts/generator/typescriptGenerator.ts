import { ClassDefinition, EnumItem, FieldItem } from "./typeScrapper.js";

export const generateObject = (name: string, def: ClassDefinition) => {
  const fields = def.fields?.map((field) => generateField(field)).join("\n");
  const enums = def.enum_values?.map((item) => generateEnum(item)).join("\n");
  const imports = generateImports(def);
  const lastKey = name.split(".").pop();

  const sb: string[] = [];

  if (imports) sb.push(imports);

  if (fields) sb.push(`export type ${lastKey} = {\r\n${fields}\r\n}\r\n`);

  if (enums) sb.push(`export enum ${lastKey}Enum {\r\n${enums}\r\n}\r\n`);

  return sb.join("\r\n");
};

const generateImports = (def: ClassDefinition) => {
  const imports = def.fields
    ?.map((field) =>
      field.reference.map(
        (ref) => `import { ${ref.name} } from "./${ref.path}.js"`
      )
    )
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort()
    .join("\n");
  return imports;
};

const generateField = (field: FieldItem) => {
  const required = field.required ? "" : "?";
  const isArray = field.isArrayOf ? "[]" : "";
  if (field.type === "integer") field.type = "number";
  const doc = ["\t/**", `\t * ${field.description}`];
  if (field.deprecated) doc.push("\t * @deprecated");
  doc.push("\t */");
  return `${doc.join("\r\n")}\r\n\t${field.name}${required}: ${
    field.type
  }${isArray};`;
};

const generateEnum = (item: EnumItem) => {
  const cleanDescription = item.description.replaceAll("\n", "").trim();
  const doc = ["\t/**", `\t * ${cleanDescription}`];
  if (item.deprecated) doc.push("\t * @deprecated");
  doc.push("\t */");

  return `${item.deprecated || cleanDescription ? doc.join("\r\n") + "\r\n" : ""}\t${item.name} = "${item.name}",`;
};
