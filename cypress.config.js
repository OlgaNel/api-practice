const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api.airtable.com/v0',
    env: {
      dbId: 'appuWIhbCfKu1F3Ud',
      tableName: 'Devices',
      token: 'Bearer patwAkKR8WsOjoq5d.b1e1e9aaf40f79f444a90f1a05699b199f5da4802824fbb25cb5a7fa7a705832'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
