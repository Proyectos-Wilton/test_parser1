lexer grammar LexerGrammarCypress;
 

// Lexer rules
DESCRIBE: 'describe';
IT: 'it';
BEFORE_EACH: 'beforeEach';
AFTER_EACH: 'afterEach';
ON_BEFORE_LOAD: 'onBeforeLoad';
ADD_EVENT_LISTENER: 'addEventListener';
CONTEXT: 'context';


CY: 'cy';
VISIT: 'visit';
WAIT: 'wait';
GET: 'get';
URL: 'url';
ON: 'on';
CONTAINS: 'contains';
INJECT_AXE: 'injectAxe';
CHECKA11Y :'checkA11y';
WINDOW: 'window';
STUB:'stub';
AS: 'as';
INVOKE: 'invoke';
TITTLE: 'title';
FIND: 'find';
CHECK: 'check';
LOCATION: 'location';
PAUSE: 'pause';
SELECT: 'select';
ITS: 'its';
INTERCEPT: 'intercept';

SHOULD: 'should';
WITHIN: 'within';
SKIPP: '.skip';

AND: 'and';
WRAP: 'wrap';
THEN: 'then';
EXPECT: 'expect';
TO: 'to';
TO_BE_A: 'to.be.a';
NOT_TO_BE_A: 'not.to.be.a';
EQ: 'eq';

EQUAL: 'equal';
CLICK: 'click';
TYPE: 'type';
EXIST: 'exist';
FIRST: 'first';
DATE_STRING: 'dateString';


//STRING: '\'' ~'\''* '\'' | '"' ~'"'* '"';
//STRING: '\'' ~'\''* '\'' | '"' ~'"'* '"' | '`' ~'`'* '`';

STRING: '\'' ( '\\' . | ~['\\] )* '\''
      | '"' ( '\\' . | ~['\\] )* '"'
      | '`' ( '\\' . | ~['\\] )* '`'
      ;


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

WHICH: 'which:';
TARGET: 'target:';
VALUE: 'value:';


/*
CONSOLE: 'console.log';
CONST: 'const';
THROW: 'throw';
NEW: 'new';
ERROR: 'Error';*/