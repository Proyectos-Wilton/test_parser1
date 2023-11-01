/*import { CharStreams, CommonTokenStream } from 'antlr4';
import { JavaScriptLexer } from './antlr/JavaScriptLexer';
import { JavaScriptParser, ProgramContext } from './antlr/JavaScriptParser';
import CustomErrorListener, { ICustomErrorListener } from './CustomErrorListener';

// Importar el error listener personalizado
import fs from 'fs';
import path from 'path';

export function parse(input: string): {ast: ProgramContext, errors: ICustomErrorListener[]} {

    
    //Lexer
    const chars = CharStreams.fromString(input);
    const lexer = new JavaScriptLexer(chars);
    lexer.removeErrorListeners();
    const customErrorListener = new CustomErrorListener();
    lexer.addErrorListener(customErrorListener);

    //Parser
    const tokens = new CommonTokenStream(lexer);
    const parser = new JavaScriptParser(tokens);
    parser.removeErrorListeners();
    parser.addErrorListener(customErrorListener);

    const ast = parser.program();
    const errors: ICustomErrorListener[] = customErrorListener.getErrors();

    return {ast, errors}
  
}

export function parseAndGetASTRoot(code: string): ProgramContext {
    const {ast} = parse(code);
    return ast;
}
export function parseAndGetSyntaxErrors(code: string): ICustomErrorListener[] {
    const {errors} = parse(code);
    return errors;
}
const folderPath = path.join(__dirname, '../prueba');

const files = fs.readdirSync(folderPath);


function analyzeFile(filePath: string, fileName: string) {
    const code = fs.readFileSync(filePath, 'utf8');
    const errors = parseAndGetSyntaxErrors(code);
  
    if (errors.length === 0) {
      console.log(`El código en "${fileName}" es correcto.`);
    } else {
      console.log(`Se encontraron errores en "${fileName}":`);
  
      errors.forEach((error, index) => {
        console.log(`Error ${index + 1}: columna inicial: ${error.startColumn} - Columna final: ${error.endColumn} - linea: ${error.startLineNumber} -  mensaje: ${error.message}`);
      });
    }
  }


files.forEach((file) => {
    console.log('-------------------------', file, '-------------------------');
    const filePath = path.join(folderPath, file);
    analyzeFile(filePath, file);
    
});
*/