//Reglas sintácticas
parser grammar ParserGrammarCypress;

options{

    tokenVocab=LexerGrammarCypress;
}


// Parser rules
testBlock: DESCRIBE OPEN_PARENTHESIS STRING COMMA OPEN_PARENTHESIS CLOSE_PARENTHESIS ENTONCES OPEN_KEY (tagIt | tagBeforeEach | tagAfterEach )+ CLOSE_KEY CLOSE_PARENTHESIS;

tagIt: IT OPEN_PARENTHESIS STRING COMMA OPEN_PARENTHESIS CLOSE_PARENTHESIS ENTONCES OPEN_KEY (tagCy)+ CLOSE_KEY CLOSE_PARENTHESIS;
 
tagCy: CY PUNTO(tagGet | tagWait | tagVisit | tagUrl); 

tagGet: (GET OPEN_PARENTHESIS STRING CLOSE_PARENTHESIS PUNTO)(tagClick | tagType | tagThen | tagShould | tagWithin);

tagBeforeEach: BEFORE_EACH OPEN_PARENTHESIS OPEN_PARENTHESIS CLOSE_PARENTHESIS ENTONCES OPEN_KEY (tagCy)+ CLOSE_KEY CLOSE_PARENTHESIS;

tagAfterEach: AFTER_EACH OPEN_PARENTHESIS OPEN_PARENTHESIS CLOSE_PARENTHESIS ENTONCES OPEN_KEY CLOSE_KEY CLOSE_PARENTHESIS;

tagClick: CLICK OPEN_PARENTHESIS CLOSE_PARENTHESIS(tagThen)?;
tagType: TYPE OPEN_PARENTHESIS STRING CLOSE_PARENTHESIS(tagThen)?;
tagWait: WAIT OPEN_PARENTHESIS NUMBER CLOSE_PARENTHESIS(tagThen)?;
tagVisit: VISIT OPEN_PARENTHESIS STRING CLOSE_PARENTHESIS(tagThen)?;
tagUrl: URL OPEN_PARENTHESIS CLOSE_PARENTHESIS PUNTO(tagShould);



/*Falta definir las parametros para el tag then*/
tagThen: THEN OPEN_PARENTHESIS OPEN_PARENTHESIS (tagParam)? CLOSE_PARENTHESIS ENTONCES OPEN_KEY (expressionExpect)* CLOSE_KEY CLOSE_PARENTHESIS;
tagShould: SHOULD OPEN_PARENTHESIS (STRING (COMMA STRING (COMMA STRING)?)?) CLOSE_PARENTHESIS;
tagWithin: WITHIN OPEN_PARENTHESIS OPEN_PARENTHESIS CLOSE_PARENTHESIS ENTONCES OPEN_KEY (tagCy)+ CLOSE_KEY CLOSE_PARENTHESIS;

expressionExpect: EXPECT OPEN_PARENTHESIS (tagParam) (tagIndex)? (LENGTH | INNERTEXT) CLOSE_PARENTHESIS PUNTO TO PUNTO(tagEqual);

tagEqual: EQUAL OPEN_PARENTHESIS (STRING | NUMBER) CLOSE_PARENTHESIS;
tagParam:  PESO PARAMETER;
tagIndex: OPEN_BRACKET NUMBER CLOSE_BRACKET;



/*
 * Parser Rules


chat                : line + EOF ;

line                : name command message NEWLINE ;

message             : (emoticon | link | color | mention | WORD | WHITESPACE)+ ;

name                : WORD WHITESPACE;

command             : (SAYS | SHOUTS) DOS_PUNTOS WHITESPACE ;
                                        
emoticon            : DOS_PUNTOS '-'? ')'
                    | DOS_PUNTOS '-'? '('
                    ;

link                : TEXT TEXT ;

color               : '/' WORD '/' message '/';

mention             : '@' WORD ;

*/