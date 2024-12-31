import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

/** @tyoe {import('eslint').linter.config[]} */

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
];
