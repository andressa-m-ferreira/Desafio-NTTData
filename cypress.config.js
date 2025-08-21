const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://front.serverest.dev',
    env: {
      apiUrl: 'https://serverest.dev'
    },
    // Configurações do Mochawesome
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results', // Onde os relatórios serão salvos
      overwrite: false, // Não sobrescrever relatórios antigos
      html: true, // Gerar relatório HTML
      json: true, // Gerar relatório JSON
      timestamp: 'ddmmyyyy_HHMMss' 
    }
  },
});
