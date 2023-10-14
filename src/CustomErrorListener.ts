import { RecognitionException, Recognizer, ANTLRErrorListener } from 'antlr4ts';

export interface ICustomErrorListener {
  startLineNumber: number;
  startColumn: number;
  endLineNumber: number;
  endColumn: number;
  message: string;
  code: string;
}

export default class CustomErrorListener implements ANTLRErrorListener<any>{
  private errors: ICustomErrorListener[] = []
  syntaxError(recognizer: Recognizer<any, any>, offendingSymbol: any, line: number, charPositionInLine: number, message: string, e: RecognitionException | undefined): void {
      
      this.errors.push(
          {
              startLineNumber:line,
              endLineNumber: line,
              startColumn: charPositionInLine,
              endColumn: charPositionInLine+1,
              message,
              code: "1" 
          }
      )
  }

  getErrors(): ICustomErrorListener[] {
      return this.errors;
  }
}