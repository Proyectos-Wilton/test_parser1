lexer grammar LexerGrammarCypress;
 

// Lexer rules
DESCRIBE: 'describe';
IT: 'it';
BEFORE_EACH: 'beforeEach';
AFTER_EACH: 'afterEach';
ON_BEFORE_LOAD: 'onBeforeLoad';
ADD_EVENT_LISTENER: 'addEventListener';

CY: 'cy';

VISIT: 'visit';
WAIT: 'wait';
GET: 'get';
URL: 'url';
CONTAINS: 'contains';
INJECT_AXE: 'injectAxe';
CHECKA11Y :'checkA11y';

SHOULD: 'should';
WITHIN: 'within';
SKIPP: '.skip';

THEN: 'then';
EXPECT: 'expect';
TO: 'to';


EQUAL: 'equal';
CLICK: 'click';
TYPE: 'type';
EXIST: 'exist';


//STRING: '\'' ~'\''* '\'' | '"' ~'"'* '"';
STRING: '\'' ~'\''* '\'' | '"' ~'"'* '"' | '`' ~'`'* '`';
NUMBER: [0-9]+;
WS: [ \t\r\n]+ -> skip;
OPEN_KEY: '{';
CLOSE_KEY: '}';
OPEN_PARENTHESIS: '(';
CLOSE_PARENTHESIS: ')';
OPEN_BRACKET: '[';
CLOSE_BRACKET: ']';

//BACKTICK: '`';
ENTONCES: '=>';
COMMA: ',';
IGUAL: '=';
PUNTO: '.';
COMMENT1: '//' ~[\r\n]* -> skip;
COMMENT2: '/*' .*? '*/' -> skip;
PARAMETER: [a-zA-Z_][a-zA-Z_0-9]*;
PESO: '$';
INNERTEXT:'.innerText';
LENGTH: '.length';
CONSOLE: 'console.log';

CONST: 'const';
THROW: 'throw';
NEW: 'new';
ERROR: 'Error';