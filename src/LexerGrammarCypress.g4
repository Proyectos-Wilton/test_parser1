lexer grammar LexerGrammarCypress;
 

// Lexer rules
DESCRIBE: 'describe';
IT: 'it';
BEFORE_EACH: 'beforeEach';
AFTER_EACH: 'afterEach';

CY: 'cy';

VISIT: 'visit';
WAIT: 'wait';
GET: 'get';
URL: 'url';


SHOULD: 'should';
WITHIN: 'within';


THEN: 'then';
EXPECT: 'expect';
TO: 'to';


EQUAL: 'equal';
CLICK: 'click';
TYPE: 'type';
EXIST: 'exist';


STRING: '\'' ~'\''* '\'' | '"' ~'"'* '"';
NUMBER: [0-9]+;
WS: [ \t\r\n]+ -> skip;
OPEN_KEY: '{' | '(' | '[';
CLOSE_KEY: '}' | ')' | ']';
ENTONCES: '=>';
COMMA: ',';
PUNTO: '.';
COMMENT1: '//' ~[\r\n]* -> skip;
COMMENT2: '/*' .*? '*/' -> skip;
PARAMETER: [a-zA-Z_][a-zA-Z_0-9]*;
PESO: '$';
INNERTEXT:'innerText';
LENGTH: 'length';

/* 
 * Lexer Rules
 

fragment A          : ('A'|'a') ;
fragment S          : ('S'|'s') ;
fragment Y          : ('Y'|'y') ;
fragment H          : ('H'|'h') ;
fragment O          : ('O'|'o') ;
fragment U          : ('U'|'u') ;
fragment T          : ('T'|'t') ;

fragment LOWERCASE  : [a-z] ;
fragment UPPERCASE  : [A-Z] ;

SAYS                : S A Y S ;

SHOUTS              : S H O U T S ;

WORD                : (LOWERCASE | UPPERCASE | '_')+ ;

WHITESPACE          : (' ' | '\t')+ ;

NEWLINE             : ('\r'? '\n' | '\r')+ ;

TEXT                : ('['|'(') ~[\])]+ (']'|')');

DOS_PUNTOS          : ':' ;  

*/