import * as antlr4 from 'antlr4';
import {JavaScriptLexer} from './antlr/JavaScriptLexer';
import {JavaScriptParser} from './antlr/JavaScriptParser';

// Define el código fuente que deseas analizar
const sourceCode = `
    function add(a, b) {
        return a + b;
    }
`;

const chars = new antlr4.InputStream(sourceCode);
const lexer = new SequenceLexer(chars);
const tokens  = new antlr4.CommonTokenStream(lexer);
const parser = new SequenceParser(tokens);
parser.buildParseTrees = true;

// Initiate the parsing, and begin with the root rule.
const parserResult = parser.root();
