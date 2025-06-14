import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginStyle from "eslint-plugin-style";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    plugins: {
      style: pluginStyle,
    },
    rules: {
      // Turn off the newline-before-return rule
      "style/newline-before-return": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
