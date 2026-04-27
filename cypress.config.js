/**
 * Cypress root config (kitchensink-compatible).
 * Commit this file at the repo root if it is missing — Cypress 10+ will not run without it.
 * baseUrl matches kitchensink + workflow PORT (8080) and CYPRESS_BASE_URL.
 */
module.exports = {
  projectId: '4b7344',
  e2e: {
    baseUrl: 'http://127.0.0.1:8080',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
  },
};
