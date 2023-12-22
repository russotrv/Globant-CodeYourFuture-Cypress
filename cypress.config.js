const { defineConfig } = require ("cypress")

module.exports = defineConfig({
    e2e:{
        setupNodeEvents(on, config){

        },
        //baseUrl:'https://wikipedia.org',
        //viewportHeight: 550,
        //viesportWidth: 650
        experimentalStudio: true
    },
});