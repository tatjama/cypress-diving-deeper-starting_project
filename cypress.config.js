import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        seedDatabase(file) {
          // some Node code
          // e.g. edit some file here
          return file
        }
      })
    },
  },
});
