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
	public static readonly CY = 5;
	public static readonly VISIT = 6;
	public static readonly WAIT = 7;
	public static readonly GET = 8;
	public static readonly URL = 9;
	public static readonly SHOULD = 10;
	public static readonly WITHIN = 11;
	public static readonly THEN = 12;
	public static readonly EXPECT = 13;
	public static readonly TO = 14;
	public static readonly EQUAL = 15;
	public static readonly CLICK = 16;
	public static readonly TYPE = 17;
	public static readonly EXIST = 18;
	public static readonly STRING = 19;
	public static readonly NUMBER = 20;
	public static readonly WS = 21;
	public static readonly OPEN_KEY = 22;
	public static readonly CLOSE_KEY = 23;
	public static readonly ENTONCES = 24;
	public static readonly COMMA = 25;
	public static readonly PUNTO = 26;
	public static readonly COMMENT1 = 27;
	public static readonly COMMENT2 = 28;
	public static readonly PARAMETER = 29;
	public static readonly PESO = 30;
	public static readonly INNERTEXT = 31;
	public static readonly LENGTH = 32;
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
	public static readonly RULE_tagThen = 11;
	public static readonly RULE_tagShould = 12;
	public static readonly RULE_tagWithin = 13;
	public static readonly RULE_expressionExpect = 14;
	public static readonly RULE_tagEqual = 15;
	public static readonly RULE_tagParam = 16;
	public static readonly RULE_tagIndex = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"testBlock", "tagIt", "tagCy", "tagGet", "tagBeforeEach", "tagAfterEach", 
		"tagClick", "tagType", "tagWait", "tagVisit", "tagUrl", "tagThen", "tagShould", 
		"tagWithin", "expressionExpect", "tagEqual", "tagParam", "tagIndex",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'describe'", "'it'", "'beforeEach'", "'afterEach'", "'cy'", 
		"'visit'", "'wait'", "'get'", "'url'", "'should'", "'within'", "'then'", 
		"'expect'", "'to'", "'equal'", "'click'", "'type'", "'exist'", undefined, 
		undefined, undefined, undefined, undefined, "'=>'", "','", "'.'", undefined, 
		undefined, undefined, "'$'", "'innerText'", "'length'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DESCRIBE", "IT", "BEFORE_EACH", "AFTER_EACH", "CY", "VISIT", 
		"WAIT", "GET", "URL", "SHOULD", "WITHIN", "THEN", "EXPECT", "TO", "EQUAL", 
		"CLICK", "TYPE", "EXIST", "STRING", "NUMBER", "WS", "OPEN_KEY", "CLOSE_KEY", 
		"ENTONCES", "COMMA", "PUNTO", "COMMENT1", "COMMENT2", "PARAMETER", "PESO", 
		"INNERTEXT", "LENGTH",
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
			this.state = 36;
			this.match(ParserGrammarCypress.DESCRIBE);
			this.state = 37;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 38;
			this.match(ParserGrammarCypress.STRING);
			this.state = 39;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 40;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 41;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 42;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 43;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 47;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.IT:
					{
					this.state = 44;
					this.tagIt();
					}
					break;
				case ParserGrammarCypress.BEFORE_EACH:
					{
					this.state = 45;
					this.tagBeforeEach();
					}
					break;
				case ParserGrammarCypress.AFTER_EACH:
					{
					this.state = 46;
					this.tagAfterEach();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ParserGrammarCypress.IT) | (1 << ParserGrammarCypress.BEFORE_EACH) | (1 << ParserGrammarCypress.AFTER_EACH))) !== 0));
			this.state = 51;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 52;
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
	public tagIt(): TagItContext {
		let _localctx: TagItContext = new TagItContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ParserGrammarCypress.RULE_tagIt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.match(ParserGrammarCypress.IT);
			this.state = 55;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 56;
			this.match(ParserGrammarCypress.STRING);
			this.state = 57;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 58;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 59;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 60;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 61;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 62;
				this.tagCy();
				}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ParserGrammarCypress.CY);
			this.state = 67;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 68;
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
	public tagCy(): TagCyContext {
		let _localctx: TagCyContext = new TagCyContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ParserGrammarCypress.RULE_tagCy);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(ParserGrammarCypress.CY);
			this.state = 71;
			this.match(ParserGrammarCypress.PUNTO);
			this.state = 76;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParserGrammarCypress.GET:
				{
				this.state = 72;
				this.tagGet();
				}
				break;
			case ParserGrammarCypress.WAIT:
				{
				this.state = 73;
				this.tagWait();
				}
				break;
			case ParserGrammarCypress.VISIT:
				{
				this.state = 74;
				this.tagVisit();
				}
				break;
			case ParserGrammarCypress.URL:
				{
				this.state = 75;
				this.tagUrl();
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
			this.state = 78;
			this.match(ParserGrammarCypress.GET);
			this.state = 79;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 80;
			this.match(ParserGrammarCypress.STRING);
			this.state = 81;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 82;
			this.match(ParserGrammarCypress.PUNTO);
			}
			this.state = 89;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParserGrammarCypress.CLICK:
				{
				this.state = 84;
				this.tagClick();
				}
				break;
			case ParserGrammarCypress.TYPE:
				{
				this.state = 85;
				this.tagType();
				}
				break;
			case ParserGrammarCypress.THEN:
				{
				this.state = 86;
				this.tagThen();
				}
				break;
			case ParserGrammarCypress.SHOULD:
				{
				this.state = 87;
				this.tagShould();
				}
				break;
			case ParserGrammarCypress.WITHIN:
				{
				this.state = 88;
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
			this.state = 91;
			this.match(ParserGrammarCypress.BEFORE_EACH);
			this.state = 92;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 93;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 94;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 95;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 96;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 97;
				this.tagCy();
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ParserGrammarCypress.CY);
			this.state = 102;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 103;
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
	public tagAfterEach(): TagAfterEachContext {
		let _localctx: TagAfterEachContext = new TagAfterEachContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ParserGrammarCypress.RULE_tagAfterEach);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.match(ParserGrammarCypress.AFTER_EACH);
			this.state = 106;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 107;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 108;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 109;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 110;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 111;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 112;
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
	public tagClick(): TagClickContext {
		let _localctx: TagClickContext = new TagClickContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ParserGrammarCypress.RULE_tagClick);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(ParserGrammarCypress.CLICK);
			this.state = 115;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 116;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.THEN) {
				{
				this.state = 117;
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
			this.state = 120;
			this.match(ParserGrammarCypress.TYPE);
			this.state = 121;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 122;
			this.match(ParserGrammarCypress.STRING);
			this.state = 123;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.THEN) {
				{
				this.state = 124;
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
			this.state = 127;
			this.match(ParserGrammarCypress.WAIT);
			this.state = 128;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 129;
			this.match(ParserGrammarCypress.NUMBER);
			this.state = 130;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.THEN) {
				{
				this.state = 131;
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
			this.state = 134;
			this.match(ParserGrammarCypress.VISIT);
			this.state = 135;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 136;
			this.match(ParserGrammarCypress.STRING);
			this.state = 137;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.THEN) {
				{
				this.state = 138;
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
			this.state = 141;
			this.match(ParserGrammarCypress.URL);
			this.state = 142;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 143;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 144;
			this.match(ParserGrammarCypress.PUNTO);
			{
			this.state = 145;
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
	public tagThen(): TagThenContext {
		let _localctx: TagThenContext = new TagThenContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ParserGrammarCypress.RULE_tagThen);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(ParserGrammarCypress.THEN);
			this.state = 148;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 149;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PESO) {
				{
				this.state = 150;
				this.tagParam();
				}
			}

			this.state = 153;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 154;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 155;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParserGrammarCypress.EXPECT) {
				{
				{
				this.state = 156;
				this.expressionExpect();
				}
				}
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 162;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 163;
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
	public tagShould(): TagShouldContext {
		let _localctx: TagShouldContext = new TagShouldContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ParserGrammarCypress.RULE_tagShould);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.match(ParserGrammarCypress.SHOULD);
			this.state = 166;
			this.match(ParserGrammarCypress.OPEN_KEY);
			{
			this.state = 167;
			this.match(ParserGrammarCypress.STRING);
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.COMMA) {
				{
				this.state = 168;
				this.match(ParserGrammarCypress.COMMA);
				this.state = 169;
				this.match(ParserGrammarCypress.STRING);
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParserGrammarCypress.COMMA) {
					{
					this.state = 170;
					this.match(ParserGrammarCypress.COMMA);
					this.state = 171;
					this.match(ParserGrammarCypress.STRING);
					}
				}

				}
			}

			}
			this.state = 176;
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
	public tagWithin(): TagWithinContext {
		let _localctx: TagWithinContext = new TagWithinContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ParserGrammarCypress.RULE_tagWithin);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(ParserGrammarCypress.WITHIN);
			this.state = 179;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 180;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 181;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 182;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 183;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 184;
				this.tagCy();
				}
				}
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ParserGrammarCypress.CY);
			this.state = 189;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 190;
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
	public expressionExpect(): ExpressionExpectContext {
		let _localctx: ExpressionExpectContext = new ExpressionExpectContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ParserGrammarCypress.RULE_expressionExpect);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(ParserGrammarCypress.EXPECT);
			this.state = 193;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 194;
			this.tagParam();
			this.state = 195;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 196;
			this.match(ParserGrammarCypress.PUNTO);
			this.state = 197;
			this.match(ParserGrammarCypress.TO);
			this.state = 198;
			this.match(ParserGrammarCypress.PUNTO);
			this.state = 201;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParserGrammarCypress.EQUAL:
				{
				this.state = 199;
				this.tagEqual();
				}
				break;
			case ParserGrammarCypress.EXIST:
				{
				this.state = 200;
				this.match(ParserGrammarCypress.EXIST);
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
		this.enterRule(_localctx, 30, ParserGrammarCypress.RULE_tagEqual);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.match(ParserGrammarCypress.EQUAL);
			this.state = 204;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 205;
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
			this.state = 206;
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
	public tagParam(): TagParamContext {
		let _localctx: TagParamContext = new TagParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ParserGrammarCypress.RULE_tagParam);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(ParserGrammarCypress.PESO);
			this.state = 209;
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
		this.enterRule(_localctx, 34, ParserGrammarCypress.RULE_tagIndex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 212;
			this.match(ParserGrammarCypress.NUMBER);
			this.state = 213;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\"\xDA\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x06\x022\n\x02\r\x02\x0E\x023\x03\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x06\x03B\n\x03\r\x03\x0E\x03C\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04O\n\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05\\\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x06\x06e\n\x06\r\x06\x0E\x06f\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x05\by\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x80\n\t" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x87\n\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x05\v\x8E\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r" +
		"\x03\r\x05\r\x9A\n\r\x03\r\x03\r\x03\r\x03\r\x07\r\xA0\n\r\f\r\x0E\r\xA3" +
		"\v\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\xAF\n\x0E\x05\x0E\xB1\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0F\xBC\n\x0F\r\x0F\x0E" +
		"\x0F\xBD\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xCC\n\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x02\x02\x02\x14\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02\x02\x03\x03\x02\x15\x16\x02\xDD\x02&\x03\x02\x02\x02" +
		"\x048\x03\x02\x02\x02\x06H\x03\x02\x02\x02\bP\x03\x02\x02\x02\n]\x03\x02" +
		"\x02\x02\fk\x03\x02\x02\x02\x0Et\x03\x02\x02\x02\x10z\x03\x02\x02\x02" +
		"\x12\x81\x03\x02\x02\x02\x14\x88\x03\x02\x02\x02\x16\x8F\x03\x02\x02\x02" +
		"\x18\x95\x03\x02\x02\x02\x1A\xA7\x03\x02\x02\x02\x1C\xB4\x03\x02\x02\x02" +
		"\x1E\xC2\x03\x02\x02\x02 \xCD\x03\x02\x02\x02\"\xD2\x03\x02\x02\x02$\xD5" +
		"\x03\x02\x02\x02&\'\x07\x03\x02\x02\'(\x07\x18\x02\x02()\x07\x15\x02\x02" +
		")*\x07\x1B\x02\x02*+\x07\x18\x02\x02+,\x07\x19\x02\x02,-\x07\x1A\x02\x02" +
		"-1\x07\x18\x02\x02.2\x05\x04\x03\x02/2\x05\n\x06\x0202\x05\f\x07\x021" +
		".\x03\x02\x02\x021/\x03\x02\x02\x0210\x03\x02\x02\x0223\x03\x02\x02\x02" +
		"31\x03\x02\x02\x0234\x03\x02\x02\x0245\x03\x02\x02\x0256\x07\x19\x02\x02" +
		"67\x07\x19\x02\x027\x03\x03\x02\x02\x0289\x07\x04\x02\x029:\x07\x18\x02" +
		"\x02:;\x07\x15\x02\x02;<\x07\x1B\x02\x02<=\x07\x18\x02\x02=>\x07\x19\x02" +
		"\x02>?\x07\x1A\x02\x02?A\x07\x18\x02\x02@B\x05\x06\x04\x02A@\x03\x02\x02" +
		"\x02BC\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02DE\x03\x02\x02" +
		"\x02EF\x07\x19\x02\x02FG\x07\x19\x02\x02G\x05\x03\x02\x02\x02HI\x07\x07" +
		"\x02\x02IN\x07\x1C\x02\x02JO\x05\b\x05\x02KO\x05\x12\n\x02LO\x05\x14\v" +
		"\x02MO\x05\x16\f\x02NJ\x03\x02\x02\x02NK\x03\x02\x02\x02NL\x03\x02\x02" +
		"\x02NM\x03\x02\x02\x02O\x07\x03\x02\x02\x02PQ\x07\n\x02\x02QR\x07\x18" +
		"\x02\x02RS\x07\x15\x02\x02ST\x07\x19\x02\x02TU\x07\x1C\x02\x02U[\x03\x02" +
		"\x02\x02V\\\x05\x0E\b\x02W\\\x05\x10\t\x02X\\\x05\x18\r\x02Y\\\x05\x1A" +
		"\x0E\x02Z\\\x05\x1C\x0F\x02[V\x03\x02\x02\x02[W\x03\x02\x02\x02[X\x03" +
		"\x02\x02\x02[Y\x03\x02\x02\x02[Z\x03\x02\x02\x02\\\t\x03\x02\x02\x02]" +
		"^\x07\x05\x02\x02^_\x07\x18\x02\x02_`\x07\x18\x02\x02`a\x07\x19\x02\x02" +
		"ab\x07\x1A\x02\x02bd\x07\x18\x02\x02ce\x05\x06\x04\x02dc\x03\x02\x02\x02" +
		"ef\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02gh\x03\x02\x02\x02" +
		"hi\x07\x19\x02\x02ij\x07\x19\x02\x02j\v\x03\x02\x02\x02kl\x07\x06\x02" +
		"\x02lm\x07\x18\x02\x02mn\x07\x18\x02\x02no\x07\x19\x02\x02op\x07\x1A\x02" +
		"\x02pq\x07\x18\x02\x02qr\x07\x19\x02\x02rs\x07\x19\x02\x02s\r\x03\x02" +
		"\x02\x02tu\x07\x12\x02\x02uv\x07\x18\x02\x02vx\x07\x19\x02\x02wy\x05\x18" +
		"\r\x02xw\x03\x02\x02\x02xy\x03\x02\x02\x02y\x0F\x03\x02\x02\x02z{\x07" +
		"\x13\x02\x02{|\x07\x18\x02\x02|}\x07\x15\x02\x02}\x7F\x07\x19\x02\x02" +
		"~\x80\x05\x18\r\x02\x7F~\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x11" +
		"\x03\x02\x02\x02\x81\x82\x07\t\x02\x02\x82\x83\x07\x18\x02\x02\x83\x84" +
		"\x07\x16\x02\x02\x84\x86\x07\x19\x02\x02\x85\x87\x05\x18\r\x02\x86\x85" +
		"\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x13\x03\x02\x02\x02\x88\x89" +
		"\x07\b\x02\x02\x89\x8A\x07\x18\x02\x02\x8A\x8B\x07\x15\x02\x02\x8B\x8D" +
		"\x07\x19\x02\x02\x8C\x8E\x05\x18\r\x02\x8D\x8C\x03\x02\x02\x02\x8D\x8E" +
		"\x03\x02\x02\x02\x8E\x15\x03\x02\x02\x02\x8F\x90\x07\v\x02\x02\x90\x91" +
		"\x07\x18\x02\x02\x91\x92\x07\x19\x02\x02\x92\x93\x07\x1C\x02\x02\x93\x94" +
		"\x05\x1A\x0E\x02\x94\x17\x03\x02\x02\x02\x95\x96\x07\x0E\x02\x02\x96\x97" +
		"\x07\x18\x02\x02\x97\x99\x07\x18\x02\x02\x98\x9A\x05\"\x12\x02\x99\x98" +
		"\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C" +
		"\x07\x19\x02\x02\x9C\x9D\x07\x1A\x02\x02\x9D\xA1\x07\x18\x02\x02\x9E\xA0" +
		"\x05\x1E\x10\x02\x9F\x9E\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F" +
		"\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA4\x03\x02\x02\x02\xA3\xA1" +
		"\x03\x02\x02\x02\xA4\xA5\x07\x19\x02\x02\xA5\xA6\x07\x19\x02\x02\xA6\x19" +
		"\x03\x02\x02\x02\xA7\xA8\x07\f\x02\x02\xA8\xA9\x07\x18\x02\x02\xA9\xB0" +
		"\x07\x15\x02\x02\xAA\xAB\x07\x1B\x02\x02\xAB\xAE\x07\x15\x02\x02\xAC\xAD" +
		"\x07\x1B\x02\x02\xAD\xAF\x07\x15\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF" +
		"\x03\x02\x02\x02\xAF\xB1\x03\x02\x02\x02\xB0\xAA\x03\x02\x02\x02\xB0\xB1" +
		"\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x07\x19\x02\x02\xB3\x1B" +
		"\x03\x02\x02\x02\xB4\xB5\x07\r\x02\x02\xB5\xB6\x07\x18\x02\x02\xB6\xB7" +
		"\x07\x18\x02\x02\xB7\xB8\x07\x19\x02\x02\xB8\xB9\x07\x1A\x02\x02\xB9\xBB" +
		"\x07\x18\x02\x02\xBA\xBC\x05\x06\x04\x02\xBB\xBA\x03\x02\x02\x02\xBC\xBD" +
		"\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF" +
		"\x03\x02\x02\x02\xBF\xC0\x07\x19\x02\x02\xC0\xC1\x07\x19\x02\x02\xC1\x1D" +
		"\x03\x02\x02\x02\xC2\xC3\x07\x0F\x02\x02\xC3\xC4\x07\x18\x02\x02\xC4\xC5" +
		"\x05\"\x12\x02\xC5\xC6\x07\x19\x02\x02\xC6\xC7\x07\x1C\x02\x02\xC7\xC8" +
		"\x07\x10\x02\x02\xC8\xCB\x07\x1C\x02\x02\xC9\xCC\x05 \x11\x02\xCA\xCC" +
		"\x07\x14\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC\x1F" +
		"\x03\x02\x02\x02\xCD\xCE\x07\x11\x02\x02\xCE\xCF\x07\x18\x02\x02\xCF\xD0" +
		"\t\x02\x02\x02\xD0\xD1\x07\x19\x02\x02\xD1!\x03\x02\x02\x02\xD2\xD3\x07" +
		" \x02\x02\xD3\xD4\x07\x1F\x02\x02\xD4#\x03\x02\x02\x02\xD5\xD6\x07\x18" +
		"\x02\x02\xD6\xD7\x07\x16\x02\x02\xD7\xD8\x07\x19\x02\x02\xD8%\x03\x02" +
		"\x02\x02\x1213CN[fx\x7F\x86\x8D\x99\xA1\xAE\xB0\xBD\xCB";
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
	public OPEN_KEY(): TerminalNode[];
	public OPEN_KEY(i: number): TerminalNode;
	public OPEN_KEY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.OPEN_KEY);
		} else {
			return this.getToken(ParserGrammarCypress.OPEN_KEY, i);
		}
	}
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public COMMA(): TerminalNode { return this.getToken(ParserGrammarCypress.COMMA, 0); }
	public CLOSE_KEY(): TerminalNode[];
	public CLOSE_KEY(i: number): TerminalNode;
	public CLOSE_KEY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.CLOSE_KEY);
		} else {
			return this.getToken(ParserGrammarCypress.CLOSE_KEY, i);
		}
	}
	public ENTONCES(): TerminalNode { return this.getToken(ParserGrammarCypress.ENTONCES, 0); }
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
	public OPEN_KEY(): TerminalNode[];
	public OPEN_KEY(i: number): TerminalNode;
	public OPEN_KEY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.OPEN_KEY);
		} else {
			return this.getToken(ParserGrammarCypress.OPEN_KEY, i);
		}
	}
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public COMMA(): TerminalNode { return this.getToken(ParserGrammarCypress.COMMA, 0); }
	public CLOSE_KEY(): TerminalNode[];
	public CLOSE_KEY(i: number): TerminalNode;
	public CLOSE_KEY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.CLOSE_KEY);
		} else {
			return this.getToken(ParserGrammarCypress.CLOSE_KEY, i);
		}
	}
	public ENTONCES(): TerminalNode { return this.getToken(ParserGrammarCypress.ENTONCES, 0); }
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
	public OPEN_KEY(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_KEY(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.CLOSE_KEY, 0); }
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
	public OPEN_KEY(): TerminalNode[];
	public OPEN_KEY(i: number): TerminalNode;
	public OPEN_KEY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.OPEN_KEY);
		} else {
			return this.getToken(ParserGrammarCypress.OPEN_KEY, i);
		}
	}
	public CLOSE_KEY(): TerminalNode[];
	public CLOSE_KEY(i: number): TerminalNode;
	public CLOSE_KEY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.CLOSE_KEY);
		} else {
			return this.getToken(ParserGrammarCypress.CLOSE_KEY, i);
		}
	}
	public ENTONCES(): TerminalNode { return this.getToken(ParserGrammarCypress.ENTONCES, 0); }
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
	public OPEN_KEY(): TerminalNode[];
	public OPEN_KEY(i: number): TerminalNode;
	public OPEN_KEY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.OPEN_KEY);
		} else {
			return this.getToken(ParserGrammarCypress.OPEN_KEY, i);
		}
	}
	public CLOSE_KEY(): TerminalNode[];
	public CLOSE_KEY(i: number): TerminalNode;
	public CLOSE_KEY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.CLOSE_KEY);
		} else {
			return this.getToken(ParserGrammarCypress.CLOSE_KEY, i);
		}
	}
	public ENTONCES(): TerminalNode { return this.getToken(ParserGrammarCypress.ENTONCES, 0); }
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
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
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
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
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
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public NUMBER(): TerminalNode { return this.getToken(ParserGrammarCypress.NUMBER, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
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
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
	public tagThen(): TagThenContext | undefined {
		return this.tryGetRuleContext(0, TagThenContext);
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
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
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


export class TagThenContext extends ParserRuleContext {
	public THEN(): TerminalNode { return this.getToken(ParserGrammarCypress.THEN, 0); }
	public OPEN_KEY(): TerminalNode[];
	public OPEN_KEY(i: number): TerminalNode;
	public OPEN_KEY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.OPEN_KEY);
		} else {
			return this.getToken(ParserGrammarCypress.OPEN_KEY, i);
		}
	}
	public CLOSE_KEY(): TerminalNode[];
	public CLOSE_KEY(i: number): TerminalNode;
	public CLOSE_KEY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.CLOSE_KEY);
		} else {
			return this.getToken(ParserGrammarCypress.CLOSE_KEY, i);
		}
	}
	public ENTONCES(): TerminalNode { return this.getToken(ParserGrammarCypress.ENTONCES, 0); }
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
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
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
	public OPEN_KEY(): TerminalNode[];
	public OPEN_KEY(i: number): TerminalNode;
	public OPEN_KEY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.OPEN_KEY);
		} else {
			return this.getToken(ParserGrammarCypress.OPEN_KEY, i);
		}
	}
	public CLOSE_KEY(): TerminalNode[];
	public CLOSE_KEY(i: number): TerminalNode;
	public CLOSE_KEY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.CLOSE_KEY);
		} else {
			return this.getToken(ParserGrammarCypress.CLOSE_KEY, i);
		}
	}
	public ENTONCES(): TerminalNode { return this.getToken(ParserGrammarCypress.ENTONCES, 0); }
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
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public tagParam(): TagParamContext {
		return this.getRuleContext(0, TagParamContext);
	}
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
	public TO(): TerminalNode { return this.getToken(ParserGrammarCypress.TO, 0); }
	public tagEqual(): TagEqualContext | undefined {
		return this.tryGetRuleContext(0, TagEqualContext);
	}
	public EXIST(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.EXIST, 0); }
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
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
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
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public NUMBER(): TerminalNode { return this.getToken(ParserGrammarCypress.NUMBER, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
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


