/* eslint-disable @typescript-eslint/no-require-imports */
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:5173",
    supportFile: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
  },
});
