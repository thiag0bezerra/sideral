import { defineConfig } from "eslint/config";

import { baseConfig, restrictEnvAccess } from "@ufpb-me/eslint-config/base";

export default defineConfig(
  {
    ignores: ["script/**"],
  },
  baseConfig,
  restrictEnvAccess,
);
