import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { LexerGrammarCypress } from './antlr/LexerGrammarCypress';
import { ParserGrammarCypress, TestBlockContext } from './antlr/ParserGrammarCypress';
import CustomErrorListener, { ICustomErrorListener } from './CustomErrorListener'; // Importar el error listener personalizado

export function parse(input: string): {ast: TestBlockContext, errors: ICustomErrorListener[]} {

    
    //Lexer
    const chars = CharStreams.fromString(input);
    const lexer = new LexerGrammarCypress(chars);
    lexer.removeErrorListeners();
    const customErrorListener = new CustomErrorListener();
    lexer.addErrorListener(customErrorListener);

    //Parser
    const tokens = new CommonTokenStream(lexer);
    const parser = new ParserGrammarCypress(tokens);
    parser.removeErrorListeners();
    parser.addErrorListener(customErrorListener);

    const ast = parser.testBlock();
    const errors: ICustomErrorListener[] = customErrorListener.getErrors();

    return {ast, errors}
  
}

export function parseAndGetASTRoot(code: string): TestBlockContext {
    const {ast} = parse(code);
    return ast;
}
export function parseAndGetSyntaxErrors(code: string): ICustomErrorListener[] {
    const {errors} = parse(code);
    return errors;
}

const input = `describe('Testing basic Angular registration', () => {
    beforeEach(()=>{
        cy.visit('https://angular-6-registration-login-example.stackblitz.io/register')
         cy.wait(7000)
         cy.get('button').click()
     })
     it('Test links between registration and login page', () => {
         cy.get('a.btn.btn-link').click()
         cy.url().should('eq', 'https://angular-6-registration-login-example.stackblitz.io/login')
         cy.get('a.btn.btn-link').click()
         cy.url().should('eq', 'https://angular-6-registration-login-example.stackblitz.io/register')
     })
     it('Test form feedback', () => {
         cy.get('button.btn.btn-primary').click()
         cy.wait(1000)
         cy.get('div.invalid-feedback').then(($divs)=>{
             expect($divs.length).to.equal(4)
         })
     })
   
     it('Create an user and login', ()=>{
         cy.get('form').within(() => {
             cy.get('input[formcontrolname="firstName"]').type('Monitor')
             cy.get('input[formcontrolname="lastName"]').type('Pruebas')
             cy.get('input[formcontrolname="username"]').type('pruebas')
             cy.get('input[formcontrolname="password"]').type('MISO4208')
             cy.get('button.btn.btn-primary').click()
         })
         
   
         cy.wait(1000)
         //Redirected to login
         cy.get('div.alert.alert-success').should('be.visible')  
         cy.get('form').within(() => {
             cy.get('input[formcontrolname="username"]').type('pruebas')
             cy.get('input[formcontrolname="password"]').type('MISO4208')
             cy.get('button.btn.btn-primary').click()
         })
   
   
         cy.wait(1000)
         //logged in
         cy.get('h1').then(($header)=>{
             expect($header[0].innerText).to.equal('Hi Monitor!')
         })
         
         
     })

  afterEach(() => {
    // Toma una captura de pantalla después de cada prueba fallida
    
  })

})

`;

const errors = parseAndGetSyntaxErrors(input);

if (errors.length === 0)
{
    console.log("El código es correcto");
}
else{
    console.log("Se encontraron errores:");

    errors.forEach((error, index) => {
    console.log(`Error ${index + 1}: columna inicial ${error.startColumn}- Columna final ${error.endColumn} - {error.line}:${error.startLineNumber} -  ${error.message}`);
    // Puedes acceder a más información del error, si está disponible, a través de otras propiedades del objeto `error`.
  });
}

