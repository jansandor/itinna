import type { Config } from "prettier";

const config: Config = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  endOfLine: "lf",
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  arrowParens: "always",

  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
