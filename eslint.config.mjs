// eslint.config.js
import nextConfig from "eslint-config-next";

export default [
  {
    ...nextConfig,
    ignorePatterns: ["src/components/ui/**/*"],
    rules: {
      // Add any custom rules here
    },
  },
];
