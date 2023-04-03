module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  bracketSpacing: true,
  arrowParens: "avoid",
  quoteProps: "consistent",
  jsxSingleQuote: true,
  jsxBracketSameLine: false,
  requirePragma: false,
  insertPragma: false,
  proseWrap: "never",
  endOfLine: "auto",
  eslintIntegration: true,
  overrides: [
    {
      files: "*.js",
      options: {
        parser: "babel",
      },
    },
    {
      files: "*.ts",
      options: {
        parser: "typescript",
      },
    },
  ],
};
