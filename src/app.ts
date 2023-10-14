import { ESLint } from 'eslint';
import path from 'path';

// Crea una instancia de ESLint sin especificar la ubicación del archivo de configuración
const linter = new ESLint();

// Ruta al archivo Cypress que deseas analizar (reemplaza con tu lógica para obtener el archivo)
// Ruta relativa al archivo pruebaNoValido.cy.js desde app.ts
const filePath = path.join(__dirname, '../prueba/registration.cy.js');


// Realiza el análisis estático del archivo
async function lint() {
    const results = await linter.lintFiles([filePath]);
    console.log(results[0].messages);
}

lint();
