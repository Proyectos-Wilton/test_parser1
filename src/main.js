import * as antlr4 from 'antlr4';
import JavaScriptLexer from './antlr/JavaScriptLexer.js';
import JavaScriptParser from './antlr/JavaScriptParser.js';
import CustomErrorListene from './CustomErrorListener.js';

const sourceCode = `
    function add(a, b) {
        return a + b;
    }
`;

export function parse (input)
{
    const chars = new antlr4.InputStream(input);
    const lexer = new JavaScriptLexer(chars);
    lexer.removeErrorListeners();
    const customErrorListener =  new CustomErrorListene();
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
    } 

}

parse(sourceCode);

