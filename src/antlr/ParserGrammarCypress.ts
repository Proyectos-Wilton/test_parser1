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
	public static readonly CY = 7;
	public static readonly VISIT = 8;
	public static readonly WAIT = 9;
	public static readonly GET = 10;
	public static readonly URL = 11;
	public static readonly CONTAINS = 12;
	public static readonly INJECT_AXE = 13;
	public static readonly CHECKA11Y = 14;
	public static readonly SHOULD = 15;
	public static readonly WITHIN = 16;
	public static readonly SKIPP = 17;
	public static readonly THEN = 18;
	public static readonly EXPECT = 19;
	public static readonly TO = 20;
	public static readonly EQUAL = 21;
	public static readonly CLICK = 22;
	public static readonly TYPE = 23;
	public static readonly EXIST = 24;
	public static readonly STRING = 25;
	public static readonly NUMBER = 26;
	public static readonly WS = 27;
	public static readonly OPEN_KEY = 28;
	public static readonly CLOSE_KEY = 29;
	public static readonly OPEN_PARENTHESIS = 30;
	public static readonly CLOSE_PARENTHESIS = 31;
	public static readonly OPEN_BRACKET = 32;
	public static readonly CLOSE_BRACKET = 33;
	public static readonly ENTONCES = 34;
	public static readonly COMMA = 35;
	public static readonly IGUAL = 36;
	public static readonly PUNTO = 37;
	public static readonly COMMENT1 = 38;
	public static readonly COMMENT2 = 39;
	public static readonly PARAMETER = 40;
	public static readonly PESO = 41;
	public static readonly INNERTEXT = 42;
	public static readonly LENGTH = 43;
	public static readonly CONSOLE = 44;
	public static readonly CONST = 45;
	public static readonly THROW = 46;
	public static readonly NEW = 47;
	public static readonly ERROR = 48;
	public static readonly RULE_testBlock = 0;
	public static readonly RULE_tagIt = 1;
	public static readonly RULE_tagCy = 2;
	public static readonly RULE_tagGet = 3;
	public static readonly RULE_tagBeforeEach = 4;
	public static readonly RULE_tagAfterEach = 5;
	public static readonly RULE_tagClick = 6;
	public static readonly RULE_tagType = 7;
	public static readonly RULE_tagWait = 8;
	public static readonly RULE_tagVisit = 9;
	public static readonly RULE_tagUrl = 10;
	public static readonly RULE_tagContains = 11;
	public static readonly RULE_tagInjectAxe = 12;
	public static readonly RULE_tagCheckA11y = 13;
	public static readonly RULE_tagThen = 14;
	public static readonly RULE_tagShould = 15;
	public static readonly RULE_tagWithin = 16;
	public static readonly RULE_expressionExpect = 17;
	public static readonly RULE_tagEqual = 18;
	public static readonly RULE_tagParam = 19;
	public static readonly RULE_tagIndex = 20;
	public static readonly RULE_tagPrint = 21;
	public static readonly RULE_tagEventOnBeforeLoad = 22;
	public static readonly RULE_tagEventListener = 23;
	public static readonly RULE_tagConstant = 24;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"testBlock", "tagIt", "tagCy", "tagGet", "tagBeforeEach", "tagAfterEach", 
		"tagClick", "tagType", "tagWait", "tagVisit", "tagUrl", "tagContains", 
		"tagInjectAxe", "tagCheckA11y", "tagThen", "tagShould", "tagWithin", "expressionExpect", 
		"tagEqual", "tagParam", "tagIndex", "tagPrint", "tagEventOnBeforeLoad", 
		"tagEventListener", "tagConstant",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'describe'", "'it'", "'beforeEach'", "'afterEach'", "'onBeforeLoad'", 
		"'addEventListener'", "'cy'", "'visit'", "'wait'", "'get'", "'url'", "'contains'", 
		"'injectAxe'", "'checkA11y'", "'should'", "'within'", "'.skip'", "'then'", 
		"'expect'", "'to'", "'equal'", "'click'", "'type'", "'exist'", undefined, 
		undefined, undefined, "'{'", "'}'", "'('", "')'", "'['", "']'", "'=>'", 
		"','", "'='", "'.'", undefined, undefined, undefined, "'$'", "'.innerText'", 
		"'.length'", "'console.log'", "'const'", "'throw'", "'new'", "'Error'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DESCRIBE", "IT", "BEFORE_EACH", "AFTER_EACH", "ON_BEFORE_LOAD", 
		"ADD_EVENT_LISTENER", "CY", "VISIT", "WAIT", "GET", "URL", "CONTAINS", 
		"INJECT_AXE", "CHECKA11Y", "SHOULD", "WITHIN", "SKIPP", "THEN", "EXPECT", 
		"TO", "EQUAL", "CLICK", "TYPE", "EXIST", "STRING", "NUMBER", "WS", "OPEN_KEY", 
		"CLOSE_KEY", "OPEN_PARENTHESIS", "CLOSE_PARENTHESIS", "OPEN_BRACKET", 
		"CLOSE_BRACKET", "ENTONCES", "COMMA", "IGUAL", "PUNTO", "COMMENT1", "COMMENT2", 
		"PARAMETER", "PESO", "INNERTEXT", "LENGTH", "CONSOLE", "CONST", "THROW", 
		"NEW", "ERROR",
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
			this.state = 50;
			this.match(ParserGrammarCypress.DESCRIBE);
			this.state = 51;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 52;
			this.match(ParserGrammarCypress.STRING);
			this.state = 53;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 54;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 55;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 56;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 57;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 61;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.IT:
					{
					this.state = 58;
					this.tagIt();
					}
					break;
				case ParserGrammarCypress.BEFORE_EACH:
					{
					this.state = 59;
					this.tagBeforeEach();
					}
					break;
				case ParserGrammarCypress.AFTER_EACH:
					{
					this.state = 60;
					this.tagAfterEach();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ParserGrammarCypress.IT) | (1 << ParserGrammarCypress.BEFORE_EACH) | (1 << ParserGrammarCypress.AFTER_EACH))) !== 0));
			this.state = 65;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 66;
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
		this.enterRule(_localctx, 2, ParserGrammarCypress.RULE_tagIt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(ParserGrammarCypress.IT);
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.SKIPP) {
				{
				this.state = 69;
				this.match(ParserGrammarCypress.SKIPP);
				}
			}

			this.state = 72;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 73;
			this.match(ParserGrammarCypress.STRING);
			this.state = 74;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 75;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 76;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 77;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 78;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 79;
				this.tagCy();
				}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ParserGrammarCypress.CY);
			this.state = 84;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 85;
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
		this.enterRule(_localctx, 4, ParserGrammarCypress.RULE_tagCy);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(ParserGrammarCypress.CY);
			this.state = 88;
			this.match(ParserGrammarCypress.PUNTO);
			this.state = 96;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParserGrammarCypress.GET:
				{
				this.state = 89;
				this.tagGet();
				}
				break;
			case ParserGrammarCypress.WAIT:
				{
				this.state = 90;
				this.tagWait();
				}
				break;
			case ParserGrammarCypress.VISIT:
				{
				this.state = 91;
				this.tagVisit();
				}
				break;
			case ParserGrammarCypress.URL:
				{
				this.state = 92;
				this.tagUrl();
				}
				break;
			case ParserGrammarCypress.CONTAINS:
				{
				this.state = 93;
				this.tagContains();
				}
				break;
			case ParserGrammarCypress.INJECT_AXE:
				{
				this.state = 94;
				this.tagInjectAxe();
				}
				break;
			case ParserGrammarCypress.CHECKA11Y:
				{
				this.state = 95;
				this.tagCheckA11y();
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
		this.enterRule(_localctx, 6, ParserGrammarCypress.RULE_tagGet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 98;
			this.match(ParserGrammarCypress.GET);
			this.state = 99;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 100;
			this.match(ParserGrammarCypress.STRING);
			this.state = 101;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 102;
			this.match(ParserGrammarCypress.PUNTO);
			}
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParserGrammarCypress.CLICK:
				{
				this.state = 104;
				this.tagClick();
				}
				break;
			case ParserGrammarCypress.TYPE:
				{
				this.state = 105;
				this.tagType();
				}
				break;
			case ParserGrammarCypress.THEN:
				{
				this.state = 106;
				this.tagThen();
				}
				break;
			case ParserGrammarCypress.SHOULD:
				{
				this.state = 107;
				this.tagShould();
				}
				break;
			case ParserGrammarCypress.WITHIN:
				{
				this.state = 108;
				this.tagWithin();
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
	public tagBeforeEach(): TagBeforeEachContext {
		let _localctx: TagBeforeEachContext = new TagBeforeEachContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ParserGrammarCypress.RULE_tagBeforeEach);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(ParserGrammarCypress.BEFORE_EACH);
			this.state = 112;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 113;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 114;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 115;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 116;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 117;
				this.tagCy();
				}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ParserGrammarCypress.CY);
			this.state = 122;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 123;
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
		this.enterRule(_localctx, 10, ParserGrammarCypress.RULE_tagAfterEach);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(ParserGrammarCypress.AFTER_EACH);
			this.state = 126;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 127;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 128;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 129;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 130;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParserGrammarCypress.CONSOLE) {
				{
				{
				this.state = 131;
				this.tagPrint();
				}
				}
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 137;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 138;
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
		this.enterRule(_localctx, 12, ParserGrammarCypress.RULE_tagClick);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(ParserGrammarCypress.CLICK);
			this.state = 141;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 142;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.THEN) {
				{
				this.state = 143;
				this.tagThen();
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
	public tagType(): TagTypeContext {
		let _localctx: TagTypeContext = new TagTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ParserGrammarCypress.RULE_tagType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.match(ParserGrammarCypress.TYPE);
			this.state = 147;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 148;
			this.match(ParserGrammarCypress.STRING);
			this.state = 149;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.THEN) {
				{
				this.state = 150;
				this.tagThen();
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
	public tagWait(): TagWaitContext {
		let _localctx: TagWaitContext = new TagWaitContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ParserGrammarCypress.RULE_tagWait);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.match(ParserGrammarCypress.WAIT);
			this.state = 154;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 155;
			this.match(ParserGrammarCypress.NUMBER);
			this.state = 156;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.THEN) {
				{
				this.state = 157;
				this.tagThen();
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
	public tagVisit(): TagVisitContext {
		let _localctx: TagVisitContext = new TagVisitContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ParserGrammarCypress.RULE_tagVisit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(ParserGrammarCypress.VISIT);
			this.state = 161;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 162;
			this.match(ParserGrammarCypress.STRING);
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.COMMA) {
				{
				this.state = 163;
				this.match(ParserGrammarCypress.COMMA);
				this.state = 164;
				this.match(ParserGrammarCypress.OPEN_KEY);
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParserGrammarCypress.ON_BEFORE_LOAD) {
					{
					this.state = 165;
					this.tagEventOnBeforeLoad();
					}
				}

				this.state = 168;
				this.match(ParserGrammarCypress.CLOSE_KEY);
				}
			}

			this.state = 171;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.THEN) {
				{
				this.state = 172;
				this.tagThen();
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
	public tagUrl(): TagUrlContext {
		let _localctx: TagUrlContext = new TagUrlContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ParserGrammarCypress.RULE_tagUrl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.match(ParserGrammarCypress.URL);
			this.state = 176;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 177;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 178;
			this.match(ParserGrammarCypress.PUNTO);
			{
			this.state = 179;
			this.tagShould();
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
		this.enterRule(_localctx, 22, ParserGrammarCypress.RULE_tagContains);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.match(ParserGrammarCypress.CONTAINS);
			this.state = 182;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 183;
			this.match(ParserGrammarCypress.STRING);
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.COMMA) {
				{
				this.state = 184;
				this.match(ParserGrammarCypress.COMMA);
				this.state = 185;
				this.match(ParserGrammarCypress.STRING);
				}
			}

			this.state = 188;
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
	public tagInjectAxe(): TagInjectAxeContext {
		let _localctx: TagInjectAxeContext = new TagInjectAxeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ParserGrammarCypress.RULE_tagInjectAxe);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.match(ParserGrammarCypress.INJECT_AXE);
			this.state = 191;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 192;
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
		this.enterRule(_localctx, 26, ParserGrammarCypress.RULE_tagCheckA11y);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.match(ParserGrammarCypress.CHECKA11Y);
			this.state = 195;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 196;
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
	public tagThen(): TagThenContext {
		let _localctx: TagThenContext = new TagThenContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ParserGrammarCypress.RULE_tagThen);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.match(ParserGrammarCypress.THEN);
			this.state = 199;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 200;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PESO) {
				{
				this.state = 201;
				this.tagParam();
				}
			}

			this.state = 204;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 205;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 206;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParserGrammarCypress.EXPECT) {
				{
				{
				this.state = 207;
				this.expressionExpect();
				}
				}
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 213;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 214;
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
	public tagShould(): TagShouldContext {
		let _localctx: TagShouldContext = new TagShouldContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ParserGrammarCypress.RULE_tagShould);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(ParserGrammarCypress.SHOULD);
			this.state = 217;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			{
			this.state = 218;
			this.match(ParserGrammarCypress.STRING);
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.COMMA) {
				{
				this.state = 219;
				this.match(ParserGrammarCypress.COMMA);
				this.state = 220;
				this.match(ParserGrammarCypress.STRING);
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParserGrammarCypress.COMMA) {
					{
					this.state = 221;
					this.match(ParserGrammarCypress.COMMA);
					this.state = 222;
					this.match(ParserGrammarCypress.STRING);
					}
				}

				}
			}

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
	public tagWithin(): TagWithinContext {
		let _localctx: TagWithinContext = new TagWithinContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ParserGrammarCypress.RULE_tagWithin);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(ParserGrammarCypress.WITHIN);
			this.state = 230;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 231;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 232;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 233;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 234;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 235;
				this.tagCy();
				}
				}
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ParserGrammarCypress.CY);
			this.state = 240;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 241;
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
	public expressionExpect(): ExpressionExpectContext {
		let _localctx: ExpressionExpectContext = new ExpressionExpectContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ParserGrammarCypress.RULE_expressionExpect);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this.match(ParserGrammarCypress.EXPECT);
			this.state = 244;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			{
			this.state = 245;
			this.tagParam();
			}
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.OPEN_BRACKET) {
				{
				this.state = 246;
				this.tagIndex();
				}
			}

			this.state = 249;
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
			this.state = 250;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 251;
			this.match(ParserGrammarCypress.PUNTO);
			this.state = 252;
			this.match(ParserGrammarCypress.TO);
			this.state = 253;
			this.match(ParserGrammarCypress.PUNTO);
			{
			this.state = 254;
			this.tagEqual();
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
		this.enterRule(_localctx, 36, ParserGrammarCypress.RULE_tagEqual);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(ParserGrammarCypress.EQUAL);
			this.state = 257;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 258;
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
			this.state = 259;
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
		this.enterRule(_localctx, 38, ParserGrammarCypress.RULE_tagParam);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this.match(ParserGrammarCypress.PESO);
			this.state = 262;
			this.match(ParserGrammarCypress.PARAMETER);
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
		this.enterRule(_localctx, 40, ParserGrammarCypress.RULE_tagIndex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(ParserGrammarCypress.OPEN_BRACKET);
			this.state = 265;
			this.match(ParserGrammarCypress.NUMBER);
			this.state = 266;
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
	public tagPrint(): TagPrintContext {
		let _localctx: TagPrintContext = new TagPrintContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ParserGrammarCypress.RULE_tagPrint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(ParserGrammarCypress.CONSOLE);
			this.state = 269;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 270;
			this.match(ParserGrammarCypress.STRING);
			this.state = 271;
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
		this.enterRule(_localctx, 44, ParserGrammarCypress.RULE_tagEventOnBeforeLoad);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.match(ParserGrammarCypress.ON_BEFORE_LOAD);
			this.state = 274;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 275;
			this.match(ParserGrammarCypress.PARAMETER);
			this.state = 276;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 277;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParserGrammarCypress.PARAMETER) {
				{
				{
				this.state = 278;
				this.match(ParserGrammarCypress.PARAMETER);
				this.state = 279;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 280;
				this.tagEventListener();
				}
				}
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 286;
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
		this.enterRule(_localctx, 46, ParserGrammarCypress.RULE_tagEventListener);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			this.match(ParserGrammarCypress.ADD_EVENT_LISTENER);
			this.state = 289;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 290;
			this.match(ParserGrammarCypress.STRING);
			this.state = 291;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 292;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 293;
			this.match(ParserGrammarCypress.PARAMETER);
			this.state = 294;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 295;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 296;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParserGrammarCypress.CONST) {
				{
				{
				this.state = 297;
				this.tagConstant();
				}
				}
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 303;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 304;
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
	public tagConstant(): TagConstantContext {
		let _localctx: TagConstantContext = new TagConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ParserGrammarCypress.RULE_tagConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.match(ParserGrammarCypress.CONST);
			this.state = 307;
			this.match(ParserGrammarCypress.PARAMETER);
			this.state = 308;
			this.match(ParserGrammarCypress.IGUAL);
			this.state = 309;
			this.match(ParserGrammarCypress.STRING);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x032\u013A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x06\x02@\n\x02" +
		"\r\x02\x0E\x02A\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03I\n\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x06\x03" +
		"S\n\x03\r\x03\x0E\x03T\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04c\n\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x05\x05p\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x06\x06y\n\x06\r\x06\x0E\x06z\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x87\n\x07\f\x07" +
		"\x0E\x07\x8A\v\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x05" +
		"\b\x93\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x9A\n\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\xA1\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v" +
		"\xA9\n\v\x03\v\x05\v\xAC\n\v\x03\v\x03\v\x05\v\xB0\n\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xBD\n\r\x03\r" +
		"\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xCD\n\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x07\x10\xD3\n\x10\f\x10\x0E\x10\xD6\v\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11" +
		"\xE2\n\x11\x05\x11\xE4\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x06\x12\xEF\n\x12\r\x12\x0E\x12\xF0\x03\x12" +
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xFA\n\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u011C\n\x18\f\x18\x0E\x18" +
		"\u011F\v\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u012D\n\x19\f\x19\x0E\x19" +
		"\u0130\v\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x02\x02\x02\x1B\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02\x02\x04\x03\x02,-" +
		"\x03\x02\x1B\x1C\x02\u0140\x024\x03\x02\x02\x02\x04F\x03\x02\x02\x02\x06" +
		"Y\x03\x02\x02\x02\bd\x03\x02\x02\x02\nq\x03\x02\x02\x02\f\x7F\x03\x02" +
		"\x02\x02\x0E\x8E\x03\x02\x02\x02\x10\x94\x03\x02\x02\x02\x12\x9B\x03\x02" +
		"\x02\x02\x14\xA2\x03\x02\x02\x02\x16\xB1\x03\x02\x02\x02\x18\xB7\x03\x02" +
		"\x02\x02\x1A\xC0\x03\x02\x02\x02\x1C\xC4\x03\x02\x02\x02\x1E\xC8\x03\x02" +
		"\x02\x02 \xDA\x03\x02\x02\x02\"\xE7\x03\x02\x02\x02$\xF5\x03\x02\x02\x02" +
		"&\u0102\x03\x02\x02\x02(\u0107\x03\x02\x02\x02*\u010A\x03\x02\x02\x02" +
		",\u010E\x03\x02\x02\x02.\u0113\x03\x02\x02\x020\u0122\x03\x02\x02\x02" +
		"2\u0134\x03\x02\x02\x0245\x07\x03\x02\x0256\x07 \x02\x0267\x07\x1B\x02" +
		"\x0278\x07%\x02\x0289\x07 \x02\x029:\x07!\x02\x02:;\x07$\x02\x02;?\x07" +
		"\x1E\x02\x02<@\x05\x04\x03\x02=@\x05\n\x06\x02>@\x05\f\x07\x02?<\x03\x02" +
		"\x02\x02?=\x03\x02\x02\x02?>\x03\x02\x02\x02@A\x03\x02\x02\x02A?\x03\x02" +
		"\x02\x02AB\x03\x02\x02\x02BC\x03\x02\x02\x02CD\x07\x1F\x02\x02DE\x07!" +
		"\x02\x02E\x03\x03\x02\x02\x02FH\x07\x04\x02\x02GI\x07\x13\x02\x02HG\x03" +
		"\x02\x02\x02HI\x03\x02\x02\x02IJ\x03\x02\x02\x02JK\x07 \x02\x02KL\x07" +
		"\x1B\x02\x02LM\x07%\x02\x02MN\x07 \x02\x02NO\x07!\x02\x02OP\x07$\x02\x02" +
		"PR\x07\x1E\x02\x02QS\x05\x06\x04\x02RQ\x03\x02\x02\x02ST\x03\x02\x02\x02" +
		"TR\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x03\x02\x02\x02VW\x07\x1F\x02\x02" +
		"WX\x07!\x02\x02X\x05\x03\x02\x02\x02YZ\x07\t\x02\x02Zb\x07\'\x02\x02[" +
		"c\x05\b\x05\x02\\c\x05\x12\n\x02]c\x05\x14\v\x02^c\x05\x16\f\x02_c\x05" +
		"\x18\r\x02`c\x05\x1A\x0E\x02ac\x05\x1C\x0F\x02b[\x03\x02\x02\x02b\\\x03" +
		"\x02\x02\x02b]\x03\x02\x02\x02b^\x03\x02\x02\x02b_\x03\x02\x02\x02b`\x03" +
		"\x02\x02\x02ba\x03\x02\x02\x02c\x07\x03\x02\x02\x02de\x07\f\x02\x02ef" +
		"\x07 \x02\x02fg\x07\x1B\x02\x02gh\x07!\x02\x02hi\x07\'\x02\x02io\x03\x02" +
		"\x02\x02jp\x05\x0E\b\x02kp\x05\x10\t\x02lp\x05\x1E\x10\x02mp\x05 \x11" +
		"\x02np\x05\"\x12\x02oj\x03\x02\x02\x02ok\x03\x02\x02\x02ol\x03\x02\x02" +
		"\x02om\x03\x02\x02\x02on\x03\x02\x02\x02p\t\x03\x02\x02\x02qr\x07\x05" +
		"\x02\x02rs\x07 \x02\x02st\x07 \x02\x02tu\x07!\x02\x02uv\x07$\x02\x02v" +
		"x\x07\x1E\x02\x02wy\x05\x06\x04\x02xw\x03\x02\x02\x02yz\x03\x02\x02\x02" +
		"zx\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x07\x1F\x02\x02" +
		"}~\x07!\x02\x02~\v\x03\x02\x02\x02\x7F\x80\x07\x06\x02\x02\x80\x81\x07" +
		" \x02\x02\x81\x82\x07 \x02\x02\x82\x83\x07!\x02\x02\x83\x84\x07$\x02\x02" +
		"\x84\x88\x07\x1E\x02\x02\x85\x87\x05,\x17\x02\x86\x85\x03\x02\x02\x02" +
		"\x87\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02" +
		"\x89\x8B\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8B\x8C\x07\x1F\x02\x02" +
		"\x8C\x8D\x07!\x02\x02\x8D\r\x03\x02\x02\x02\x8E\x8F\x07\x18\x02\x02\x8F" +
		"\x90\x07 \x02\x02\x90\x92\x07!\x02\x02\x91\x93\x05\x1E\x10\x02\x92\x91" +
		"\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x0F\x03\x02\x02\x02\x94\x95" +
		"\x07\x19\x02\x02\x95\x96\x07 \x02\x02\x96\x97\x07\x1B\x02\x02\x97\x99" +
		"\x07!\x02\x02\x98\x9A\x05\x1E\x10\x02\x99\x98\x03\x02\x02\x02\x99\x9A" +
		"\x03\x02\x02\x02\x9A\x11\x03\x02\x02\x02\x9B\x9C\x07\v\x02\x02\x9C\x9D" +
		"\x07 \x02\x02\x9D\x9E\x07\x1C\x02\x02\x9E\xA0\x07!\x02\x02\x9F\xA1\x05" +
		"\x1E\x10\x02\xA0\x9F\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\x13\x03" +
		"\x02\x02\x02\xA2\xA3\x07\n\x02\x02\xA3\xA4\x07 \x02\x02\xA4\xAB\x07\x1B" +
		"\x02\x02\xA5\xA6\x07%\x02\x02\xA6\xA8\x07\x1E\x02\x02\xA7\xA9\x05.\x18" +
		"\x02\xA8\xA7\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA\x03\x02\x02" +
		"\x02\xAA\xAC\x07\x1F\x02\x02\xAB\xA5\x03\x02\x02\x02\xAB\xAC\x03\x02\x02" +
		"\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAF\x07!\x02\x02\xAE\xB0\x05\x1E\x10" +
		"\x02\xAF\xAE\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\x15\x03\x02\x02" +
		"\x02\xB1\xB2\x07\r\x02\x02\xB2\xB3\x07 \x02\x02\xB3\xB4\x07!\x02\x02\xB4" +
		"\xB5\x07\'\x02\x02\xB5\xB6\x05 \x11\x02\xB6\x17\x03\x02\x02\x02\xB7\xB8" +
		"\x07\x0E\x02\x02\xB8\xB9\x07 \x02\x02\xB9\xBC\x07\x1B\x02\x02\xBA\xBB" +
		"\x07%\x02\x02\xBB\xBD\x07\x1B\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD" +
		"\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x07!\x02\x02\xBF\x19" +
		"\x03\x02\x02\x02\xC0\xC1\x07\x0F\x02\x02\xC1\xC2\x07 \x02\x02\xC2\xC3" +
		"\x07!\x02\x02\xC3\x1B\x03\x02\x02\x02\xC4\xC5\x07\x10\x02\x02\xC5\xC6" +
		"\x07 \x02\x02\xC6\xC7\x07!\x02\x02\xC7\x1D\x03\x02\x02\x02\xC8\xC9\x07" +
		"\x14\x02\x02\xC9\xCA\x07 \x02\x02\xCA\xCC\x07 \x02\x02\xCB\xCD\x05(\x15" +
		"\x02\xCC\xCB\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCE\x03\x02\x02" +
		"\x02\xCE\xCF\x07!\x02\x02\xCF\xD0\x07$\x02\x02\xD0\xD4\x07\x1E\x02\x02" +
		"\xD1\xD3\x05$\x13\x02\xD2\xD1\x03\x02\x02\x02\xD3\xD6\x03\x02\x02\x02" +
		"\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD7\x03\x02\x02\x02" +
		"\xD6\xD4\x03\x02\x02\x02\xD7\xD8\x07\x1F\x02\x02\xD8\xD9\x07!\x02\x02" +
		"\xD9\x1F\x03\x02\x02\x02\xDA\xDB\x07\x11\x02\x02\xDB\xDC\x07 \x02\x02" +
		"\xDC\xE3\x07\x1B\x02\x02\xDD\xDE\x07%\x02\x02\xDE\xE1\x07\x1B\x02\x02" +
		"\xDF\xE0\x07%\x02\x02\xE0\xE2\x07\x1B\x02\x02\xE1\xDF\x03\x02\x02\x02" +
		"\xE1\xE2\x03\x02\x02\x02\xE2\xE4\x03\x02\x02\x02\xE3\xDD\x03\x02\x02\x02" +
		"\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x07!\x02\x02" +
		"\xE6!\x03\x02\x02\x02\xE7\xE8\x07\x12\x02\x02\xE8\xE9\x07 \x02\x02\xE9" +
		"\xEA\x07 \x02\x02\xEA\xEB\x07!\x02\x02\xEB\xEC\x07$\x02\x02\xEC\xEE\x07" +
		"\x1E\x02\x02\xED\xEF\x05\x06\x04\x02\xEE\xED\x03\x02\x02\x02\xEF\xF0\x03" +
		"\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF2\x03" +
		"\x02\x02\x02\xF2\xF3\x07\x1F\x02\x02\xF3\xF4\x07!\x02\x02\xF4#\x03\x02" +
		"\x02\x02\xF5\xF6\x07\x15\x02\x02\xF6\xF7\x07 \x02\x02\xF7\xF9\x05(\x15" +
		"\x02\xF8\xFA\x05*\x16\x02\xF9\xF8\x03\x02\x02\x02\xF9\xFA\x03\x02\x02" +
		"\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\t\x02\x02\x02\xFC\xFD\x07!\x02\x02" +
		"\xFD\xFE\x07\'\x02\x02\xFE\xFF\x07\x16\x02\x02\xFF\u0100\x07\'\x02\x02" +
		"\u0100\u0101\x05&\x14\x02\u0101%\x03\x02\x02\x02\u0102\u0103\x07\x17\x02" +
		"\x02\u0103\u0104\x07 \x02\x02\u0104\u0105\t\x03\x02\x02\u0105\u0106\x07" +
		"!\x02\x02\u0106\'\x03\x02\x02\x02\u0107\u0108\x07+\x02\x02\u0108\u0109" +
		"\x07*\x02\x02\u0109)\x03\x02\x02\x02\u010A\u010B\x07\"\x02\x02\u010B\u010C" +
		"\x07\x1C\x02\x02\u010C\u010D\x07#\x02\x02\u010D+\x03\x02\x02\x02\u010E" +
		"\u010F\x07.\x02\x02\u010F\u0110\x07 \x02\x02\u0110\u0111\x07\x1B\x02\x02" +
		"\u0111\u0112\x07!\x02\x02\u0112-\x03\x02\x02\x02\u0113\u0114\x07\x07\x02" +
		"\x02\u0114\u0115\x07 \x02\x02\u0115\u0116\x07*\x02\x02\u0116\u0117\x07" +
		"!\x02\x02\u0117\u011D\x07\x1E\x02\x02\u0118\u0119\x07*\x02\x02\u0119\u011A" +
		"\x07\'\x02\x02\u011A\u011C\x050\x19\x02\u011B\u0118\x03\x02\x02\x02\u011C" +
		"\u011F\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02" +
		"\x02\x02\u011E\u0120\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120" +
		"\u0121\x07\x1F\x02\x02\u0121/\x03\x02\x02\x02\u0122\u0123\x07\b\x02\x02" +
		"\u0123\u0124\x07 \x02\x02\u0124\u0125\x07\x1B\x02\x02\u0125\u0126\x07" +
		"%\x02\x02\u0126\u0127\x07 \x02\x02\u0127\u0128\x07*\x02\x02\u0128\u0129" +
		"\x07!\x02\x02\u0129\u012A\x07$\x02\x02\u012A\u012E\x07\x1E\x02\x02\u012B" +
		"\u012D\x052\x1A\x02\u012C\u012B\x03\x02\x02\x02\u012D\u0130\x03\x02\x02" +
		"\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0131" +
		"\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0131\u0132\x07\x1F\x02\x02" +
		"\u0132\u0133\x07!\x02\x02\u01331\x03\x02\x02\x02\u0134\u0135\x07/\x02" +
		"\x02\u0135\u0136\x07*\x02\x02\u0136\u0137\x07&\x02\x02\u0137\u0138\x07" +
		"\x1B\x02\x02\u01383\x03\x02\x02\x02\x19?AHTboz\x88\x92\x99\xA0\xA8\xAB" +
		"\xAF\xBC\xCC\xD4\xE1\xE3\xF0\xF9\u011D\u012E";
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
	public tagPrint(): TagPrintContext[];
	public tagPrint(i: number): TagPrintContext;
	public tagPrint(i?: number): TagPrintContext | TagPrintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagPrintContext);
		} else {
			return this.getRuleContext(i, TagPrintContext);
		}
	}
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
	public tagThen(): TagThenContext | undefined {
		return this.tryGetRuleContext(0, TagThenContext);
	}
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
	public tagThen(): TagThenContext | undefined {
		return this.tryGetRuleContext(0, TagThenContext);
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
	public NUMBER(): TerminalNode { return this.getToken(ParserGrammarCypress.NUMBER, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public tagThen(): TagThenContext | undefined {
		return this.tryGetRuleContext(0, TagThenContext);
	}
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
	public tagThen(): TagThenContext | undefined {
		return this.tryGetRuleContext(0, TagThenContext);
	}
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
	public PUNTO(): TerminalNode { return this.getToken(ParserGrammarCypress.PUNTO, 0); }
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
	public TO(): TerminalNode { return this.getToken(ParserGrammarCypress.TO, 0); }
	public LENGTH(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.LENGTH, 0); }
	public INNERTEXT(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.INNERTEXT, 0); }
	public tagParam(): TagParamContext | undefined {
		return this.tryGetRuleContext(0, TagParamContext);
	}
	public tagEqual(): TagEqualContext | undefined {
		return this.tryGetRuleContext(0, TagEqualContext);
	}
	public tagIndex(): TagIndexContext | undefined {
		return this.tryGetRuleContext(0, TagIndexContext);
	}
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
	public PESO(): TerminalNode { return this.getToken(ParserGrammarCypress.PESO, 0); }
	public PARAMETER(): TerminalNode { return this.getToken(ParserGrammarCypress.PARAMETER, 0); }
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


export class TagPrintContext extends ParserRuleContext {
	public CONSOLE(): TerminalNode { return this.getToken(ParserGrammarCypress.CONSOLE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagPrint; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagPrint) {
			listener.enterTagPrint(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagPrint) {
			listener.exitTagPrint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagPrint) {
			return visitor.visitTagPrint(this);
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
	public tagConstant(): TagConstantContext[];
	public tagConstant(i: number): TagConstantContext;
	public tagConstant(i?: number): TagConstantContext | TagConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagConstantContext);
		} else {
			return this.getRuleContext(i, TagConstantContext);
		}
	}
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


export class TagConstantContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(ParserGrammarCypress.CONST, 0); }
	public PARAMETER(): TerminalNode { return this.getToken(ParserGrammarCypress.PARAMETER, 0); }
	public IGUAL(): TerminalNode { return this.getToken(ParserGrammarCypress.IGUAL, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagConstant; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagConstant) {
			listener.enterTagConstant(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagConstant) {
			listener.exitTagConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagConstant) {
			return visitor.visitTagConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


