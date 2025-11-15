import { defineConfig } from "eslint/config";

import { baseConfig } from "@ufpb-me/eslint-config/base";
import { reactConfig } from "@ufpb-me/eslint-config/react";

export default defineConfig(
  {
    ignores: [".expo/**", "expo-plugins/**"],
  },
  baseConfig,
  reactConfig,
);
