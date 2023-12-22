const { defineConfig } = require ("cypress");

module.exports = defineConfig({
    "baseUrl": "https://practicetestautomation.com/practice-test-login/",
    "experimentalModuleVariables": true,
    "supportFile": "cypress/support/index.js",
    e2e:{
        setupNodeEvents(on, config){

        },
        //viewportHeight: 550,
        //viesportWidth: 650
        experimentalStudio: true
    },
});