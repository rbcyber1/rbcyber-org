import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
    {
        ignores: ["**/dist/**", "**/node_modules/**", "**/build/**"],
    },
    js.configs.recommended,

    {
        files: ["server/**/*.js", "scripts/**/*.js"],
        languageOptions: {
            globals: globals.node,
            ecmaVersion: "latest",
            sourceType: "module",
        },
    },

    ...tseslint.configs.recommended.map((config) => ({
        ...config,
        files: ["client/**/*.{ts,tsx}"],
    })),
    {
        files: ["client/**/*.{ts,tsx}"],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
        },
    },
];
