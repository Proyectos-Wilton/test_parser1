import * as antlr4 from 'antlr4';
import JavaScriptLexer from './antlr/JavaScriptLexer.js';
import JavaScriptParser from './antlr/JavaScriptParser.js';
import CustomErrorListener from './CustomErrorListener.js';

const sourceCode = `

describe('A11y passes', () => {
  beforeEach(() => {
    cy.visit('index.html')
  })

  it('accessibility check', () => {
    cy.location("path")
  })
})
`;

export function parse (input)
{
    const chars = new antlr4.InputStream(input);
    const lexer = new JavaScriptLexer(chars);
    lexer.removeErrorListeners();
    const customErrorListener =  new CustomErrorListener();
    lexer.addErrorListener(customErrorListener);
    const tokens  = new antlr4.CommonTokenStream(lexer);
    const parser = new JavaScriptParser(tokens);
    parser.removeErrorListeners();
    parser.addErrorListener(customErrorListener);
    //parser.buildParseTrees = true;

    // Initiate the parsing, and begin with the root rule.
    const parserResult = parser.program();
    //console.log("Resultado del análisis: ", parserResult);

    const customErrors = customErrorListener.getErrors()
    if (customErrors.length > 0 )
    {
        console.log("Hay errores: ", customErrors)
    }else{
        console.log("Todo bien", input)
    }

}

parse(sourceCode);

