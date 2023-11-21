// cypress/integration/example.spec.js

describe('Ejemplo de prueba con JavaScript y Cypress', () => {
    it('debería realizar una acción en la página', () => {
      // Visitar el sitio web
      cy.visit('https://www.ejemplo.com');
  
      // Realizar una acción utilizando JavaScript y Cypress
      cy.get('button').then(($button) => {
        // Acceder al elemento DOM con jQuery (que Cypress incluye)
        const buttonText = $button.text().trim();
  
        // Realizar una acción basada en el contenido del botón
        if (buttonText === 'Hacer Algo') {
          // Realizar una acción específica si el botón contiene el texto 'Hacer Algo'
          cy.log('Realizando algo...');
        } else {
          // Realizar otra acción si el botón contiene un texto diferente
          cy.log('Realizando otra acción...');
        }
      });
  
      // Puedes seguir con otros comandos de Cypress después de realizar acciones con JavaScript
      cy.get('#miElemento').click();
      cy.url().should('include', '/nueva-pagina');
    });
  });
  