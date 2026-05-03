import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
  testMatch: ["**/*.test.ts"],
  collectCoverageFrom: ["src/engine/**/*.ts", "src/tools/**/*.ts"],
  coverageThreshold: {
    global: { lines: 90 },
  },
};

export default config;
