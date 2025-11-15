import { defineConfig } from "eslint/config";

import { baseConfig, restrictEnvAccess } from "@ufpb-me/eslint-config/base";
import { nextjsConfig } from "@ufpb-me/eslint-config/nextjs";
import { reactConfig } from "@ufpb-me/eslint-config/react";

export default defineConfig(
  {
    ignores: [".next/**"],
  },
  baseConfig,
  reactConfig,
  nextjsConfig,
  restrictEnvAccess,
);
