import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: [
    "typescript",
    "oxc",
    "unicorn",
    "react",
    "react-perf",
    "nextjs",
    "jsx-a11y",
  ],
  categories: {
    correctness: "error",
    suspicious: "warn",
    perf: "warn",
  },
  rules: {
    // Next.js uses the automatic JSX runtime, so `React` is never in scope.
    "react/react-in-jsx-scope": "off",
  },
  ignorePatterns: [
    "next-env.d.ts",
    ".next/**",
    "out/**",
    "build/**",
    "coverage/**",
  ],
});
