//Reglas sintácticas
parser grammar ParserGrammarCypress;

options{

    tokenVocab=LexerGrammarCypress;
}


// Parser rules
testBlock: DESCRIBE OPEN_KEY STRING COMMA OPEN_KEY CLOSE_KEY ENTONCES OPEN_KEY (tagIt | tagBeforeEach | tagAfterEach )+ CLOSE_KEY CLOSE_KEY;

tagIt: IT OPEN_KEY STRING COMMA OPEN_KEY CLOSE_KEY ENTONCES OPEN_KEY (tagCy)+ CLOSE_KEY CLOSE_KEY;
 
tagCy: CY PUNTO(tagGet | tagWait | tagVisit | tagUrl); 

tagGet: (GET OPEN_KEY STRING CLOSE_KEY PUNTO)(tagClick | tagType | tagThen | tagShould | tagWithin);

tagBeforeEach: BEFORE_EACH OPEN_KEY OPEN_KEY CLOSE_KEY ENTONCES OPEN_KEY (tagCy)+ CLOSE_KEY CLOSE_KEY;

tagAfterEach: AFTER_EACH OPEN_KEY OPEN_KEY CLOSE_KEY ENTONCES OPEN_KEY CLOSE_KEY CLOSE_KEY;

tagClick: CLICK OPEN_KEY CLOSE_KEY(tagThen)?;
tagType: TYPE OPEN_KEY STRING CLOSE_KEY(tagThen)?;
tagWait: WAIT OPEN_KEY NUMBER CLOSE_KEY(tagThen)?;
tagVisit: VISIT OPEN_KEY STRING CLOSE_KEY(tagThen)?;
tagUrl: URL OPEN_KEY CLOSE_KEY PUNTO(tagShould);



/*Falta definir las parametros para el tag then*/
tagThen: THEN OPEN_KEY OPEN_KEY (tagParam)? CLOSE_KEY ENTONCES OPEN_KEY (expressionExpect)* CLOSE_KEY CLOSE_KEY;
tagShould: SHOULD OPEN_KEY (STRING (COMMA STRING (COMMA STRING)?)?) CLOSE_KEY;
tagWithin: WITHIN OPEN_KEY OPEN_KEY CLOSE_KEY ENTONCES OPEN_KEY (tagCy)+ CLOSE_KEY CLOSE_KEY;

expressionExpect: EXPECT OPEN_KEY tagParam CLOSE_KEY PUNTO TO PUNTO(tagEqual | EXIST );


tagEqual: EQUAL OPEN_KEY (STRING | NUMBER) CLOSE_KEY;

tagParam: PESO PARAMETER;
tagIndex: OPEN_KEY NUMBER CLOSE_KEY;



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