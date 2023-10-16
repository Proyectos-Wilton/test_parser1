// Generated from ./src/ParserGrammarCypress.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ParserGrammarCypressListener } from "./ParserGrammarCypressListener";
import { ParserGrammarCypressVisitor } from "./ParserGrammarCypressVisitor";


export class ParserGrammarCypress extends Parser {
	public static readonly DESCRIBE = 1;
	public static readonly IT = 2;
	public static readonly BEFORE_EACH = 3;
	public static readonly AFTER_EACH = 4;
	public static readonly ON_BEFORE_LOAD = 5;
	public static readonly ADD_EVENT_LISTENER = 6;
	public static readonly CONTEXT = 7;
	public static readonly CY = 8;
	public static readonly VISIT = 9;
	public static readonly WAIT = 10;
	public static readonly GET = 11;
	public static readonly URL = 12;
	public static readonly ON = 13;
	public static readonly CONTAINS = 14;
	public static readonly INJECT_AXE = 15;
	public static readonly CHECKA11Y = 16;
	public static readonly WINDOW = 17;
	public static readonly STUB = 18;
	public static readonly AS = 19;
	public static readonly INVOKE = 20;
	public static readonly TITTLE = 21;
	public static readonly FIND = 22;
	public static readonly CHECK = 23;
	public static readonly LOCATION = 24;
	public static readonly PAUSE = 25;
	public static readonly SELECT = 26;
	public static readonly ITS = 27;
	public static readonly INTERCEPT = 28;
	public static readonly SHOULD = 29;
	public static readonly WITHIN = 30;
	public static readonly SKIPP = 31;
	public static readonly AND = 32;
	public static readonly WRAP = 33;
	public static readonly THEN = 34;
	public static readonly EXPECT = 35;
	public static readonly TO = 36;
	public static readonly TO_BE_A = 37;
	public static readonly NOT_TO_BE_A = 38;
	public static readonly EQ = 39;
	public static readonly EQUAL = 40;
	public static readonly CLICK = 41;
	public static readonly TYPE = 42;
	public static readonly EXIST = 43;
	public static readonly FIRST = 44;
	public static readonly DATE_STRING = 45;
	public static readonly STRING = 46;
	public static readonly NUMBER = 47;
	public static readonly WS = 48;
	public static readonly OPEN_KEY = 49;
	public static readonly CLOSE_KEY = 50;
	public static readonly OPEN_PARENTHESIS = 51;
	public static readonly CLOSE_PARENTHESIS = 52;
	public static readonly OPEN_BRACKET = 53;
	public static readonly CLOSE_BRACKET = 54;
	public static readonly ENTONCES = 55;
	public static readonly COMMA = 56;
	public static readonly IGUAL = 57;
	public static readonly PUNTO = 58;
	public static readonly COMMENT1 = 59;
	public static readonly COMMENT2 = 60;
	public static readonly PARAMETER = 61;
	public static readonly PESO = 62;
	public static readonly INNERTEXT = 63;
	public static readonly LENGTH = 64;
	public static readonly WHICH = 65;
	public static readonly TARGET = 66;
	public static readonly VALUE = 67;
	public static readonly RULE_testBlock = 0;
	public static readonly RULE_tagContext = 1;
	public static readonly RULE_tagIt = 2;
	public static readonly RULE_tagCy = 3;
	public static readonly RULE_tagGet = 4;
	public static readonly RULE_tagBeforeEach = 5;
	public static readonly RULE_tagAfterEach = 6;
	public static readonly RULE_tagClick = 7;
	public static readonly RULE_tagType = 8;
	public static readonly RULE_tagWait = 9;
	public static readonly RULE_tagVisit = 10;
	public static readonly RULE_tagUrl = 11;
	public static readonly RULE_tagOn = 12;
	public static readonly RULE_tagIntercept = 13;
	public static readonly RULE_tagWindow = 14;
	public static readonly RULE_tagSelect = 15;
	public static readonly RULE_tagPause = 16;
	public static readonly RULE_tagTittle = 17;
	public static readonly RULE_tagFunction = 18;
	public static readonly RULE_tagFind = 19;
	public static readonly RULE_tagStub = 20;
	public static readonly RULE_tagContains = 21;
	public static readonly RULE_tagInjectAxe = 22;
	public static readonly RULE_tagCheckA11y = 23;
	public static readonly RULE_tagCheck = 24;
	public static readonly RULE_tagIts = 25;
	public static readonly RULE_tagInvoke = 26;
	public static readonly RULE_tagWhich = 27;
	public static readonly RULE_tagTarget = 28;
	public static readonly RULE_tagValue = 29;
	public static readonly RULE_tagLocation = 30;
	public static readonly RULE_tagFirst = 31;
	public static readonly RULE_tagEq = 32;
	public static readonly RULE_tagThen = 33;
	public static readonly RULE_tagShould = 34;
	public static readonly RULE_tagWithin = 35;
	public static readonly RULE_tagAnd = 36;
	public static readonly RULE_tagDataString = 37;
	public static readonly RULE_tagWrap = 38;
	public static readonly RULE_expressionExpect = 39;
	public static readonly RULE_tagEqual = 40;
	public static readonly RULE_tagParam = 41;
	public static readonly RULE_tagIndex = 42;
	public static readonly RULE_tagAs = 43;
	public static readonly RULE_tagEventOnBeforeLoad = 44;
	public static readonly RULE_tagEventListener = 45;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"testBlock", "tagContext", "tagIt", "tagCy", "tagGet", "tagBeforeEach", 
		"tagAfterEach", "tagClick", "tagType", "tagWait", "tagVisit", "tagUrl", 
		"tagOn", "tagIntercept", "tagWindow", "tagSelect", "tagPause", "tagTittle", 
		"tagFunction", "tagFind", "tagStub", "tagContains", "tagInjectAxe", "tagCheckA11y", 
		"tagCheck", "tagIts", "tagInvoke", "tagWhich", "tagTarget", "tagValue", 
		"tagLocation", "tagFirst", "tagEq", "tagThen", "tagShould", "tagWithin", 
		"tagAnd", "tagDataString", "tagWrap", "expressionExpect", "tagEqual", 
		"tagParam", "tagIndex", "tagAs", "tagEventOnBeforeLoad", "tagEventListener",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'describe'", "'it'", "'beforeEach'", "'afterEach'", "'onBeforeLoad'", 
		"'addEventListener'", "'context'", "'cy'", "'visit'", "'wait'", "'get'", 
		"'url'", "'on'", "'contains'", "'injectAxe'", "'checkA11y'", "'window'", 
		"'stub'", "'as'", "'invoke'", "'title'", "'find'", "'check'", "'location'", 
		"'pause'", "'select'", "'its'", "'intercept'", "'should'", "'within'", 
		"'.skip'", "'and'", "'wrap'", "'then'", "'expect'", "'to'", "'to.be.a'", 
		"'not.to.be.a'", "'eq'", "'equal'", "'click'", "'type'", "'exist'", "'first'", 
		"'dateString'", undefined, undefined, undefined, "'{'", "'}'", "'('", 
		"')'", "'['", "']'", "'=>'", "','", "'='", "'.'", undefined, undefined, 
		undefined, "'$'", "'.innerText'", "'.length'", "'which:'", "'target:'", 
		"'value:'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DESCRIBE", "IT", "BEFORE_EACH", "AFTER_EACH", "ON_BEFORE_LOAD", 
		"ADD_EVENT_LISTENER", "CONTEXT", "CY", "VISIT", "WAIT", "GET", "URL", 
		"ON", "CONTAINS", "INJECT_AXE", "CHECKA11Y", "WINDOW", "STUB", "AS", "INVOKE", 
		"TITTLE", "FIND", "CHECK", "LOCATION", "PAUSE", "SELECT", "ITS", "INTERCEPT", 
		"SHOULD", "WITHIN", "SKIPP", "AND", "WRAP", "THEN", "EXPECT", "TO", "TO_BE_A", 
		"NOT_TO_BE_A", "EQ", "EQUAL", "CLICK", "TYPE", "EXIST", "FIRST", "DATE_STRING", 
		"STRING", "NUMBER", "WS", "OPEN_KEY", "CLOSE_KEY", "OPEN_PARENTHESIS", 
		"CLOSE_PARENTHESIS", "OPEN_BRACKET", "CLOSE_BRACKET", "ENTONCES", "COMMA", 
		"IGUAL", "PUNTO", "COMMENT1", "COMMENT2", "PARAMETER", "PESO", "INNERTEXT", 
		"LENGTH", "WHICH", "TARGET", "VALUE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ParserGrammarCypress._LITERAL_NAMES, ParserGrammarCypress._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ParserGrammarCypress.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ParserGrammarCypress.g4"; }

	// @Override
	public get ruleNames(): string[] { return ParserGrammarCypress.ruleNames; }

	// @Override
	public get serializedATN(): string { return ParserGrammarCypress._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ParserGrammarCypress._ATN, this);
	}
	// @RuleVersion(0)
	public testBlock(): TestBlockContext {
		let _localctx: TestBlockContext = new TestBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ParserGrammarCypress.RULE_testBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(ParserGrammarCypress.DESCRIBE);
			this.state = 93;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 94;
			this.match(ParserGrammarCypress.STRING);
			this.state = 95;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 96;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 97;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 98;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 99;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 104;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.IT:
					{
					this.state = 100;
					this.tagIt();
					}
					break;
				case ParserGrammarCypress.BEFORE_EACH:
					{
					this.state = 101;
					this.tagBeforeEach();
					}
					break;
				case ParserGrammarCypress.AFTER_EACH:
					{
					this.state = 102;
					this.tagAfterEach();
					}
					break;
				case ParserGrammarCypress.CONTEXT:
					{
					this.state = 103;
					this.tagContext();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ParserGrammarCypress.IT) | (1 << ParserGrammarCypress.BEFORE_EACH) | (1 << ParserGrammarCypress.AFTER_EACH) | (1 << ParserGrammarCypress.CONTEXT))) !== 0));
			this.state = 108;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 109;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagContext(): TagContextContext {
		let _localctx: TagContextContext = new TagContextContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ParserGrammarCypress.RULE_tagContext);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(ParserGrammarCypress.CONTEXT);
			this.state = 112;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 113;
			this.match(ParserGrammarCypress.STRING);
			this.state = 114;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 115;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 116;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 117;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 118;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 119;
				this.tagIt();
				}
				}
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ParserGrammarCypress.IT);
			this.state = 124;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 125;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagIt(): TagItContext {
		let _localctx: TagItContext = new TagItContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ParserGrammarCypress.RULE_tagIt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.match(ParserGrammarCypress.IT);
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.SKIPP) {
				{
				this.state = 128;
				this.match(ParserGrammarCypress.SKIPP);
				}
			}

			this.state = 131;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 132;
			this.match(ParserGrammarCypress.STRING);
			this.state = 133;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 134;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 135;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 136;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 137;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 140;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.CY:
					{
					this.state = 138;
					this.tagCy();
					}
					break;
				case ParserGrammarCypress.EXPECT:
					{
					this.state = 139;
					this.expressionExpect();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ParserGrammarCypress.CY || _la === ParserGrammarCypress.EXPECT);
			this.state = 144;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 145;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagCy(): TagCyContext {
		let _localctx: TagCyContext = new TagCyContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ParserGrammarCypress.RULE_tagCy);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(ParserGrammarCypress.CY);
			this.state = 148;
			this.match(ParserGrammarCypress.PUNTO);
			this.state = 164;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParserGrammarCypress.GET:
				{
				this.state = 149;
				this.tagGet();
				}
				break;
			case ParserGrammarCypress.WAIT:
				{
				this.state = 150;
				this.tagWait();
				}
				break;
			case ParserGrammarCypress.VISIT:
				{
				this.state = 151;
				this.tagVisit();
				}
				break;
			case ParserGrammarCypress.URL:
				{
				this.state = 152;
				this.tagUrl();
				}
				break;
			case ParserGrammarCypress.CONTAINS:
				{
				this.state = 153;
				this.tagContains();
				}
				break;
			case ParserGrammarCypress.INJECT_AXE:
				{
				this.state = 154;
				this.tagInjectAxe();
				}
				break;
			case ParserGrammarCypress.CHECKA11Y:
				{
				this.state = 155;
				this.tagCheckA11y();
				}
				break;
			case ParserGrammarCypress.ON:
				{
				this.state = 156;
				this.tagOn();
				}
				break;
			case ParserGrammarCypress.STUB:
				{
				this.state = 157;
				this.tagStub();
				}
				break;
			case ParserGrammarCypress.WINDOW:
				{
				this.state = 158;
				this.tagWindow();
				}
				break;
			case ParserGrammarCypress.TITTLE:
				{
				this.state = 159;
				this.tagTittle();
				}
				break;
			case ParserGrammarCypress.LOCATION:
				{
				this.state = 160;
				this.tagLocation();
				}
				break;
			case ParserGrammarCypress.PAUSE:
				{
				this.state = 161;
				this.tagPause();
				}
				break;
			case ParserGrammarCypress.INTERCEPT:
				{
				this.state = 162;
				this.tagIntercept();
				}
				break;
			case ParserGrammarCypress.WRAP:
				{
				this.state = 163;
				this.tagWrap();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagGet(): TagGetContext {
		let _localctx: TagGetContext = new TagGetContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ParserGrammarCypress.RULE_tagGet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 166;
			this.match(ParserGrammarCypress.GET);
			this.state = 167;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 168;
			this.match(ParserGrammarCypress.STRING);
			this.state = 169;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 171;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 182;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.CLICK:
					{
					this.state = 172;
					this.tagClick();
					}
					break;
				case ParserGrammarCypress.TYPE:
					{
					this.state = 173;
					this.tagType();
					}
					break;
				case ParserGrammarCypress.THEN:
					{
					this.state = 174;
					this.tagThen();
					}
					break;
				case ParserGrammarCypress.SHOULD:
					{
					this.state = 175;
					this.tagShould();
					}
					break;
				case ParserGrammarCypress.WITHIN:
					{
					this.state = 176;
					this.tagWithin();
					}
					break;
				case ParserGrammarCypress.EQ:
					{
					this.state = 177;
					this.tagEq();
					}
					break;
				case ParserGrammarCypress.FIND:
					{
					this.state = 178;
					this.tagFind();
					}
					break;
				case ParserGrammarCypress.CONTAINS:
					{
					this.state = 179;
					this.tagContains();
					}
					break;
				case ParserGrammarCypress.PAUSE:
					{
					this.state = 180;
					this.tagPause();
					}
					break;
				case ParserGrammarCypress.SELECT:
					{
					this.state = 181;
					this.tagSelect();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagBeforeEach(): TagBeforeEachContext {
		let _localctx: TagBeforeEachContext = new TagBeforeEachContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ParserGrammarCypress.RULE_tagBeforeEach);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(ParserGrammarCypress.BEFORE_EACH);
			this.state = 187;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 188;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 189;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 190;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 191;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 192;
				this.tagCy();
				}
				}
				this.state = 195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ParserGrammarCypress.CY);
			this.state = 197;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 198;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagAfterEach(): TagAfterEachContext {
		let _localctx: TagAfterEachContext = new TagAfterEachContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ParserGrammarCypress.RULE_tagAfterEach);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(ParserGrammarCypress.AFTER_EACH);
			this.state = 201;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 202;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 203;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 204;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 205;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 206;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 207;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagClick(): TagClickContext {
		let _localctx: TagClickContext = new TagClickContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ParserGrammarCypress.RULE_tagClick);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.match(ParserGrammarCypress.CLICK);
			this.state = 210;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 211;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagType(): TagTypeContext {
		let _localctx: TagTypeContext = new TagTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ParserGrammarCypress.RULE_tagType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.match(ParserGrammarCypress.TYPE);
			this.state = 214;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 215;
			this.match(ParserGrammarCypress.STRING);
			this.state = 216;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 221;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 217;
					this.match(ParserGrammarCypress.PUNTO);
					this.state = 218;
					this.tagType();
					}
					}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagWait(): TagWaitContext {
		let _localctx: TagWaitContext = new TagWaitContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ParserGrammarCypress.RULE_tagWait);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(ParserGrammarCypress.WAIT);
			this.state = 225;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 226;
			_la = this._input.LA(1);
			if (!(_la === ParserGrammarCypress.STRING || _la === ParserGrammarCypress.NUMBER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 227;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagVisit(): TagVisitContext {
		let _localctx: TagVisitContext = new TagVisitContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ParserGrammarCypress.RULE_tagVisit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(ParserGrammarCypress.VISIT);
			this.state = 230;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 231;
			this.match(ParserGrammarCypress.STRING);
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.COMMA) {
				{
				this.state = 232;
				this.match(ParserGrammarCypress.COMMA);
				this.state = 233;
				this.match(ParserGrammarCypress.OPEN_KEY);
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParserGrammarCypress.ON_BEFORE_LOAD) {
					{
					this.state = 234;
					this.tagEventOnBeforeLoad();
					}
				}

				this.state = 237;
				this.match(ParserGrammarCypress.CLOSE_KEY);
				}
			}

			this.state = 240;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagUrl(): TagUrlContext {
		let _localctx: TagUrlContext = new TagUrlContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ParserGrammarCypress.RULE_tagUrl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(ParserGrammarCypress.URL);
			this.state = 243;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 244;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 245;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 246;
				this.tagShould();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagOn(): TagOnContext {
		let _localctx: TagOnContext = new TagOnContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ParserGrammarCypress.RULE_tagOn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(ParserGrammarCypress.ON);
			this.state = 250;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 251;
			this.match(ParserGrammarCypress.STRING);
			this.state = 252;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 255;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParserGrammarCypress.OPEN_PARENTHESIS:
				{
				this.state = 253;
				this.tagFunction();
				}
				break;
			case ParserGrammarCypress.CY:
				{
				this.state = 254;
				this.tagCy();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 257;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagIntercept(): TagInterceptContext {
		let _localctx: TagInterceptContext = new TagInterceptContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ParserGrammarCypress.RULE_tagIntercept);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.match(ParserGrammarCypress.INTERCEPT);
			this.state = 260;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 261;
			this.match(ParserGrammarCypress.STRING);
			this.state = 262;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 263;
				this.match(ParserGrammarCypress.PUNTO);
				{
				this.state = 264;
				this.tagAs();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagWindow(): TagWindowContext {
		let _localctx: TagWindowContext = new TagWindowContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ParserGrammarCypress.RULE_tagWindow);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.match(ParserGrammarCypress.WINDOW);
			this.state = 268;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 269;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 270;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 273;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.THEN:
					{
					this.state = 271;
					this.tagThen();
					}
					break;
				case ParserGrammarCypress.ITS:
					{
					this.state = 272;
					this.tagIts();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagSelect(): TagSelectContext {
		let _localctx: TagSelectContext = new TagSelectContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ParserGrammarCypress.RULE_tagSelect);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.match(ParserGrammarCypress.SELECT);
			this.state = 278;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 279;
			this.match(ParserGrammarCypress.STRING);
			this.state = 280;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagPause(): TagPauseContext {
		let _localctx: TagPauseContext = new TagPauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ParserGrammarCypress.RULE_tagPause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.match(ParserGrammarCypress.PAUSE);
			this.state = 283;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 284;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 285;
				this.match(ParserGrammarCypress.PUNTO);
				{
				this.state = 286;
				this.tagSelect();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagTittle(): TagTittleContext {
		let _localctx: TagTittleContext = new TagTittleContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ParserGrammarCypress.RULE_tagTittle);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.match(ParserGrammarCypress.TITTLE);
			this.state = 290;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 291;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 292;
				this.match(ParserGrammarCypress.PUNTO);
				{
				this.state = 293;
				this.tagShould();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagFunction(): TagFunctionContext {
		let _localctx: TagFunctionContext = new TagFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ParserGrammarCypress.RULE_tagFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 297;
			this.match(ParserGrammarCypress.PARAMETER);
			this.state = 298;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 299;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 300;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParserGrammarCypress.EXPECT) {
				{
				{
				this.state = 301;
				this.expressionExpect();
				}
				}
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 307;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagFind(): TagFindContext {
		let _localctx: TagFindContext = new TagFindContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ParserGrammarCypress.RULE_tagFind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this.match(ParserGrammarCypress.FIND);
			this.state = 310;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 311;
			this.match(ParserGrammarCypress.STRING);
			this.state = 312;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 313;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 317;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.SHOULD:
					{
					this.state = 314;
					this.tagShould();
					}
					break;
				case ParserGrammarCypress.CHECK:
					{
					this.state = 315;
					this.tagCheck();
					}
					break;
				case ParserGrammarCypress.EQ:
					{
					this.state = 316;
					this.tagEq();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagStub(): TagStubContext {
		let _localctx: TagStubContext = new TagStubContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ParserGrammarCypress.RULE_tagStub);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.match(ParserGrammarCypress.STUB);
			this.state = 322;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 323;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 324;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 325;
				this.tagAs();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagContains(): TagContainsContext {
		let _localctx: TagContainsContext = new TagContainsContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ParserGrammarCypress.RULE_tagContains);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(ParserGrammarCypress.CONTAINS);
			this.state = 329;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 330;
			this.match(ParserGrammarCypress.STRING);
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.COMMA) {
				{
				this.state = 331;
				this.match(ParserGrammarCypress.COMMA);
				this.state = 332;
				this.match(ParserGrammarCypress.STRING);
				}
			}

			this.state = 335;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 336;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 341;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 337;
					this.tagClick();
					}
					break;

				case 2:
					{
					this.state = 338;
					this.tagClick();
					}
					break;

				case 3:
					{
					this.state = 339;
					this.tagShould();
					}
					break;

				case 4:
					// tslint:disable-next-line:no-empty
					{
					}
					break;
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagInjectAxe(): TagInjectAxeContext {
		let _localctx: TagInjectAxeContext = new TagInjectAxeContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ParserGrammarCypress.RULE_tagInjectAxe);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.match(ParserGrammarCypress.INJECT_AXE);
			this.state = 346;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 347;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagCheckA11y(): TagCheckA11yContext {
		let _localctx: TagCheckA11yContext = new TagCheckA11yContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ParserGrammarCypress.RULE_tagCheckA11y);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this.match(ParserGrammarCypress.CHECKA11Y);
			this.state = 350;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 351;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagCheck(): TagCheckContext {
		let _localctx: TagCheckContext = new TagCheckContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ParserGrammarCypress.RULE_tagCheck);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this.match(ParserGrammarCypress.CHECK);
			this.state = 354;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 355;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagIts(): TagItsContext {
		let _localctx: TagItsContext = new TagItsContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ParserGrammarCypress.RULE_tagIts);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this.match(ParserGrammarCypress.ITS);
			this.state = 358;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 359;
			_la = this._input.LA(1);
			if (!(_la === ParserGrammarCypress.STRING || _la === ParserGrammarCypress.NUMBER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 360;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 361;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 365;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.SHOULD:
					{
					this.state = 362;
					this.tagShould();
					}
					break;
				case ParserGrammarCypress.INVOKE:
					{
					this.state = 363;
					this.tagInvoke();
					}
					break;
				case ParserGrammarCypress.THEN:
					{
					this.state = 364;
					this.tagThen();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagInvoke(): TagInvokeContext {
		let _localctx: TagInvokeContext = new TagInvokeContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ParserGrammarCypress.RULE_tagInvoke);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.match(ParserGrammarCypress.INVOKE);
			this.state = 370;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 371;
			this.match(ParserGrammarCypress.STRING);
			this.state = 372;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 373;
			this.match(ParserGrammarCypress.OPEN_KEY);
			{
			this.state = 374;
			this.tagWhich();
			}
			{
			this.state = 375;
			this.tagTarget();
			}
			this.state = 376;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 377;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagWhich(): TagWhichContext {
		let _localctx: TagWhichContext = new TagWhichContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ParserGrammarCypress.RULE_tagWhich);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this.match(ParserGrammarCypress.WHICH);
			this.state = 380;
			this.match(ParserGrammarCypress.NUMBER);
			this.state = 381;
			this.match(ParserGrammarCypress.COMMA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagTarget(): TagTargetContext {
		let _localctx: TagTargetContext = new TagTargetContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ParserGrammarCypress.RULE_tagTarget);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.match(ParserGrammarCypress.TARGET);
			this.state = 384;
			this.match(ParserGrammarCypress.OPEN_KEY);
			{
			this.state = 385;
			this.tagValue();
			}
			this.state = 386;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagValue(): TagValueContext {
		let _localctx: TagValueContext = new TagValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ParserGrammarCypress.RULE_tagValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 388;
			this.match(ParserGrammarCypress.VALUE);
			this.state = 389;
			this.match(ParserGrammarCypress.STRING);
			this.state = 390;
			this.match(ParserGrammarCypress.COMMA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagLocation(): TagLocationContext {
		let _localctx: TagLocationContext = new TagLocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ParserGrammarCypress.RULE_tagLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(ParserGrammarCypress.LOCATION);
			this.state = 393;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 394;
			this.match(ParserGrammarCypress.STRING);
			this.state = 395;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 396;
				this.match(ParserGrammarCypress.PUNTO);
				{
				this.state = 397;
				this.tagShould();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagFirst(): TagFirstContext {
		let _localctx: TagFirstContext = new TagFirstContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ParserGrammarCypress.RULE_tagFirst);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 400;
			this.match(ParserGrammarCypress.FIRST);
			this.state = 401;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 402;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 403;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 407;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.SHOULD:
					{
					this.state = 404;
					this.tagShould();
					}
					break;
				case ParserGrammarCypress.CONTAINS:
					{
					this.state = 405;
					this.tagContains();
					}
					break;
				case ParserGrammarCypress.FIND:
					{
					this.state = 406;
					this.tagFind();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagEq(): TagEqContext {
		let _localctx: TagEqContext = new TagEqContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ParserGrammarCypress.RULE_tagEq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.match(ParserGrammarCypress.EQ);
			this.state = 412;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 413;
			this.match(ParserGrammarCypress.NUMBER);
			this.state = 414;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 415;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 419;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.SHOULD:
					{
					this.state = 416;
					this.tagShould();
					}
					break;
				case ParserGrammarCypress.FIND:
					{
					this.state = 417;
					this.tagFind();
					}
					break;
				case ParserGrammarCypress.CLICK:
					{
					this.state = 418;
					this.tagClick();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagThen(): TagThenContext {
		let _localctx: TagThenContext = new TagThenContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ParserGrammarCypress.RULE_tagThen);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
			this.match(ParserGrammarCypress.THEN);
			this.state = 424;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 425;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (ParserGrammarCypress.STRING - 46)) | (1 << (ParserGrammarCypress.PARAMETER - 46)) | (1 << (ParserGrammarCypress.PESO - 46)))) !== 0)) {
				{
				this.state = 426;
				this.tagParam();
				}
			}

			this.state = 429;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 430;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 431;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParserGrammarCypress.EXPECT) {
				{
				{
				this.state = 432;
				this.expressionExpect();
				}
				}
				this.state = 437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 438;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 439;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 440;
				this.match(ParserGrammarCypress.PUNTO);
				{
				this.state = 441;
				this.tagIts();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagShould(): TagShouldContext {
		let _localctx: TagShouldContext = new TagShouldContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ParserGrammarCypress.RULE_tagShould);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.match(ParserGrammarCypress.SHOULD);
			this.state = 445;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			{
			this.state = 446;
			this.match(ParserGrammarCypress.STRING);
			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.COMMA) {
				{
				this.state = 447;
				this.match(ParserGrammarCypress.COMMA);
				this.state = 448;
				_la = this._input.LA(1);
				if (!(_la === ParserGrammarCypress.STRING || _la === ParserGrammarCypress.NUMBER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParserGrammarCypress.COMMA) {
					{
					this.state = 449;
					this.match(ParserGrammarCypress.COMMA);
					this.state = 450;
					_la = this._input.LA(1);
					if (!(_la === ParserGrammarCypress.STRING || _la === ParserGrammarCypress.NUMBER)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
			}

			}
			this.state = 455;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 462;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 456;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 460;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.FIRST:
					{
					this.state = 457;
					this.tagFirst();
					}
					break;
				case ParserGrammarCypress.ITS:
					{
					this.state = 458;
					this.tagIts();
					}
					break;
				case ParserGrammarCypress.AND:
					{
					this.state = 459;
					this.tagAnd();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagWithin(): TagWithinContext {
		let _localctx: TagWithinContext = new TagWithinContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ParserGrammarCypress.RULE_tagWithin);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 464;
			this.match(ParserGrammarCypress.WITHIN);
			this.state = 465;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 466;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 467;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 468;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 469;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 470;
				this.tagCy();
				}
				}
				this.state = 473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ParserGrammarCypress.CY);
			this.state = 475;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 476;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagAnd(): TagAndContext {
		let _localctx: TagAndContext = new TagAndContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ParserGrammarCypress.RULE_tagAnd);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.match(ParserGrammarCypress.AND);
			this.state = 479;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			{
			this.state = 480;
			this.match(ParserGrammarCypress.STRING);
			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.COMMA) {
				{
				this.state = 481;
				this.match(ParserGrammarCypress.COMMA);
				this.state = 482;
				this.match(ParserGrammarCypress.STRING);
				this.state = 485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParserGrammarCypress.COMMA) {
					{
					this.state = 483;
					this.match(ParserGrammarCypress.COMMA);
					this.state = 484;
					this.match(ParserGrammarCypress.STRING);
					}
				}

				}
			}

			}
			this.state = 489;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 493;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 490;
					this.tagAnd();
					}
					}
				}
				this.state = 495;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagDataString(): TagDataStringContext {
		let _localctx: TagDataStringContext = new TagDataStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ParserGrammarCypress.RULE_tagDataString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			this.match(ParserGrammarCypress.DATE_STRING);
			this.state = 497;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 498;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagWrap(): TagWrapContext {
		let _localctx: TagWrapContext = new TagWrapContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ParserGrammarCypress.RULE_tagWrap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this.match(ParserGrammarCypress.WRAP);
			this.state = 501;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 502;
			this.match(ParserGrammarCypress.STRING);
			this.state = 503;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 504;
				this.match(ParserGrammarCypress.PUNTO);
				{
				this.state = 505;
				this.tagShould();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionExpect(): ExpressionExpectContext {
		let _localctx: ExpressionExpectContext = new ExpressionExpectContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ParserGrammarCypress.RULE_expressionExpect);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.match(ParserGrammarCypress.EXPECT);
			this.state = 509;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			{
			this.state = 510;
			this.tagParam();
			}
			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.OPEN_BRACKET) {
				{
				this.state = 511;
				this.tagIndex();
				}
			}

			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.INNERTEXT || _la === ParserGrammarCypress.LENGTH) {
				{
				this.state = 514;
				_la = this._input.LA(1);
				if (!(_la === ParserGrammarCypress.INNERTEXT || _la === ParserGrammarCypress.LENGTH)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 517;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 518;
			this.match(ParserGrammarCypress.PUNTO);
			this.state = 519;
			_la = this._input.LA(1);
			if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ParserGrammarCypress.TO - 36)) | (1 << (ParserGrammarCypress.TO_BE_A - 36)) | (1 << (ParserGrammarCypress.NOT_TO_BE_A - 36)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 520;
			this.match(ParserGrammarCypress.PUNTO);
			this.state = 523;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParserGrammarCypress.EQUAL:
				{
				this.state = 521;
				this.tagEqual();
				}
				break;
			case ParserGrammarCypress.DATE_STRING:
				{
				this.state = 522;
				this.tagDataString();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagEqual(): TagEqualContext {
		let _localctx: TagEqualContext = new TagEqualContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ParserGrammarCypress.RULE_tagEqual);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			this.match(ParserGrammarCypress.EQUAL);
			this.state = 526;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 527;
			_la = this._input.LA(1);
			if (!(_la === ParserGrammarCypress.STRING || _la === ParserGrammarCypress.NUMBER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 528;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagParam(): TagParamContext {
		let _localctx: TagParamContext = new TagParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ParserGrammarCypress.RULE_tagParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParserGrammarCypress.PARAMETER:
			case ParserGrammarCypress.PESO:
				{
				this.state = 531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParserGrammarCypress.PESO) {
					{
					this.state = 530;
					this.match(ParserGrammarCypress.PESO);
					}
				}

				this.state = 533;
				this.match(ParserGrammarCypress.PARAMETER);
				}
				break;
			case ParserGrammarCypress.STRING:
				{
				this.state = 534;
				this.match(ParserGrammarCypress.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagIndex(): TagIndexContext {
		let _localctx: TagIndexContext = new TagIndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ParserGrammarCypress.RULE_tagIndex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this.match(ParserGrammarCypress.OPEN_BRACKET);
			this.state = 538;
			this.match(ParserGrammarCypress.NUMBER);
			this.state = 539;
			this.match(ParserGrammarCypress.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagAs(): TagAsContext {
		let _localctx: TagAsContext = new TagAsContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ParserGrammarCypress.RULE_tagAs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this.match(ParserGrammarCypress.AS);
			this.state = 542;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 543;
			this.match(ParserGrammarCypress.STRING);
			this.state = 544;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagEventOnBeforeLoad(): TagEventOnBeforeLoadContext {
		let _localctx: TagEventOnBeforeLoadContext = new TagEventOnBeforeLoadContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ParserGrammarCypress.RULE_tagEventOnBeforeLoad);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(ParserGrammarCypress.ON_BEFORE_LOAD);
			this.state = 547;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 548;
			this.match(ParserGrammarCypress.PARAMETER);
			this.state = 549;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 550;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParserGrammarCypress.PARAMETER) {
				{
				{
				this.state = 551;
				this.match(ParserGrammarCypress.PARAMETER);
				this.state = 552;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 553;
				this.tagEventListener();
				}
				}
				this.state = 558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 559;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagEventListener(): TagEventListenerContext {
		let _localctx: TagEventListenerContext = new TagEventListenerContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ParserGrammarCypress.RULE_tagEventListener);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this.match(ParserGrammarCypress.ADD_EVENT_LISTENER);
			this.state = 562;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 563;
			this.match(ParserGrammarCypress.STRING);
			this.state = 564;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 565;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 566;
			this.match(ParserGrammarCypress.PARAMETER);
			this.state = 567;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 568;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 569;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 570;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 571;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\u0240\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x06\x02k\n\x02" +
		"\r\x02\x0E\x02l\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x06\x03{\n\x03\r\x03\x0E\x03" +
		"|\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04\x84\n\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04\x8F" +
		"\n\x04\r\x04\x0E\x04\x90\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xA7\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xB9\n\x06\x05\x06" +
		"\xBB\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x06" +
		"\x07\xC4\n\x07\r\x07\x0E\x07\xC5\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x07\n\xDE\n\n\f\n\x0E\n\xE1\v\n\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xEE\n\f\x03" +
		"\f\x05\f\xF1\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xFA\n" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0102\n\x0E" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\u010C\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0114" +
		"\n\x10\x05\x10\u0116\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0122\n\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x05\x13\u0129\n\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x07\x14\u0131\n\x14\f\x14\x0E\x14\u0134\v\x14\x03" +
		"\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x05\x15\u0140\n\x15\x05\x15\u0142\n\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x05\x16\u0149\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x05\x17\u0150\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05" +
		"\x17\u0158\n\x17\x05\x17\u015A\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0170\n\x1B" +
		"\x05\x1B\u0172\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03" +
		" \x03 \x03 \x03 \x03 \x05 \u0191\n \x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x05!\u019A\n!\x05!\u019C\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x05\"\u01A6\n\"\x05\"\u01A8\n\"\x03#\x03#\x03#\x03#\x05#\u01AE" +
		"\n#\x03#\x03#\x03#\x03#\x07#\u01B4\n#\f#\x0E#\u01B7\v#\x03#\x03#\x03#" +
		"\x03#\x05#\u01BD\n#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u01C6\n$\x05" +
		"$\u01C8\n$\x03$\x03$\x03$\x03$\x03$\x05$\u01CF\n$\x05$\u01D1\n$\x03%\x03" +
		"%\x03%\x03%\x03%\x03%\x03%\x06%\u01DA\n%\r%\x0E%\u01DB\x03%\x03%\x03%" +
		"\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u01E8\n&\x05&\u01EA\n&\x03&\x03" +
		"&\x07&\u01EE\n&\f&\x0E&\u01F1\v&\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x05(\u01FD\n(\x03)\x03)\x03)\x03)\x05)\u0203\n)\x03)" +
		"\x05)\u0206\n)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u020E\n)\x03*\x03*\x03" +
		"*\x03*\x03*\x03+\x05+\u0216\n+\x03+\x03+\x05+\u021A\n+\x03,\x03,\x03," +
		"\x03,\x03-\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x07.\u022D\n.\f.\x0E.\u0230\v.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x02\x02\x020\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02\x02\x05\x03\x0201\x03\x02AB" +
		"\x03\x02&(\x02\u0263\x02^\x03\x02\x02\x02\x04q\x03\x02\x02\x02\x06\x81" +
		"\x03\x02\x02\x02\b\x95\x03\x02\x02\x02\n\xA8\x03\x02\x02\x02\f\xBC\x03" +
		"\x02\x02\x02\x0E\xCA\x03\x02\x02\x02\x10\xD3\x03\x02\x02\x02\x12\xD7\x03" +
		"\x02\x02\x02\x14\xE2\x03\x02\x02\x02\x16\xE7\x03\x02\x02\x02\x18\xF4\x03" +
		"\x02\x02\x02\x1A\xFB\x03\x02\x02\x02\x1C\u0105\x03\x02\x02\x02\x1E\u010D" +
		"\x03\x02\x02\x02 \u0117\x03\x02\x02\x02\"\u011C\x03\x02\x02\x02$\u0123" +
		"\x03\x02\x02\x02&\u012A\x03\x02\x02\x02(\u0137\x03\x02\x02\x02*\u0143" +
		"\x03\x02\x02\x02,\u014A\x03\x02\x02\x02.\u015B\x03\x02\x02\x020\u015F" +
		"\x03\x02\x02\x022\u0163\x03\x02\x02\x024\u0167\x03\x02\x02\x026\u0173" +
		"\x03\x02\x02\x028\u017D\x03\x02\x02\x02:\u0181\x03\x02\x02\x02<\u0186" +
		"\x03\x02\x02\x02>\u018A\x03\x02\x02\x02@\u0192\x03\x02\x02\x02B\u019D" +
		"\x03\x02\x02\x02D\u01A9\x03\x02\x02\x02F\u01BE\x03\x02\x02\x02H\u01D2" +
		"\x03\x02\x02\x02J\u01E0\x03\x02\x02\x02L\u01F2\x03\x02\x02\x02N\u01F6" +
		"\x03\x02\x02\x02P\u01FE\x03\x02\x02\x02R\u020F\x03\x02\x02\x02T\u0219" +
		"\x03\x02\x02\x02V\u021B\x03\x02\x02\x02X\u021F\x03\x02\x02\x02Z\u0224" +
		"\x03\x02\x02\x02\\\u0233\x03\x02\x02\x02^_\x07\x03\x02\x02_`\x075\x02" +
		"\x02`a\x070\x02\x02ab\x07:\x02\x02bc\x075\x02\x02cd\x076\x02\x02de\x07" +
		"9\x02\x02ej\x073\x02\x02fk\x05\x06\x04\x02gk\x05\f\x07\x02hk\x05\x0E\b" +
		"\x02ik\x05\x04\x03\x02jf\x03\x02\x02\x02jg\x03\x02\x02\x02jh\x03\x02\x02" +
		"\x02ji\x03\x02\x02\x02kl\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02" +
		"\x02mn\x03\x02\x02\x02no\x074\x02\x02op\x076\x02\x02p\x03\x03\x02\x02" +
		"\x02qr\x07\t\x02\x02rs\x075\x02\x02st\x070\x02\x02tu\x07:\x02\x02uv\x07" +
		"5\x02\x02vw\x076\x02\x02wx\x079\x02\x02xz\x073\x02\x02y{\x05\x06\x04\x02" +
		"zy\x03\x02\x02\x02{|\x03\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02" +
		"}~\x03\x02\x02\x02~\x7F\x074\x02\x02\x7F\x80\x076\x02\x02\x80\x05\x03" +
		"\x02\x02\x02\x81\x83\x07\x04\x02\x02\x82\x84\x07!\x02\x02\x83\x82\x03" +
		"\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86\x07" +
		"5\x02\x02\x86\x87\x070\x02\x02\x87\x88\x07:\x02\x02\x88\x89\x075\x02\x02" +
		"\x89\x8A\x076\x02\x02\x8A\x8B\x079\x02\x02\x8B\x8E\x073\x02\x02\x8C\x8F" +
		"\x05\b\x05\x02\x8D\x8F\x05P)\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8D\x03\x02" +
		"\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02" +
		"\x02\x02\x91\x92\x03\x02\x02\x02\x92\x93\x074\x02\x02\x93\x94\x076\x02" +
		"\x02\x94\x07\x03\x02\x02\x02\x95\x96\x07\n\x02\x02\x96\xA6\x07<\x02\x02" +
		"\x97\xA7\x05\n\x06\x02\x98\xA7\x05\x14\v\x02\x99\xA7\x05\x16\f\x02\x9A" +
		"\xA7\x05\x18\r\x02\x9B\xA7\x05,\x17\x02\x9C\xA7\x05.\x18\x02\x9D\xA7\x05" +
		"0\x19\x02\x9E\xA7\x05\x1A\x0E\x02\x9F\xA7\x05*\x16\x02\xA0\xA7\x05\x1E" +
		"\x10\x02\xA1\xA7\x05$\x13\x02\xA2\xA7\x05> \x02\xA3\xA7\x05\"\x12\x02" +
		"\xA4\xA7\x05\x1C\x0F\x02\xA5\xA7\x05N(\x02\xA6\x97\x03\x02\x02\x02\xA6" +
		"\x98\x03\x02\x02\x02\xA6\x99\x03\x02\x02\x02\xA6\x9A\x03\x02\x02\x02\xA6" +
		"\x9B\x03\x02\x02\x02\xA6\x9C\x03\x02\x02\x02\xA6\x9D\x03\x02\x02\x02\xA6" +
		"\x9E\x03\x02\x02\x02\xA6\x9F\x03\x02\x02\x02\xA6\xA0\x03\x02\x02\x02\xA6" +
		"\xA1\x03\x02\x02\x02\xA6\xA2\x03\x02\x02\x02\xA6\xA3\x03\x02\x02\x02\xA6" +
		"\xA4\x03\x02\x02\x02\xA6\xA5\x03\x02\x02\x02\xA7\t\x03\x02\x02\x02\xA8" +
		"\xA9\x07\r\x02\x02\xA9\xAA\x075\x02\x02\xAA\xAB\x070\x02\x02\xAB\xAC\x07" +
		"6\x02\x02\xAC\xBA\x03\x02\x02\x02\xAD\xB8\x07<\x02\x02\xAE\xB9\x05\x10" +
		"\t\x02\xAF\xB9\x05\x12\n\x02\xB0\xB9\x05D#\x02\xB1\xB9\x05F$\x02\xB2\xB9" +
		"\x05H%\x02\xB3\xB9\x05B\"\x02\xB4\xB9\x05(\x15\x02\xB5\xB9\x05,\x17\x02" +
		"\xB6\xB9\x05\"\x12\x02\xB7\xB9\x05 \x11\x02\xB8\xAE\x03\x02\x02\x02\xB8" +
		"\xAF\x03\x02\x02\x02\xB8\xB0\x03\x02\x02\x02\xB8\xB1\x03\x02\x02\x02\xB8" +
		"\xB2\x03\x02\x02\x02\xB8\xB3\x03\x02\x02\x02\xB8\xB4\x03\x02\x02\x02\xB8" +
		"\xB5\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB7\x03\x02\x02\x02\xB9" +
		"\xBB\x03\x02\x02\x02\xBA\xAD\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB" +
		"\v\x03\x02\x02\x02\xBC\xBD\x07\x05\x02\x02\xBD\xBE\x075\x02\x02\xBE\xBF" +
		"\x075\x02\x02\xBF\xC0\x076\x02\x02\xC0\xC1\x079\x02\x02\xC1\xC3\x073\x02" +
		"\x02\xC2\xC4\x05\b\x05\x02\xC3\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02" +
		"\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x03\x02\x02" +
		"\x02\xC7\xC8\x074\x02\x02\xC8\xC9\x076\x02\x02\xC9\r\x03\x02\x02\x02\xCA" +
		"\xCB\x07\x06\x02\x02\xCB\xCC\x075\x02\x02\xCC\xCD\x075\x02\x02\xCD\xCE" +
		"\x076\x02\x02\xCE\xCF\x079\x02\x02\xCF\xD0\x073\x02\x02\xD0\xD1\x074\x02" +
		"\x02\xD1\xD2\x076\x02\x02\xD2\x0F\x03\x02\x02\x02\xD3\xD4\x07+\x02\x02" +
		"\xD4\xD5\x075\x02\x02\xD5\xD6\x076\x02\x02\xD6\x11\x03\x02\x02\x02\xD7" +
		"\xD8\x07,\x02\x02\xD8\xD9\x075\x02\x02\xD9\xDA\x070\x02\x02\xDA\xDF\x07" +
		"6\x02\x02\xDB\xDC\x07<\x02\x02\xDC\xDE\x05\x12\n\x02\xDD\xDB\x03\x02\x02" +
		"\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02" +
		"\x02\xE0\x13\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE3\x07\f\x02" +
		"\x02\xE3\xE4\x075\x02\x02\xE4\xE5\t\x02\x02\x02\xE5\xE6\x076\x02\x02\xE6" +
		"\x15\x03\x02\x02\x02\xE7\xE8\x07\v\x02\x02\xE8\xE9\x075\x02\x02\xE9\xF0" +
		"\x070\x02\x02\xEA\xEB\x07:\x02\x02\xEB\xED\x073\x02\x02\xEC\xEE\x05Z." +
		"\x02\xED\xEC\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x03\x02\x02" +
		"\x02\xEF\xF1\x074\x02\x02\xF0\xEA\x03\x02\x02\x02\xF0\xF1\x03\x02\x02" +
		"\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3\x076\x02\x02\xF3\x17\x03\x02\x02" +
		"\x02\xF4\xF5\x07\x0E\x02\x02\xF5\xF6\x075\x02\x02\xF6\xF9\x076\x02\x02" +
		"\xF7\xF8\x07<\x02\x02\xF8\xFA\x05F$\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA" +
		"\x03\x02\x02\x02\xFA\x19\x03\x02\x02\x02\xFB\xFC\x07\x0F\x02\x02\xFC\xFD" +
		"\x075\x02\x02\xFD\xFE\x070\x02\x02\xFE\u0101\x07:\x02\x02\xFF\u0102\x05" +
		"&\x14\x02\u0100\u0102\x05\b\x05\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0100" +
		"\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x076\x02\x02" +
		"\u0104\x1B\x03\x02\x02\x02\u0105\u0106\x07\x1E\x02\x02\u0106\u0107\x07" +
		"5\x02\x02\u0107\u0108\x070\x02\x02\u0108\u010B\x076\x02\x02\u0109\u010A" +
		"\x07<\x02\x02\u010A\u010C\x05X-\x02\u010B\u0109\x03\x02\x02\x02\u010B" +
		"\u010C\x03\x02\x02\x02\u010C\x1D\x03\x02\x02\x02\u010D\u010E\x07\x13\x02" +
		"\x02\u010E\u010F\x075\x02\x02\u010F\u0115\x076\x02\x02\u0110\u0113\x07" +
		"<\x02\x02\u0111\u0114\x05D#\x02\u0112\u0114\x054\x1B\x02\u0113\u0111\x03" +
		"\x02\x02\x02\u0113\u0112\x03\x02\x02\x02\u0114\u0116\x03\x02\x02\x02\u0115" +
		"\u0110\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\x1F\x03\x02\x02" +
		"\x02\u0117\u0118\x07\x1C\x02\x02\u0118\u0119\x075\x02\x02\u0119\u011A" +
		"\x070\x02\x02\u011A\u011B\x076\x02\x02\u011B!\x03\x02\x02\x02\u011C\u011D" +
		"\x07\x1B\x02\x02\u011D\u011E\x075\x02\x02\u011E\u0121\x076\x02\x02\u011F" +
		"\u0120\x07<\x02\x02\u0120\u0122\x05 \x11\x02\u0121\u011F\x03\x02\x02\x02" +
		"\u0121\u0122\x03\x02\x02\x02\u0122#\x03\x02\x02\x02\u0123\u0124\x07\x17" +
		"\x02\x02\u0124\u0125\x075\x02\x02\u0125\u0128\x076\x02\x02\u0126\u0127" +
		"\x07<\x02\x02\u0127\u0129\x05F$\x02\u0128\u0126\x03\x02\x02\x02\u0128" +
		"\u0129\x03\x02\x02\x02\u0129%\x03\x02\x02\x02\u012A\u012B\x075\x02\x02" +
		"\u012B\u012C\x07?\x02\x02\u012C\u012D\x076\x02\x02\u012D\u012E\x079\x02" +
		"\x02\u012E\u0132\x073\x02\x02\u012F\u0131\x05P)\x02\u0130\u012F\x03\x02" +
		"\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132" +
		"\u0133\x03\x02\x02\x02\u0133\u0135\x03\x02\x02\x02\u0134\u0132\x03\x02" +
		"\x02\x02\u0135\u0136\x074\x02\x02\u0136\'\x03\x02\x02\x02\u0137\u0138" +
		"\x07\x18\x02\x02\u0138\u0139\x075\x02\x02\u0139\u013A\x070\x02\x02\u013A" +
		"\u0141\x076\x02\x02\u013B\u013F\x07<\x02\x02\u013C\u0140\x05F$\x02\u013D" +
		"\u0140\x052\x1A\x02\u013E\u0140\x05B\"\x02\u013F\u013C\x03\x02\x02\x02" +
		"\u013F\u013D\x03\x02\x02\x02\u013F\u013E\x03\x02\x02\x02\u0140\u0142\x03" +
		"\x02\x02\x02\u0141\u013B\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142" +
		")\x03\x02\x02\x02\u0143\u0144\x07\x14\x02\x02\u0144\u0145\x075\x02\x02" +
		"\u0145\u0148\x076\x02\x02\u0146\u0147\x07<\x02\x02\u0147\u0149\x05X-\x02" +
		"\u0148\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149+\x03\x02" +
		"\x02\x02\u014A\u014B\x07\x10\x02\x02\u014B\u014C\x075\x02\x02\u014C\u014F" +
		"\x070\x02\x02\u014D\u014E\x07:\x02\x02\u014E\u0150\x070\x02\x02\u014F" +
		"\u014D\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x03\x02" +
		"\x02\x02\u0151\u0159\x076\x02\x02\u0152\u0157\x07<\x02\x02\u0153\u0158" +
		"\x05\x10\t\x02\u0154\u0158\x05\x10\t\x02\u0155\u0158\x05F$\x02\u0156\u0158" +
		"\x03\x02\x02\x02\u0157\u0153\x03\x02\x02\x02\u0157\u0154\x03\x02\x02\x02" +
		"\u0157\u0155\x03\x02\x02\x02\u0157\u0156\x03\x02\x02\x02\u0158\u015A\x03" +
		"\x02\x02\x02\u0159\u0152\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A" +
		"-\x03\x02\x02\x02\u015B\u015C\x07\x11\x02\x02\u015C\u015D\x075\x02\x02" +
		"\u015D\u015E\x076\x02\x02\u015E/\x03\x02\x02\x02\u015F\u0160\x07\x12\x02" +
		"\x02\u0160\u0161\x075\x02\x02\u0161\u0162\x076\x02\x02\u01621\x03\x02" +
		"\x02\x02\u0163\u0164\x07\x19\x02\x02\u0164\u0165\x075\x02\x02\u0165\u0166" +
		"\x076\x02\x02\u01663\x03\x02\x02\x02\u0167\u0168\x07\x1D\x02\x02\u0168" +
		"\u0169\x075\x02\x02\u0169\u016A\t\x02\x02\x02\u016A\u0171\x076\x02\x02" +
		"\u016B\u016F\x07<\x02\x02\u016C\u0170\x05F$\x02\u016D\u0170\x056\x1C\x02" +
		"\u016E\u0170\x05D#\x02\u016F\u016C\x03\x02\x02\x02\u016F\u016D\x03\x02" +
		"\x02\x02\u016F\u016E\x03\x02\x02\x02\u0170\u0172\x03\x02\x02\x02\u0171" +
		"\u016B\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u01725\x03\x02\x02" +
		"\x02\u0173\u0174\x07\x16\x02\x02\u0174\u0175\x075\x02\x02\u0175\u0176" +
		"\x070\x02\x02\u0176\u0177\x07:\x02\x02\u0177\u0178\x073\x02\x02\u0178" +
		"\u0179\x058\x1D\x02\u0179\u017A\x05:\x1E\x02\u017A\u017B\x074\x02\x02" +
		"\u017B\u017C\x076\x02\x02\u017C7\x03\x02\x02\x02\u017D\u017E\x07C\x02" +
		"\x02\u017E\u017F\x071\x02\x02\u017F\u0180\x07:\x02\x02\u01809\x03\x02" +
		"\x02\x02\u0181\u0182\x07D\x02\x02\u0182\u0183\x073\x02\x02\u0183\u0184" +
		"\x05<\x1F\x02\u0184\u0185\x074\x02\x02\u0185;\x03\x02\x02\x02\u0186\u0187" +
		"\x07E\x02\x02\u0187\u0188\x070\x02\x02\u0188\u0189\x07:\x02\x02\u0189" +
		"=\x03\x02\x02\x02\u018A\u018B\x07\x1A\x02\x02\u018B\u018C\x075\x02\x02" +
		"\u018C\u018D\x070\x02\x02\u018D\u0190\x076\x02\x02\u018E\u018F\x07<\x02" +
		"\x02\u018F\u0191\x05F$\x02\u0190\u018E\x03\x02\x02\x02\u0190\u0191\x03" +
		"\x02\x02\x02\u0191?\x03\x02\x02\x02\u0192\u0193\x07.\x02\x02\u0193\u0194" +
		"\x075\x02\x02\u0194\u019B\x076\x02\x02\u0195\u0199\x07<\x02\x02\u0196" +
		"\u019A\x05F$\x02\u0197\u019A\x05,\x17\x02\u0198\u019A\x05(\x15\x02\u0199" +
		"\u0196\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u0199\u0198\x03\x02" +
		"\x02\x02\u019A\u019C\x03\x02\x02\x02\u019B\u0195\x03\x02\x02\x02\u019B" +
		"\u019C\x03\x02\x02\x02\u019CA\x03\x02\x02\x02\u019D\u019E\x07)\x02\x02" +
		"\u019E\u019F\x075\x02\x02\u019F\u01A0\x071\x02\x02\u01A0\u01A7\x076\x02" +
		"\x02\u01A1\u01A5\x07<\x02\x02\u01A2\u01A6\x05F$\x02\u01A3\u01A6\x05(\x15" +
		"\x02\u01A4\u01A6\x05\x10\t\x02\u01A5\u01A2\x03\x02\x02\x02\u01A5\u01A3" +
		"\x03\x02\x02\x02\u01A5\u01A4\x03\x02\x02\x02\u01A6\u01A8\x03\x02\x02\x02" +
		"\u01A7\u01A1\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8C\x03\x02" +
		"\x02\x02\u01A9\u01AA\x07$\x02\x02\u01AA\u01AB\x075\x02\x02\u01AB\u01AD" +
		"\x075\x02\x02\u01AC\u01AE\x05T+\x02\u01AD\u01AC\x03\x02\x02\x02\u01AD" +
		"\u01AE\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B0\x076\x02" +
		"\x02\u01B0\u01B1\x079\x02\x02\u01B1\u01B5\x073\x02\x02\u01B2\u01B4\x05" +
		"P)\x02\u01B3\u01B2\x03\x02\x02\x02\u01B4\u01B7\x03\x02\x02\x02\u01B5\u01B3" +
		"\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B8\x03\x02\x02\x02" +
		"\u01B7\u01B5\x03\x02\x02\x02\u01B8\u01B9\x074\x02\x02\u01B9\u01BC\x07" +
		"6\x02\x02\u01BA\u01BB\x07<\x02\x02\u01BB\u01BD\x054\x1B\x02\u01BC\u01BA" +
		"\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BDE\x03\x02\x02\x02\u01BE" +
		"\u01BF\x07\x1F\x02\x02\u01BF\u01C0\x075\x02\x02\u01C0\u01C7\x070\x02\x02" +
		"\u01C1\u01C2\x07:\x02\x02\u01C2\u01C5\t\x02\x02\x02\u01C3\u01C4\x07:\x02" +
		"\x02\u01C4\u01C6\t\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C6" +
		"\x03\x02\x02\x02\u01C6\u01C8\x03\x02\x02\x02\u01C7\u01C1\x03\x02\x02\x02" +
		"\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01D0\x07" +
		"6\x02\x02\u01CA\u01CE\x07<\x02\x02\u01CB\u01CF\x05@!\x02\u01CC\u01CF\x05" +
		"4\x1B\x02\u01CD\u01CF\x05J&\x02\u01CE\u01CB\x03\x02\x02\x02\u01CE\u01CC" +
		"\x03\x02\x02\x02\u01CE\u01CD\x03\x02\x02\x02\u01CF\u01D1\x03\x02\x02\x02" +
		"\u01D0\u01CA\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1G\x03\x02" +
		"\x02\x02\u01D2\u01D3\x07 \x02\x02\u01D3\u01D4\x075\x02\x02\u01D4\u01D5" +
		"\x075\x02\x02\u01D5\u01D6\x076\x02\x02\u01D6\u01D7\x079\x02\x02\u01D7" +
		"\u01D9\x073\x02\x02\u01D8\u01DA\x05\b\x05\x02\u01D9\u01D8\x03\x02\x02" +
		"\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB\u01DC" +
		"\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01DE\x074\x02\x02" +
		"\u01DE\u01DF\x076\x02\x02\u01DFI\x03\x02\x02\x02\u01E0\u01E1\x07\"\x02" +
		"\x02\u01E1\u01E2\x075\x02\x02\u01E2\u01E9\x070\x02\x02\u01E3\u01E4\x07" +
		":\x02\x02\u01E4\u01E7\x070\x02\x02\u01E5\u01E6\x07:\x02\x02\u01E6\u01E8" +
		"\x070\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02" +
		"\u01E8\u01EA\x03\x02\x02\x02\u01E9\u01E3\x03\x02\x02\x02\u01E9\u01EA\x03" +
		"\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01EF\x076\x02\x02\u01EC" +
		"\u01EE\x05J&\x02\u01ED\u01EC\x03\x02\x02\x02\u01EE\u01F1\x03\x02\x02\x02" +
		"\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0K\x03\x02" +
		"\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F2\u01F3\x07/\x02\x02\u01F3\u01F4" +
		"\x075\x02\x02\u01F4\u01F5\x076\x02\x02\u01F5M\x03\x02\x02\x02\u01F6\u01F7" +
		"\x07#\x02\x02\u01F7\u01F8\x075\x02\x02\u01F8\u01F9\x070\x02\x02\u01F9" +
		"\u01FC\x076\x02\x02\u01FA\u01FB\x07<\x02\x02\u01FB\u01FD\x05F$\x02\u01FC" +
		"\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FDO\x03\x02\x02" +
		"\x02\u01FE\u01FF\x07%\x02\x02\u01FF\u0200\x075\x02\x02\u0200\u0202\x05" +
		"T+\x02\u0201\u0203\x05V,\x02\u0202\u0201\x03\x02\x02\x02\u0202\u0203\x03" +
		"\x02\x02\x02\u0203\u0205\x03\x02\x02\x02\u0204\u0206\t\x03\x02\x02\u0205" +
		"\u0204\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0207\x03\x02" +
		"\x02\x02\u0207\u0208\x076\x02\x02\u0208\u0209\x07<\x02\x02\u0209\u020A" +
		"\t\x04\x02\x02\u020A\u020D\x07<\x02\x02\u020B\u020E\x05R*\x02\u020C\u020E" +
		"\x05L\'\x02\u020D\u020B\x03\x02\x02\x02\u020D\u020C\x03\x02\x02\x02\u020E" +
		"Q\x03\x02\x02\x02\u020F\u0210\x07*\x02\x02\u0210\u0211\x075\x02\x02\u0211" +
		"\u0212\t\x02\x02\x02\u0212\u0213\x076\x02\x02\u0213S\x03\x02\x02\x02\u0214" +
		"\u0216\x07@\x02\x02\u0215\u0214\x03\x02\x02\x02\u0215\u0216\x03\x02\x02" +
		"\x02\u0216\u0217\x03\x02\x02\x02\u0217\u021A\x07?\x02\x02\u0218\u021A" +
		"\x070\x02\x02\u0219\u0215\x03\x02\x02\x02\u0219\u0218\x03\x02\x02\x02" +
		"\u021AU\x03\x02\x02\x02\u021B\u021C\x077\x02\x02\u021C\u021D\x071\x02" +
		"\x02\u021D\u021E\x078\x02\x02\u021EW\x03\x02\x02\x02\u021F\u0220\x07\x15" +
		"\x02\x02\u0220\u0221\x075\x02\x02\u0221\u0222\x070\x02\x02\u0222\u0223" +
		"\x076\x02\x02\u0223Y\x03\x02\x02\x02\u0224\u0225\x07\x07\x02\x02\u0225" +
		"\u0226\x075\x02\x02\u0226\u0227\x07?\x02\x02\u0227\u0228\x076\x02\x02" +
		"\u0228\u022E\x073\x02\x02\u0229\u022A\x07?\x02\x02\u022A\u022B\x07<\x02" +
		"\x02\u022B\u022D\x05\\/\x02\u022C\u0229\x03\x02\x02\x02\u022D\u0230\x03" +
		"\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F" +
		"\u0231\x03\x02\x02\x02\u0230\u022E\x03\x02\x02\x02\u0231\u0232\x074\x02" +
		"\x02\u0232[\x03\x02\x02\x02\u0233\u0234\x07\b\x02\x02\u0234\u0235\x07" +
		"5\x02\x02\u0235\u0236\x070\x02\x02\u0236\u0237\x07:\x02\x02\u0237\u0238" +
		"\x075\x02\x02\u0238\u0239\x07?\x02\x02\u0239\u023A\x076\x02\x02\u023A" +
		"\u023B\x079\x02\x02\u023B\u023C\x073\x02\x02\u023C\u023D\x074\x02\x02" +
		"\u023D\u023E\x076\x02\x02\u023E]\x03\x02\x02\x026jl|\x83\x8E\x90\xA6\xB8" +
		"\xBA\xC5\xDF\xED\xF0";
	private static readonly _serializedATNSegment1: string =
		"\xF9\u0101\u010B\u0113\u0115\u0121\u0128\u0132\u013F\u0141\u0148\u014F" +
		"\u0157\u0159\u016F\u0171\u0190\u0199\u019B\u01A5\u01A7\u01AD\u01B5\u01BC" +
		"\u01C5\u01C7\u01CE\u01D0\u01DB\u01E7\u01E9\u01EF\u01FC\u0202\u0205\u020D" +
		"\u0215\u0219\u022E";
	public static readonly _serializedATN: string = Utils.join(
		[
			ParserGrammarCypress._serializedATNSegment0,
			ParserGrammarCypress._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ParserGrammarCypress.__ATN) {
			ParserGrammarCypress.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ParserGrammarCypress._serializedATN));
		}

		return ParserGrammarCypress.__ATN;
	}

}

export class TestBlockContext extends ParserRuleContext {
	public DESCRIBE(): TerminalNode { return this.getToken(ParserGrammarCypress.DESCRIBE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode[];
	public OPEN_PARENTHESIS(i: number): TerminalNode;
	public OPEN_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.OPEN_PARENTHESIS);
		} else {
			return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, i);
		}
	}
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public COMMA(): TerminalNode { return this.getToken(ParserGrammarCypress.COMMA, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode[];
	public CLOSE_PARENTHESIS(i: number): TerminalNode;
	public CLOSE_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.CLOSE_PARENTHESIS);
		} else {
			return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, i);
		}
	}
	public ENTONCES(): TerminalNode { return this.getToken(ParserGrammarCypress.ENTONCES, 0); }
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
	public tagIt(): TagItContext[];
	public tagIt(i: number): TagItContext;
	public tagIt(i?: number): TagItContext | TagItContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagItContext);
		} else {
			return this.getRuleContext(i, TagItContext);
		}
	}
	public tagBeforeEach(): TagBeforeEachContext[];
	public tagBeforeEach(i: number): TagBeforeEachContext;
	public tagBeforeEach(i?: number): TagBeforeEachContext | TagBeforeEachContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagBeforeEachContext);
		} else {
			return this.getRuleContext(i, TagBeforeEachContext);
		}
	}
	public tagAfterEach(): TagAfterEachContext[];
	public tagAfterEach(i: number): TagAfterEachContext;
	public tagAfterEach(i?: number): TagAfterEachContext | TagAfterEachContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagAfterEachContext);
		} else {
			return this.getRuleContext(i, TagAfterEachContext);
		}
	}
	public tagContext(): TagContextContext[];
	public tagContext(i: number): TagContextContext;
	public tagContext(i?: number): TagContextContext | TagContextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagContextContext);
		} else {
			return this.getRuleContext(i, TagContextContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_testBlock; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTestBlock) {
			listener.enterTestBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTestBlock) {
			listener.exitTestBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTestBlock) {
			return visitor.visitTestBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagContextContext extends ParserRuleContext {
	public CONTEXT(): TerminalNode { return this.getToken(ParserGrammarCypress.CONTEXT, 0); }
	public OPEN_PARENTHESIS(): TerminalNode[];
	public OPEN_PARENTHESIS(i: number): TerminalNode;
	public OPEN_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.OPEN_PARENTHESIS);
		} else {
			return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, i);
		}
	}
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public COMMA(): TerminalNode { return this.getToken(ParserGrammarCypress.COMMA, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode[];
	public CLOSE_PARENTHESIS(i: number): TerminalNode;
	public CLOSE_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.CLOSE_PARENTHESIS);
		} else {
			return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, i);
		}
	}
	public ENTONCES(): TerminalNode { return this.getToken(ParserGrammarCypress.ENTONCES, 0); }
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
	public tagIt(): TagItContext[];
	public tagIt(i: number): TagItContext;
	public tagIt(i?: number): TagItContext | TagItContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagItContext);
		} else {
			return this.getRuleContext(i, TagItContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagContext; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagContext) {
			listener.enterTagContext(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagContext) {
			listener.exitTagContext(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagContext) {
			return visitor.visitTagContext(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagItContext extends ParserRuleContext {
	public IT(): TerminalNode { return this.getToken(ParserGrammarCypress.IT, 0); }
	public OPEN_PARENTHESIS(): TerminalNode[];
	public OPEN_PARENTHESIS(i: number): TerminalNode;
	public OPEN_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.OPEN_PARENTHESIS);
		} else {
			return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, i);
		}
	}
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public COMMA(): TerminalNode { return this.getToken(ParserGrammarCypress.COMMA, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode[];
	public CLOSE_PARENTHESIS(i: number): TerminalNode;
	public CLOSE_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.CLOSE_PARENTHESIS);
		} else {
			return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, i);
		}
	}
	public ENTONCES(): TerminalNode { return this.getToken(ParserGrammarCypress.ENTONCES, 0); }
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
	public SKIPP(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.SKIPP, 0); }
	public tagCy(): TagCyContext[];
	public tagCy(i: number): TagCyContext;
	public tagCy(i?: number): TagCyContext | TagCyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagCyContext);
		} else {
			return this.getRuleContext(i, TagCyContext);
		}
	}
	public expressionExpect(): ExpressionExpectContext[];
	public expressionExpect(i: number): ExpressionExpectContext;
	public expressionExpect(i?: number): ExpressionExpectContext | ExpressionExpectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionExpectContext);
		} else {
			return this.getRuleContext(i, ExpressionExpectContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagIt; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagIt) {
			listener.enterTagIt(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagIt) {
			listener.exitTagIt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagIt) {
			return visitor.visitTagIt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagCyContext extends ParserRuleContext {
	public CY(): TerminalNode { return this.getToken(ParserGrammarCypress.CY, 0); }
	public PUNTO(): TerminalNode { return this.getToken(ParserGrammarCypress.PUNTO, 0); }
	public tagGet(): TagGetContext | undefined {
		return this.tryGetRuleContext(0, TagGetContext);
	}
	public tagWait(): TagWaitContext | undefined {
		return this.tryGetRuleContext(0, TagWaitContext);
	}
	public tagVisit(): TagVisitContext | undefined {
		return this.tryGetRuleContext(0, TagVisitContext);
	}
	public tagUrl(): TagUrlContext | undefined {
		return this.tryGetRuleContext(0, TagUrlContext);
	}
	public tagContains(): TagContainsContext | undefined {
		return this.tryGetRuleContext(0, TagContainsContext);
	}
	public tagInjectAxe(): TagInjectAxeContext | undefined {
		return this.tryGetRuleContext(0, TagInjectAxeContext);
	}
	public tagCheckA11y(): TagCheckA11yContext | undefined {
		return this.tryGetRuleContext(0, TagCheckA11yContext);
	}
	public tagOn(): TagOnContext | undefined {
		return this.tryGetRuleContext(0, TagOnContext);
	}
	public tagStub(): TagStubContext | undefined {
		return this.tryGetRuleContext(0, TagStubContext);
	}
	public tagWindow(): TagWindowContext | undefined {
		return this.tryGetRuleContext(0, TagWindowContext);
	}
	public tagTittle(): TagTittleContext | undefined {
		return this.tryGetRuleContext(0, TagTittleContext);
	}
	public tagLocation(): TagLocationContext | undefined {
		return this.tryGetRuleContext(0, TagLocationContext);
	}
	public tagPause(): TagPauseContext | undefined {
		return this.tryGetRuleContext(0, TagPauseContext);
	}
	public tagIntercept(): TagInterceptContext | undefined {
		return this.tryGetRuleContext(0, TagInterceptContext);
	}
	public tagWrap(): TagWrapContext | undefined {
		return this.tryGetRuleContext(0, TagWrapContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagCy; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagCy) {
			listener.enterTagCy(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagCy) {
			listener.exitTagCy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagCy) {
			return visitor.visitTagCy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagGetContext extends ParserRuleContext {
	public GET(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.GET, 0); }
	public OPEN_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public tagClick(): TagClickContext | undefined {
		return this.tryGetRuleContext(0, TagClickContext);
	}
	public tagType(): TagTypeContext | undefined {
		return this.tryGetRuleContext(0, TagTypeContext);
	}
	public tagThen(): TagThenContext | undefined {
		return this.tryGetRuleContext(0, TagThenContext);
	}
	public tagShould(): TagShouldContext | undefined {
		return this.tryGetRuleContext(0, TagShouldContext);
	}
	public tagWithin(): TagWithinContext | undefined {
		return this.tryGetRuleContext(0, TagWithinContext);
	}
	public tagEq(): TagEqContext | undefined {
		return this.tryGetRuleContext(0, TagEqContext);
	}
	public tagFind(): TagFindContext | undefined {
		return this.tryGetRuleContext(0, TagFindContext);
	}
	public tagContains(): TagContainsContext | undefined {
		return this.tryGetRuleContext(0, TagContainsContext);
	}
	public tagPause(): TagPauseContext | undefined {
		return this.tryGetRuleContext(0, TagPauseContext);
	}
	public tagSelect(): TagSelectContext | undefined {
		return this.tryGetRuleContext(0, TagSelectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagGet; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagGet) {
			listener.enterTagGet(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagGet) {
			listener.exitTagGet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagGet) {
			return visitor.visitTagGet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagBeforeEachContext extends ParserRuleContext {
	public BEFORE_EACH(): TerminalNode { return this.getToken(ParserGrammarCypress.BEFORE_EACH, 0); }
	public OPEN_PARENTHESIS(): TerminalNode[];
	public OPEN_PARENTHESIS(i: number): TerminalNode;
	public OPEN_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.OPEN_PARENTHESIS);
		} else {
			return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, i);
		}
	}
	public CLOSE_PARENTHESIS(): TerminalNode[];
	public CLOSE_PARENTHESIS(i: number): TerminalNode;
	public CLOSE_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.CLOSE_PARENTHESIS);
		} else {
			return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, i);
		}
	}
	public ENTONCES(): TerminalNode { return this.getToken(ParserGrammarCypress.ENTONCES, 0); }
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
	public tagCy(): TagCyContext[];
	public tagCy(i: number): TagCyContext;
	public tagCy(i?: number): TagCyContext | TagCyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagCyContext);
		} else {
			return this.getRuleContext(i, TagCyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagBeforeEach; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagBeforeEach) {
			listener.enterTagBeforeEach(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagBeforeEach) {
			listener.exitTagBeforeEach(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagBeforeEach) {
			return visitor.visitTagBeforeEach(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagAfterEachContext extends ParserRuleContext {
	public AFTER_EACH(): TerminalNode { return this.getToken(ParserGrammarCypress.AFTER_EACH, 0); }
	public OPEN_PARENTHESIS(): TerminalNode[];
	public OPEN_PARENTHESIS(i: number): TerminalNode;
	public OPEN_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.OPEN_PARENTHESIS);
		} else {
			return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, i);
		}
	}
	public CLOSE_PARENTHESIS(): TerminalNode[];
	public CLOSE_PARENTHESIS(i: number): TerminalNode;
	public CLOSE_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.CLOSE_PARENTHESIS);
		} else {
			return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, i);
		}
	}
	public ENTONCES(): TerminalNode { return this.getToken(ParserGrammarCypress.ENTONCES, 0); }
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagAfterEach; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagAfterEach) {
			listener.enterTagAfterEach(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagAfterEach) {
			listener.exitTagAfterEach(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagAfterEach) {
			return visitor.visitTagAfterEach(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagClickContext extends ParserRuleContext {
	public CLICK(): TerminalNode { return this.getToken(ParserGrammarCypress.CLICK, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagClick; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagClick) {
			listener.enterTagClick(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagClick) {
			listener.exitTagClick(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagClick) {
			return visitor.visitTagClick(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagTypeContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(ParserGrammarCypress.TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public PUNTO(): TerminalNode[];
	public PUNTO(i: number): TerminalNode;
	public PUNTO(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.PUNTO);
		} else {
			return this.getToken(ParserGrammarCypress.PUNTO, i);
		}
	}
	public tagType(): TagTypeContext[];
	public tagType(i: number): TagTypeContext;
	public tagType(i?: number): TagTypeContext | TagTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagTypeContext);
		} else {
			return this.getRuleContext(i, TagTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagType; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagType) {
			listener.enterTagType(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagType) {
			listener.exitTagType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagType) {
			return visitor.visitTagType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagWaitContext extends ParserRuleContext {
	public WAIT(): TerminalNode { return this.getToken(ParserGrammarCypress.WAIT, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.NUMBER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagWait; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagWait) {
			listener.enterTagWait(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagWait) {
			listener.exitTagWait(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagWait) {
			return visitor.visitTagWait(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagVisitContext extends ParserRuleContext {
	public VISIT(): TerminalNode { return this.getToken(ParserGrammarCypress.VISIT, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.COMMA, 0); }
	public OPEN_KEY(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.CLOSE_KEY, 0); }
	public tagEventOnBeforeLoad(): TagEventOnBeforeLoadContext | undefined {
		return this.tryGetRuleContext(0, TagEventOnBeforeLoadContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagVisit; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagVisit) {
			listener.enterTagVisit(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagVisit) {
			listener.exitTagVisit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagVisit) {
			return visitor.visitTagVisit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagUrlContext extends ParserRuleContext {
	public URL(): TerminalNode { return this.getToken(ParserGrammarCypress.URL, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public tagShould(): TagShouldContext | undefined {
		return this.tryGetRuleContext(0, TagShouldContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagUrl; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagUrl) {
			listener.enterTagUrl(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagUrl) {
			listener.exitTagUrl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagUrl) {
			return visitor.visitTagUrl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagOnContext extends ParserRuleContext {
	public ON(): TerminalNode { return this.getToken(ParserGrammarCypress.ON, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public COMMA(): TerminalNode { return this.getToken(ParserGrammarCypress.COMMA, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public tagFunction(): TagFunctionContext | undefined {
		return this.tryGetRuleContext(0, TagFunctionContext);
	}
	public tagCy(): TagCyContext | undefined {
		return this.tryGetRuleContext(0, TagCyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagOn; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagOn) {
			listener.enterTagOn(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagOn) {
			listener.exitTagOn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagOn) {
			return visitor.visitTagOn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagInterceptContext extends ParserRuleContext {
	public INTERCEPT(): TerminalNode { return this.getToken(ParserGrammarCypress.INTERCEPT, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public tagAs(): TagAsContext | undefined {
		return this.tryGetRuleContext(0, TagAsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagIntercept; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagIntercept) {
			listener.enterTagIntercept(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagIntercept) {
			listener.exitTagIntercept(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagIntercept) {
			return visitor.visitTagIntercept(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagWindowContext extends ParserRuleContext {
	public WINDOW(): TerminalNode { return this.getToken(ParserGrammarCypress.WINDOW, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public tagThen(): TagThenContext | undefined {
		return this.tryGetRuleContext(0, TagThenContext);
	}
	public tagIts(): TagItsContext | undefined {
		return this.tryGetRuleContext(0, TagItsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagWindow; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagWindow) {
			listener.enterTagWindow(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagWindow) {
			listener.exitTagWindow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagWindow) {
			return visitor.visitTagWindow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagSelectContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(ParserGrammarCypress.SELECT, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagSelect; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagSelect) {
			listener.enterTagSelect(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagSelect) {
			listener.exitTagSelect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagSelect) {
			return visitor.visitTagSelect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagPauseContext extends ParserRuleContext {
	public PAUSE(): TerminalNode { return this.getToken(ParserGrammarCypress.PAUSE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public tagSelect(): TagSelectContext | undefined {
		return this.tryGetRuleContext(0, TagSelectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagPause; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagPause) {
			listener.enterTagPause(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagPause) {
			listener.exitTagPause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagPause) {
			return visitor.visitTagPause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagTittleContext extends ParserRuleContext {
	public TITTLE(): TerminalNode { return this.getToken(ParserGrammarCypress.TITTLE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public tagShould(): TagShouldContext | undefined {
		return this.tryGetRuleContext(0, TagShouldContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagTittle; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagTittle) {
			listener.enterTagTittle(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagTittle) {
			listener.exitTagTittle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagTittle) {
			return visitor.visitTagTittle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagFunctionContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public PARAMETER(): TerminalNode { return this.getToken(ParserGrammarCypress.PARAMETER, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public ENTONCES(): TerminalNode { return this.getToken(ParserGrammarCypress.ENTONCES, 0); }
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
	public expressionExpect(): ExpressionExpectContext[];
	public expressionExpect(i: number): ExpressionExpectContext;
	public expressionExpect(i?: number): ExpressionExpectContext | ExpressionExpectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionExpectContext);
		} else {
			return this.getRuleContext(i, ExpressionExpectContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagFunction; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagFunction) {
			listener.enterTagFunction(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagFunction) {
			listener.exitTagFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagFunction) {
			return visitor.visitTagFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagFindContext extends ParserRuleContext {
	public FIND(): TerminalNode { return this.getToken(ParserGrammarCypress.FIND, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public tagShould(): TagShouldContext | undefined {
		return this.tryGetRuleContext(0, TagShouldContext);
	}
	public tagCheck(): TagCheckContext | undefined {
		return this.tryGetRuleContext(0, TagCheckContext);
	}
	public tagEq(): TagEqContext | undefined {
		return this.tryGetRuleContext(0, TagEqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagFind; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagFind) {
			listener.enterTagFind(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagFind) {
			listener.exitTagFind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagFind) {
			return visitor.visitTagFind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagStubContext extends ParserRuleContext {
	public STUB(): TerminalNode { return this.getToken(ParserGrammarCypress.STUB, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public tagAs(): TagAsContext | undefined {
		return this.tryGetRuleContext(0, TagAsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagStub; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagStub) {
			listener.enterTagStub(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagStub) {
			listener.exitTagStub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagStub) {
			return visitor.visitTagStub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagContainsContext extends ParserRuleContext {
	public CONTAINS(): TerminalNode { return this.getToken(ParserGrammarCypress.CONTAINS, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.STRING);
		} else {
			return this.getToken(ParserGrammarCypress.STRING, i);
		}
	}
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.COMMA, 0); }
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public tagClick(): TagClickContext | undefined {
		return this.tryGetRuleContext(0, TagClickContext);
	}
	public tagShould(): TagShouldContext | undefined {
		return this.tryGetRuleContext(0, TagShouldContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagContains; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagContains) {
			listener.enterTagContains(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagContains) {
			listener.exitTagContains(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagContains) {
			return visitor.visitTagContains(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagInjectAxeContext extends ParserRuleContext {
	public INJECT_AXE(): TerminalNode { return this.getToken(ParserGrammarCypress.INJECT_AXE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagInjectAxe; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagInjectAxe) {
			listener.enterTagInjectAxe(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagInjectAxe) {
			listener.exitTagInjectAxe(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagInjectAxe) {
			return visitor.visitTagInjectAxe(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagCheckA11yContext extends ParserRuleContext {
	public CHECKA11Y(): TerminalNode { return this.getToken(ParserGrammarCypress.CHECKA11Y, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagCheckA11y; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagCheckA11y) {
			listener.enterTagCheckA11y(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagCheckA11y) {
			listener.exitTagCheckA11y(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagCheckA11y) {
			return visitor.visitTagCheckA11y(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagCheckContext extends ParserRuleContext {
	public CHECK(): TerminalNode { return this.getToken(ParserGrammarCypress.CHECK, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagCheck; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagCheck) {
			listener.enterTagCheck(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagCheck) {
			listener.exitTagCheck(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagCheck) {
			return visitor.visitTagCheck(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagItsContext extends ParserRuleContext {
	public ITS(): TerminalNode { return this.getToken(ParserGrammarCypress.ITS, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.NUMBER, 0); }
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public tagShould(): TagShouldContext | undefined {
		return this.tryGetRuleContext(0, TagShouldContext);
	}
	public tagInvoke(): TagInvokeContext | undefined {
		return this.tryGetRuleContext(0, TagInvokeContext);
	}
	public tagThen(): TagThenContext | undefined {
		return this.tryGetRuleContext(0, TagThenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagIts; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagIts) {
			listener.enterTagIts(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagIts) {
			listener.exitTagIts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagIts) {
			return visitor.visitTagIts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagInvokeContext extends ParserRuleContext {
	public INVOKE(): TerminalNode { return this.getToken(ParserGrammarCypress.INVOKE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public COMMA(): TerminalNode { return this.getToken(ParserGrammarCypress.COMMA, 0); }
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public tagWhich(): TagWhichContext | undefined {
		return this.tryGetRuleContext(0, TagWhichContext);
	}
	public tagTarget(): TagTargetContext | undefined {
		return this.tryGetRuleContext(0, TagTargetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagInvoke; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagInvoke) {
			listener.enterTagInvoke(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagInvoke) {
			listener.exitTagInvoke(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagInvoke) {
			return visitor.visitTagInvoke(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagWhichContext extends ParserRuleContext {
	public WHICH(): TerminalNode { return this.getToken(ParserGrammarCypress.WHICH, 0); }
	public NUMBER(): TerminalNode { return this.getToken(ParserGrammarCypress.NUMBER, 0); }
	public COMMA(): TerminalNode { return this.getToken(ParserGrammarCypress.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagWhich; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagWhich) {
			listener.enterTagWhich(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagWhich) {
			listener.exitTagWhich(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagWhich) {
			return visitor.visitTagWhich(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagTargetContext extends ParserRuleContext {
	public TARGET(): TerminalNode { return this.getToken(ParserGrammarCypress.TARGET, 0); }
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
	public tagValue(): TagValueContext | undefined {
		return this.tryGetRuleContext(0, TagValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagTarget; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagTarget) {
			listener.enterTagTarget(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagTarget) {
			listener.exitTagTarget(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagTarget) {
			return visitor.visitTagTarget(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagValueContext extends ParserRuleContext {
	public VALUE(): TerminalNode { return this.getToken(ParserGrammarCypress.VALUE, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public COMMA(): TerminalNode { return this.getToken(ParserGrammarCypress.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagValue; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagValue) {
			listener.enterTagValue(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagValue) {
			listener.exitTagValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagValue) {
			return visitor.visitTagValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagLocationContext extends ParserRuleContext {
	public LOCATION(): TerminalNode { return this.getToken(ParserGrammarCypress.LOCATION, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public tagShould(): TagShouldContext | undefined {
		return this.tryGetRuleContext(0, TagShouldContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagLocation; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagLocation) {
			listener.enterTagLocation(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagLocation) {
			listener.exitTagLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagLocation) {
			return visitor.visitTagLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagFirstContext extends ParserRuleContext {
	public FIRST(): TerminalNode { return this.getToken(ParserGrammarCypress.FIRST, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public tagShould(): TagShouldContext | undefined {
		return this.tryGetRuleContext(0, TagShouldContext);
	}
	public tagContains(): TagContainsContext | undefined {
		return this.tryGetRuleContext(0, TagContainsContext);
	}
	public tagFind(): TagFindContext | undefined {
		return this.tryGetRuleContext(0, TagFindContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagFirst; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagFirst) {
			listener.enterTagFirst(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagFirst) {
			listener.exitTagFirst(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagFirst) {
			return visitor.visitTagFirst(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagEqContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(ParserGrammarCypress.EQ, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public NUMBER(): TerminalNode { return this.getToken(ParserGrammarCypress.NUMBER, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public tagShould(): TagShouldContext | undefined {
		return this.tryGetRuleContext(0, TagShouldContext);
	}
	public tagFind(): TagFindContext | undefined {
		return this.tryGetRuleContext(0, TagFindContext);
	}
	public tagClick(): TagClickContext | undefined {
		return this.tryGetRuleContext(0, TagClickContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagEq; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagEq) {
			listener.enterTagEq(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagEq) {
			listener.exitTagEq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagEq) {
			return visitor.visitTagEq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagThenContext extends ParserRuleContext {
	public THEN(): TerminalNode { return this.getToken(ParserGrammarCypress.THEN, 0); }
	public OPEN_PARENTHESIS(): TerminalNode[];
	public OPEN_PARENTHESIS(i: number): TerminalNode;
	public OPEN_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.OPEN_PARENTHESIS);
		} else {
			return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, i);
		}
	}
	public CLOSE_PARENTHESIS(): TerminalNode[];
	public CLOSE_PARENTHESIS(i: number): TerminalNode;
	public CLOSE_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.CLOSE_PARENTHESIS);
		} else {
			return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, i);
		}
	}
	public ENTONCES(): TerminalNode { return this.getToken(ParserGrammarCypress.ENTONCES, 0); }
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
	public tagParam(): TagParamContext | undefined {
		return this.tryGetRuleContext(0, TagParamContext);
	}
	public expressionExpect(): ExpressionExpectContext[];
	public expressionExpect(i: number): ExpressionExpectContext;
	public expressionExpect(i?: number): ExpressionExpectContext | ExpressionExpectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionExpectContext);
		} else {
			return this.getRuleContext(i, ExpressionExpectContext);
		}
	}
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public tagIts(): TagItsContext | undefined {
		return this.tryGetRuleContext(0, TagItsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagThen; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagThen) {
			listener.enterTagThen(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagThen) {
			listener.exitTagThen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagThen) {
			return visitor.visitTagThen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagShouldContext extends ParserRuleContext {
	public SHOULD(): TerminalNode { return this.getToken(ParserGrammarCypress.SHOULD, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.STRING);
		} else {
			return this.getToken(ParserGrammarCypress.STRING, i);
		}
	}
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.COMMA);
		} else {
			return this.getToken(ParserGrammarCypress.COMMA, i);
		}
	}
	public tagFirst(): TagFirstContext | undefined {
		return this.tryGetRuleContext(0, TagFirstContext);
	}
	public tagIts(): TagItsContext | undefined {
		return this.tryGetRuleContext(0, TagItsContext);
	}
	public tagAnd(): TagAndContext | undefined {
		return this.tryGetRuleContext(0, TagAndContext);
	}
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.NUMBER);
		} else {
			return this.getToken(ParserGrammarCypress.NUMBER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagShould; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagShould) {
			listener.enterTagShould(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagShould) {
			listener.exitTagShould(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagShould) {
			return visitor.visitTagShould(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagWithinContext extends ParserRuleContext {
	public WITHIN(): TerminalNode { return this.getToken(ParserGrammarCypress.WITHIN, 0); }
	public OPEN_PARENTHESIS(): TerminalNode[];
	public OPEN_PARENTHESIS(i: number): TerminalNode;
	public OPEN_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.OPEN_PARENTHESIS);
		} else {
			return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, i);
		}
	}
	public CLOSE_PARENTHESIS(): TerminalNode[];
	public CLOSE_PARENTHESIS(i: number): TerminalNode;
	public CLOSE_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.CLOSE_PARENTHESIS);
		} else {
			return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, i);
		}
	}
	public ENTONCES(): TerminalNode { return this.getToken(ParserGrammarCypress.ENTONCES, 0); }
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
	public tagCy(): TagCyContext[];
	public tagCy(i: number): TagCyContext;
	public tagCy(i?: number): TagCyContext | TagCyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagCyContext);
		} else {
			return this.getRuleContext(i, TagCyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagWithin; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagWithin) {
			listener.enterTagWithin(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagWithin) {
			listener.exitTagWithin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagWithin) {
			return visitor.visitTagWithin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagAndContext extends ParserRuleContext {
	public AND(): TerminalNode { return this.getToken(ParserGrammarCypress.AND, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.STRING);
		} else {
			return this.getToken(ParserGrammarCypress.STRING, i);
		}
	}
	public tagAnd(): TagAndContext[];
	public tagAnd(i: number): TagAndContext;
	public tagAnd(i?: number): TagAndContext | TagAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagAndContext);
		} else {
			return this.getRuleContext(i, TagAndContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.COMMA);
		} else {
			return this.getToken(ParserGrammarCypress.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagAnd; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagAnd) {
			listener.enterTagAnd(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagAnd) {
			listener.exitTagAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagAnd) {
			return visitor.visitTagAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagDataStringContext extends ParserRuleContext {
	public DATE_STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.DATE_STRING, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagDataString; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagDataString) {
			listener.enterTagDataString(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagDataString) {
			listener.exitTagDataString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagDataString) {
			return visitor.visitTagDataString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagWrapContext extends ParserRuleContext {
	public WRAP(): TerminalNode { return this.getToken(ParserGrammarCypress.WRAP, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public tagShould(): TagShouldContext | undefined {
		return this.tryGetRuleContext(0, TagShouldContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagWrap; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagWrap) {
			listener.enterTagWrap(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagWrap) {
			listener.exitTagWrap(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagWrap) {
			return visitor.visitTagWrap(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionExpectContext extends ParserRuleContext {
	public EXPECT(): TerminalNode { return this.getToken(ParserGrammarCypress.EXPECT, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public PUNTO(): TerminalNode[];
	public PUNTO(i: number): TerminalNode;
	public PUNTO(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.PUNTO);
		} else {
			return this.getToken(ParserGrammarCypress.PUNTO, i);
		}
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.TO, 0); }
	public NOT_TO_BE_A(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.NOT_TO_BE_A, 0); }
	public TO_BE_A(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.TO_BE_A, 0); }
	public tagParam(): TagParamContext | undefined {
		return this.tryGetRuleContext(0, TagParamContext);
	}
	public tagEqual(): TagEqualContext | undefined {
		return this.tryGetRuleContext(0, TagEqualContext);
	}
	public tagDataString(): TagDataStringContext | undefined {
		return this.tryGetRuleContext(0, TagDataStringContext);
	}
	public tagIndex(): TagIndexContext | undefined {
		return this.tryGetRuleContext(0, TagIndexContext);
	}
	public LENGTH(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.LENGTH, 0); }
	public INNERTEXT(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.INNERTEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_expressionExpect; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterExpressionExpect) {
			listener.enterExpressionExpect(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitExpressionExpect) {
			listener.exitExpressionExpect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitExpressionExpect) {
			return visitor.visitExpressionExpect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagEqualContext extends ParserRuleContext {
	public EQUAL(): TerminalNode { return this.getToken(ParserGrammarCypress.EQUAL, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagEqual; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagEqual) {
			listener.enterTagEqual(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagEqual) {
			listener.exitTagEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagEqual) {
			return visitor.visitTagEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagParamContext extends ParserRuleContext {
	public PARAMETER(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PARAMETER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.STRING, 0); }
	public PESO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PESO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagParam; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagParam) {
			listener.enterTagParam(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagParam) {
			listener.exitTagParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagParam) {
			return visitor.visitTagParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagIndexContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_BRACKET, 0); }
	public NUMBER(): TerminalNode { return this.getToken(ParserGrammarCypress.NUMBER, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagIndex; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagIndex) {
			listener.enterTagIndex(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagIndex) {
			listener.exitTagIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagIndex) {
			return visitor.visitTagIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagAsContext extends ParserRuleContext {
	public AS(): TerminalNode { return this.getToken(ParserGrammarCypress.AS, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagAs; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagAs) {
			listener.enterTagAs(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagAs) {
			listener.exitTagAs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagAs) {
			return visitor.visitTagAs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagEventOnBeforeLoadContext extends ParserRuleContext {
	public ON_BEFORE_LOAD(): TerminalNode { return this.getToken(ParserGrammarCypress.ON_BEFORE_LOAD, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public PARAMETER(): TerminalNode[];
	public PARAMETER(i: number): TerminalNode;
	public PARAMETER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.PARAMETER);
		} else {
			return this.getToken(ParserGrammarCypress.PARAMETER, i);
		}
	}
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
	public PUNTO(): TerminalNode[];
	public PUNTO(i: number): TerminalNode;
	public PUNTO(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.PUNTO);
		} else {
			return this.getToken(ParserGrammarCypress.PUNTO, i);
		}
	}
	public tagEventListener(): TagEventListenerContext[];
	public tagEventListener(i: number): TagEventListenerContext;
	public tagEventListener(i?: number): TagEventListenerContext | TagEventListenerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagEventListenerContext);
		} else {
			return this.getRuleContext(i, TagEventListenerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagEventOnBeforeLoad; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagEventOnBeforeLoad) {
			listener.enterTagEventOnBeforeLoad(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagEventOnBeforeLoad) {
			listener.exitTagEventOnBeforeLoad(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagEventOnBeforeLoad) {
			return visitor.visitTagEventOnBeforeLoad(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagEventListenerContext extends ParserRuleContext {
	public ADD_EVENT_LISTENER(): TerminalNode { return this.getToken(ParserGrammarCypress.ADD_EVENT_LISTENER, 0); }
	public OPEN_PARENTHESIS(): TerminalNode[];
	public OPEN_PARENTHESIS(i: number): TerminalNode;
	public OPEN_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.OPEN_PARENTHESIS);
		} else {
			return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, i);
		}
	}
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public COMMA(): TerminalNode { return this.getToken(ParserGrammarCypress.COMMA, 0); }
	public PARAMETER(): TerminalNode { return this.getToken(ParserGrammarCypress.PARAMETER, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode[];
	public CLOSE_PARENTHESIS(i: number): TerminalNode;
	public CLOSE_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.CLOSE_PARENTHESIS);
		} else {
			return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, i);
		}
	}
	public ENTONCES(): TerminalNode { return this.getToken(ParserGrammarCypress.ENTONCES, 0); }
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagEventListener; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagEventListener) {
			listener.enterTagEventListener(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagEventListener) {
			listener.exitTagEventListener(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagEventListener) {
			return visitor.visitTagEventListener(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


