import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginStyle from "eslint-plugin-style";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      react: pluginReact,
      style: pluginStyle,
    },
    rules: {
      // Disable rules
      "style/newline-before-return": "off",
      "react/react-in-jsx-scope": "off",

      // Allow jsx in ts/tsx/js/jsx files
      "react/jsx-filename-extension": [
        "warn",
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
    },
  },
  ...tseslint.configs.recommended,
  ...pluginReact.configs.flat.recommended,
]);
