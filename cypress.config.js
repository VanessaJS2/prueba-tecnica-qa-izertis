const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries: {runMode:2, openMode:0},
    env:{ 
      api:"https://petstore.swagger.io/v2/",
      snapshotOnly: true,
      requestMode:true
    },

    baseUrl:"https://es.wikipedia.org/wiki/",
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
  video:true,
  chromeWebSecurity:false,
});
