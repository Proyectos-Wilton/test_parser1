import { ErrorListener } from 'antlr4';

export default class CustomErrorListener extends ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }

  syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    this.errors.push({
      startLineNumber: line,
      endLineNumber: line,
      startColumn: charPositionInLine,
      endColumn: charPositionInLine + 1,
      message: msg,
      code: '1'
    });
  }

  getErrors() {
    return this.errors;
  }
}
