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
	public static readonly TASK = 29;
	public static readonly SCREENSHOT = 30;
	public static readonly FIXTURE = 31;
	public static readonly CLICK_LINK = 32;
	public static readonly REQUEST = 33;
	public static readonly SUBMIT = 34;
	public static readonly GET_COOKIE = 35;
	public static readonly SHOULD = 36;
	public static readonly WITHIN = 37;
	public static readonly SKIPP = 38;
	public static readonly ATTACH_FILE = 39;
	public static readonly AND = 40;
	public static readonly WRAP = 41;
	public static readonly THEN = 42;
	public static readonly EXPECT = 43;
	public static readonly TO = 44;
	public static readonly TO_BE_A = 45;
	public static readonly NOT_TO_BE_A = 46;
	public static readonly EQ = 47;
	public static readonly EQUAL = 48;
	public static readonly CLICK = 49;
	public static readonly TYPE = 50;
	public static readonly EXIST = 51;
	public static readonly FIRST = 52;
	public static readonly DATE_STRING = 53;
	public static readonly NAMEN = 54;
	public static readonly STRING = 55;
	public static readonly NUMBER = 56;
	public static readonly WS = 57;
	public static readonly OPEN_KEY = 58;
	public static readonly CLOSE_KEY = 59;
	public static readonly OPEN_PARENTHESIS = 60;
	public static readonly CLOSE_PARENTHESIS = 61;
	public static readonly OPEN_BRACKET = 62;
	public static readonly CLOSE_BRACKET = 63;
	public static readonly ENTONCES = 64;
	public static readonly COMMA = 65;
	public static readonly IGUAL = 66;
	public static readonly PUNTO = 67;
	public static readonly COMMENT1 = 68;
	public static readonly COMMENT2 = 69;
	public static readonly PARAMETER = 70;
	public static readonly PESO = 71;
	public static readonly INNERTEXT = 72;
	public static readonly LENGTH = 73;
	public static readonly SELECTOR = 74;
	public static readonly WHICH = 75;
	public static readonly TARGET = 76;
	public static readonly VALUE = 77;
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
	public static readonly RULE_tagRequest = 14;
	public static readonly RULE_tagTask = 15;
	public static readonly RULE_tagGetCookie = 16;
	public static readonly RULE_tagSubmit = 17;
	public static readonly RULE_tagFixture = 18;
	public static readonly RULE_tagClickLink = 19;
	public static readonly RULE_tagWindow = 20;
	public static readonly RULE_tagSelector = 21;
	public static readonly RULE_tagName = 22;
	public static readonly RULE_tagSelect = 23;
	public static readonly RULE_tagScreenshot = 24;
	public static readonly RULE_tagAttachFile = 25;
	public static readonly RULE_tagPause = 26;
	public static readonly RULE_tagTittle = 27;
	public static readonly RULE_tagFunction = 28;
	public static readonly RULE_tagFind = 29;
	public static readonly RULE_tagStub = 30;
	public static readonly RULE_tagContains = 31;
	public static readonly RULE_tagInjectAxe = 32;
	public static readonly RULE_tagCheckA11y = 33;
	public static readonly RULE_tagCheck = 34;
	public static readonly RULE_tagIts = 35;
	public static readonly RULE_tagInvoke = 36;
	public static readonly RULE_tagWhich = 37;
	public static readonly RULE_tagTarget = 38;
	public static readonly RULE_tagValue = 39;
	public static readonly RULE_tagLocation = 40;
	public static readonly RULE_tagFirst = 41;
	public static readonly RULE_tagEq = 42;
	public static readonly RULE_tagThen = 43;
	public static readonly RULE_tagShould = 44;
	public static readonly RULE_tagWithin = 45;
	public static readonly RULE_tagAnd = 46;
	public static readonly RULE_tagDataString = 47;
	public static readonly RULE_tagWrap = 48;
	public static readonly RULE_expressionExpect = 49;
	public static readonly RULE_tagEqual = 50;
	public static readonly RULE_tagParam = 51;
	public static readonly RULE_tagIndex = 52;
	public static readonly RULE_tagAs = 53;
	public static readonly RULE_tagEventOnBeforeLoad = 54;
	public static readonly RULE_tagEventListener = 55;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"testBlock", "tagContext", "tagIt", "tagCy", "tagGet", "tagBeforeEach", 
		"tagAfterEach", "tagClick", "tagType", "tagWait", "tagVisit", "tagUrl", 
		"tagOn", "tagIntercept", "tagRequest", "tagTask", "tagGetCookie", "tagSubmit", 
		"tagFixture", "tagClickLink", "tagWindow", "tagSelector", "tagName", "tagSelect", 
		"tagScreenshot", "tagAttachFile", "tagPause", "tagTittle", "tagFunction", 
		"tagFind", "tagStub", "tagContains", "tagInjectAxe", "tagCheckA11y", "tagCheck", 
		"tagIts", "tagInvoke", "tagWhich", "tagTarget", "tagValue", "tagLocation", 
		"tagFirst", "tagEq", "tagThen", "tagShould", "tagWithin", "tagAnd", "tagDataString", 
		"tagWrap", "expressionExpect", "tagEqual", "tagParam", "tagIndex", "tagAs", 
		"tagEventOnBeforeLoad", "tagEventListener",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'describe'", "'it'", "'beforeEach'", "'afterEach'", "'onBeforeLoad'", 
		"'addEventListener'", "'context'", "'cy'", "'visit'", "'wait'", "'get'", 
		"'url'", "'on'", "'contains'", "'injectAxe'", "'checkA11y'", "'window'", 
		"'stub'", "'as'", "'invoke'", "'title'", "'find'", "'check'", "'location'", 
		"'pause'", "'select'", "'its'", "'intercept'", "'task'", "'screenshot'", 
		"'fixture'", "'clickLink'", "'request'", "'submit'", "'getCookie'", "'should'", 
		"'within'", "'.skip'", "'attachFile'", "'and'", "'wrap'", "'then'", "'expect'", 
		"'to'", "'to.be.a'", "'not.to.be.a'", "'eq'", "'equal'", "'click'", "'type'", 
		"'exist'", "'first'", "'dateString'", "'name:'", undefined, undefined, 
		undefined, "'{'", "'}'", "'('", "')'", "'['", "']'", "'=>'", "','", "'='", 
		"'.'", undefined, undefined, undefined, "'$'", "'.innerText'", "'.length'", 
		"'selector:'", "'which:'", "'target:'", "'value:'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DESCRIBE", "IT", "BEFORE_EACH", "AFTER_EACH", "ON_BEFORE_LOAD", 
		"ADD_EVENT_LISTENER", "CONTEXT", "CY", "VISIT", "WAIT", "GET", "URL", 
		"ON", "CONTAINS", "INJECT_AXE", "CHECKA11Y", "WINDOW", "STUB", "AS", "INVOKE", 
		"TITTLE", "FIND", "CHECK", "LOCATION", "PAUSE", "SELECT", "ITS", "INTERCEPT", 
		"TASK", "SCREENSHOT", "FIXTURE", "CLICK_LINK", "REQUEST", "SUBMIT", "GET_COOKIE", 
		"SHOULD", "WITHIN", "SKIPP", "ATTACH_FILE", "AND", "WRAP", "THEN", "EXPECT", 
		"TO", "TO_BE_A", "NOT_TO_BE_A", "EQ", "EQUAL", "CLICK", "TYPE", "EXIST", 
		"FIRST", "DATE_STRING", "NAMEN", "STRING", "NUMBER", "WS", "OPEN_KEY", 
		"CLOSE_KEY", "OPEN_PARENTHESIS", "CLOSE_PARENTHESIS", "OPEN_BRACKET", 
		"CLOSE_BRACKET", "ENTONCES", "COMMA", "IGUAL", "PUNTO", "COMMENT1", "COMMENT2", 
		"PARAMETER", "PESO", "INNERTEXT", "LENGTH", "SELECTOR", "WHICH", "TARGET", 
		"VALUE",
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
			this.state = 112;
			this.match(ParserGrammarCypress.DESCRIBE);
			this.state = 113;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 114;
			this.match(ParserGrammarCypress.STRING);
			this.state = 115;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 116;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 117;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 118;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 119;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ParserGrammarCypress.DESCRIBE) | (1 << ParserGrammarCypress.IT) | (1 << ParserGrammarCypress.BEFORE_EACH) | (1 << ParserGrammarCypress.AFTER_EACH) | (1 << ParserGrammarCypress.CONTEXT))) !== 0)) {
				{
				this.state = 125;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.IT:
					{
					this.state = 120;
					this.tagIt();
					}
					break;
				case ParserGrammarCypress.BEFORE_EACH:
					{
					this.state = 121;
					this.tagBeforeEach();
					}
					break;
				case ParserGrammarCypress.AFTER_EACH:
					{
					this.state = 122;
					this.tagAfterEach();
					}
					break;
				case ParserGrammarCypress.CONTEXT:
					{
					this.state = 123;
					this.tagContext();
					}
					break;
				case ParserGrammarCypress.DESCRIBE:
					{
					this.state = 124;
					this.testBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 130;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 131;
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
			this.state = 133;
			this.match(ParserGrammarCypress.CONTEXT);
			this.state = 134;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 135;
			this.match(ParserGrammarCypress.STRING);
			this.state = 136;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 137;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 138;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 139;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 140;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 143;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.IT:
					{
					this.state = 141;
					this.tagIt();
					}
					break;
				case ParserGrammarCypress.BEFORE_EACH:
					{
					this.state = 142;
					this.tagBeforeEach();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ParserGrammarCypress.IT || _la === ParserGrammarCypress.BEFORE_EACH);
			this.state = 147;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 148;
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
			this.state = 150;
			this.match(ParserGrammarCypress.IT);
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.SKIPP) {
				{
				this.state = 151;
				this.match(ParserGrammarCypress.SKIPP);
				}
			}

			this.state = 154;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 155;
			this.match(ParserGrammarCypress.STRING);
			this.state = 156;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 157;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 158;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 159;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 160;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParserGrammarCypress.CY || _la === ParserGrammarCypress.EXPECT) {
				{
				this.state = 163;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.CY:
					{
					this.state = 161;
					this.tagCy();
					}
					break;
				case ParserGrammarCypress.EXPECT:
					{
					this.state = 162;
					this.expressionExpect();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 168;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 169;
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
			this.state = 171;
			this.match(ParserGrammarCypress.CY);
			this.state = 172;
			this.match(ParserGrammarCypress.PUNTO);
			this.state = 194;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParserGrammarCypress.GET:
				{
				this.state = 173;
				this.tagGet();
				}
				break;
			case ParserGrammarCypress.WAIT:
				{
				this.state = 174;
				this.tagWait();
				}
				break;
			case ParserGrammarCypress.VISIT:
				{
				this.state = 175;
				this.tagVisit();
				}
				break;
			case ParserGrammarCypress.URL:
				{
				this.state = 176;
				this.tagUrl();
				}
				break;
			case ParserGrammarCypress.CONTAINS:
				{
				this.state = 177;
				this.tagContains();
				}
				break;
			case ParserGrammarCypress.INJECT_AXE:
				{
				this.state = 178;
				this.tagInjectAxe();
				}
				break;
			case ParserGrammarCypress.CHECKA11Y:
				{
				this.state = 179;
				this.tagCheckA11y();
				}
				break;
			case ParserGrammarCypress.ON:
				{
				this.state = 180;
				this.tagOn();
				}
				break;
			case ParserGrammarCypress.STUB:
				{
				this.state = 181;
				this.tagStub();
				}
				break;
			case ParserGrammarCypress.WINDOW:
				{
				this.state = 182;
				this.tagWindow();
				}
				break;
			case ParserGrammarCypress.TITTLE:
				{
				this.state = 183;
				this.tagTittle();
				}
				break;
			case ParserGrammarCypress.LOCATION:
				{
				this.state = 184;
				this.tagLocation();
				}
				break;
			case ParserGrammarCypress.PAUSE:
				{
				this.state = 185;
				this.tagPause();
				}
				break;
			case ParserGrammarCypress.INTERCEPT:
				{
				this.state = 186;
				this.tagIntercept();
				}
				break;
			case ParserGrammarCypress.WRAP:
				{
				this.state = 187;
				this.tagWrap();
				}
				break;
			case ParserGrammarCypress.TASK:
				{
				this.state = 188;
				this.tagTask();
				}
				break;
			case ParserGrammarCypress.SCREENSHOT:
				{
				this.state = 189;
				this.tagScreenshot();
				}
				break;
			case ParserGrammarCypress.FIXTURE:
				{
				this.state = 190;
				this.tagFixture();
				}
				break;
			case ParserGrammarCypress.CLICK_LINK:
				{
				this.state = 191;
				this.tagClickLink();
				}
				break;
			case ParserGrammarCypress.REQUEST:
				{
				this.state = 192;
				this.tagRequest();
				}
				break;
			case ParserGrammarCypress.GET_COOKIE:
				{
				this.state = 193;
				this.tagGetCookie();
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
			this.state = 196;
			this.match(ParserGrammarCypress.GET);
			this.state = 197;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 198;
			this.match(ParserGrammarCypress.STRING);
			this.state = 199;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			}
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 201;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 214;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.CLICK:
					{
					this.state = 202;
					this.tagClick();
					}
					break;
				case ParserGrammarCypress.TYPE:
					{
					this.state = 203;
					this.tagType();
					}
					break;
				case ParserGrammarCypress.THEN:
					{
					this.state = 204;
					this.tagThen();
					}
					break;
				case ParserGrammarCypress.SHOULD:
					{
					this.state = 205;
					this.tagShould();
					}
					break;
				case ParserGrammarCypress.WITHIN:
					{
					this.state = 206;
					this.tagWithin();
					}
					break;
				case ParserGrammarCypress.EQ:
					{
					this.state = 207;
					this.tagEq();
					}
					break;
				case ParserGrammarCypress.FIND:
					{
					this.state = 208;
					this.tagFind();
					}
					break;
				case ParserGrammarCypress.CONTAINS:
					{
					this.state = 209;
					this.tagContains();
					}
					break;
				case ParserGrammarCypress.PAUSE:
					{
					this.state = 210;
					this.tagPause();
					}
					break;
				case ParserGrammarCypress.SELECT:
					{
					this.state = 211;
					this.tagSelect();
					}
					break;
				case ParserGrammarCypress.ATTACH_FILE:
					{
					this.state = 212;
					this.tagAttachFile();
					}
					break;
				case ParserGrammarCypress.SUBMIT:
					{
					this.state = 213;
					this.tagSubmit();
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
			this.state = 218;
			this.match(ParserGrammarCypress.BEFORE_EACH);
			this.state = 219;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 220;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 221;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 222;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 223;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 224;
				this.tagCy();
				}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ParserGrammarCypress.CY);
			this.state = 229;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 230;
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
			this.state = 232;
			this.match(ParserGrammarCypress.AFTER_EACH);
			this.state = 233;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 234;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 235;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 236;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 237;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 238;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 239;
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
			this.state = 241;
			this.match(ParserGrammarCypress.CLICK);
			this.state = 242;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 243;
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
			this.state = 245;
			this.match(ParserGrammarCypress.TYPE);
			this.state = 246;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 247;
			this.match(ParserGrammarCypress.STRING);
			this.state = 248;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 253;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 249;
					this.match(ParserGrammarCypress.PUNTO);
					this.state = 250;
					this.tagType();
					}
					}
				}
				this.state = 255;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
			this.state = 256;
			this.match(ParserGrammarCypress.WAIT);
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
	public tagVisit(): TagVisitContext {
		let _localctx: TagVisitContext = new TagVisitContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ParserGrammarCypress.RULE_tagVisit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this.match(ParserGrammarCypress.VISIT);
			this.state = 262;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 263;
			this.match(ParserGrammarCypress.STRING);
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.COMMA) {
				{
				this.state = 264;
				this.match(ParserGrammarCypress.COMMA);
				this.state = 265;
				this.match(ParserGrammarCypress.OPEN_KEY);
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParserGrammarCypress.ON_BEFORE_LOAD) {
					{
					this.state = 266;
					this.tagEventOnBeforeLoad();
					}
				}

				this.state = 269;
				this.match(ParserGrammarCypress.CLOSE_KEY);
				}
			}

			this.state = 272;
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
			this.state = 274;
			this.match(ParserGrammarCypress.URL);
			this.state = 275;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 276;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 277;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 278;
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
			this.state = 281;
			this.match(ParserGrammarCypress.ON);
			this.state = 282;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 283;
			this.match(ParserGrammarCypress.STRING);
			this.state = 284;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 287;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParserGrammarCypress.OPEN_PARENTHESIS:
				{
				this.state = 285;
				this.tagFunction();
				}
				break;
			case ParserGrammarCypress.CY:
				{
				this.state = 286;
				this.tagCy();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 289;
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
			this.state = 291;
			this.match(ParserGrammarCypress.INTERCEPT);
			this.state = 292;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			{
			this.state = 293;
			this.match(ParserGrammarCypress.STRING);
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.COMMA) {
				{
				this.state = 294;
				this.match(ParserGrammarCypress.COMMA);
				this.state = 295;
				this.match(ParserGrammarCypress.STRING);
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParserGrammarCypress.COMMA) {
					{
					this.state = 296;
					this.match(ParserGrammarCypress.COMMA);
					this.state = 297;
					this.match(ParserGrammarCypress.OPEN_KEY);
					this.state = 298;
					this.match(ParserGrammarCypress.CLOSE_KEY);
					}
				}

				}
			}

			}
			this.state = 303;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 304;
				this.match(ParserGrammarCypress.PUNTO);
				{
				this.state = 305;
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
	public tagRequest(): TagRequestContext {
		let _localctx: TagRequestContext = new TagRequestContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ParserGrammarCypress.RULE_tagRequest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this.match(ParserGrammarCypress.REQUEST);
			this.state = 309;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 310;
			this.match(ParserGrammarCypress.STRING);
			this.state = 311;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 312;
				this.match(ParserGrammarCypress.PUNTO);
				{
				this.state = 313;
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
	public tagTask(): TagTaskContext {
		let _localctx: TagTaskContext = new TagTaskContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ParserGrammarCypress.RULE_tagTask);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.match(ParserGrammarCypress.TASK);
			this.state = 317;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			{
			this.state = 318;
			this.match(ParserGrammarCypress.STRING);
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.COMMA) {
				{
				this.state = 319;
				this.match(ParserGrammarCypress.COMMA);
				this.state = 322;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.STRING:
				case ParserGrammarCypress.NUMBER:
					{
					this.state = 320;
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
					break;
				case ParserGrammarCypress.OPEN_KEY:
					{
					this.state = 321;
					this.tagSelector();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParserGrammarCypress.COMMA) {
					{
					this.state = 324;
					this.match(ParserGrammarCypress.COMMA);
					this.state = 325;
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
			this.state = 330;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 331;
				this.match(ParserGrammarCypress.PUNTO);
				{
				this.state = 332;
				this.tagVisit();
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
	public tagGetCookie(): TagGetCookieContext {
		let _localctx: TagGetCookieContext = new TagGetCookieContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ParserGrammarCypress.RULE_tagGetCookie);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.match(ParserGrammarCypress.GET_COOKIE);
			this.state = 336;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 337;
			this.match(ParserGrammarCypress.STRING);
			this.state = 338;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 339;
				this.match(ParserGrammarCypress.PUNTO);
				{
				this.state = 340;
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
	public tagSubmit(): TagSubmitContext {
		let _localctx: TagSubmitContext = new TagSubmitContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ParserGrammarCypress.RULE_tagSubmit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.match(ParserGrammarCypress.SUBMIT);
			this.state = 344;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 345;
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
	public tagFixture(): TagFixtureContext {
		let _localctx: TagFixtureContext = new TagFixtureContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ParserGrammarCypress.RULE_tagFixture);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.match(ParserGrammarCypress.FIXTURE);
			this.state = 348;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 349;
			this.match(ParserGrammarCypress.STRING);
			this.state = 350;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 351;
				this.match(ParserGrammarCypress.PUNTO);
				{
				this.state = 352;
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
	public tagClickLink(): TagClickLinkContext {
		let _localctx: TagClickLinkContext = new TagClickLinkContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ParserGrammarCypress.RULE_tagClickLink);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.match(ParserGrammarCypress.CLICK_LINK);
			this.state = 356;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 357;
			this.match(ParserGrammarCypress.STRING);
			this.state = 358;
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
	public tagWindow(): TagWindowContext {
		let _localctx: TagWindowContext = new TagWindowContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ParserGrammarCypress.RULE_tagWindow);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.match(ParserGrammarCypress.WINDOW);
			this.state = 361;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 362;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 369;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 363;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 367;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.THEN:
					{
					this.state = 364;
					this.tagThen();
					}
					break;
				case ParserGrammarCypress.ITS:
					{
					this.state = 365;
					this.tagIts();
					}
					break;
				case ParserGrammarCypress.SHOULD:
					{
					this.state = 366;
					this.tagShould();
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
	public tagSelector(): TagSelectorContext {
		let _localctx: TagSelectorContext = new TagSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ParserGrammarCypress.RULE_tagSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 372;
			this.match(ParserGrammarCypress.SELECTOR);
			this.state = 373;
			this.match(ParserGrammarCypress.STRING);
			this.state = 374;
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
	public tagName(): TagNameContext {
		let _localctx: TagNameContext = new TagNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ParserGrammarCypress.RULE_tagName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 377;
			this.match(ParserGrammarCypress.NAMEN);
			this.state = 378;
			this.match(ParserGrammarCypress.STRING);
			this.state = 379;
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
	public tagSelect(): TagSelectContext {
		let _localctx: TagSelectContext = new TagSelectContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ParserGrammarCypress.RULE_tagSelect);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.match(ParserGrammarCypress.SELECT);
			this.state = 382;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 383;
			this.match(ParserGrammarCypress.STRING);
			this.state = 384;
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
	public tagScreenshot(): TagScreenshotContext {
		let _localctx: TagScreenshotContext = new TagScreenshotContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ParserGrammarCypress.RULE_tagScreenshot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this.match(ParserGrammarCypress.SCREENSHOT);
			this.state = 387;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 388;
			this.match(ParserGrammarCypress.STRING);
			this.state = 389;
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
	public tagAttachFile(): TagAttachFileContext {
		let _localctx: TagAttachFileContext = new TagAttachFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ParserGrammarCypress.RULE_tagAttachFile);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 391;
			this.match(ParserGrammarCypress.ATTACH_FILE);
			this.state = 392;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 393;
			this.match(ParserGrammarCypress.STRING);
			this.state = 394;
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
		this.enterRule(_localctx, 52, ParserGrammarCypress.RULE_tagPause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(ParserGrammarCypress.PAUSE);
			this.state = 397;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 398;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 399;
				this.match(ParserGrammarCypress.PUNTO);
				{
				this.state = 400;
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
		this.enterRule(_localctx, 54, ParserGrammarCypress.RULE_tagTittle);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this.match(ParserGrammarCypress.TITTLE);
			this.state = 404;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 405;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 406;
				this.match(ParserGrammarCypress.PUNTO);
				{
				this.state = 407;
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
		this.enterRule(_localctx, 56, ParserGrammarCypress.RULE_tagFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 411;
			this.match(ParserGrammarCypress.PARAMETER);
			this.state = 412;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 413;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 414;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParserGrammarCypress.EXPECT) {
				{
				{
				this.state = 415;
				this.expressionExpect();
				}
				}
				this.state = 420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 421;
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
		this.enterRule(_localctx, 58, ParserGrammarCypress.RULE_tagFind);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
			this.match(ParserGrammarCypress.FIND);
			this.state = 424;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 425;
			this.match(ParserGrammarCypress.STRING);
			this.state = 426;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 433;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 427;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 431;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.SHOULD:
					{
					this.state = 428;
					this.tagShould();
					}
					break;
				case ParserGrammarCypress.CHECK:
					{
					this.state = 429;
					this.tagCheck();
					}
					break;
				case ParserGrammarCypress.EQ:
					{
					this.state = 430;
					this.tagEq();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
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
		this.enterRule(_localctx, 60, ParserGrammarCypress.RULE_tagStub);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.match(ParserGrammarCypress.STUB);
			this.state = 436;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (ParserGrammarCypress.STRING - 55)) | (1 << (ParserGrammarCypress.PARAMETER - 55)) | (1 << (ParserGrammarCypress.PESO - 55)))) !== 0)) {
				{
				this.state = 437;
				this.tagParam();
				this.state = 438;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParserGrammarCypress.PARAMETER) {
					{
					this.state = 439;
					this.match(ParserGrammarCypress.PARAMETER);
					}
				}

				this.state = 444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParserGrammarCypress.COMMA) {
					{
					this.state = 442;
					this.match(ParserGrammarCypress.COMMA);
					this.state = 443;
					this.match(ParserGrammarCypress.STRING);
					}
				}

				}
			}

			this.state = 448;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 449;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 450;
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
		this.enterRule(_localctx, 62, ParserGrammarCypress.RULE_tagContains);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.match(ParserGrammarCypress.CONTAINS);
			this.state = 454;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 455;
			this.match(ParserGrammarCypress.STRING);
			this.state = 458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.COMMA) {
				{
				this.state = 456;
				this.match(ParserGrammarCypress.COMMA);
				this.state = 457;
				this.match(ParserGrammarCypress.STRING);
				}
			}

			this.state = 460;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 468;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 461;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 466;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 462;
					this.tagClick();
					}
					break;

				case 2:
					{
					this.state = 463;
					this.tagClick();
					}
					break;

				case 3:
					{
					this.state = 464;
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
				break;
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
		this.enterRule(_localctx, 64, ParserGrammarCypress.RULE_tagInjectAxe);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 470;
			this.match(ParserGrammarCypress.INJECT_AXE);
			this.state = 471;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 472;
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
		this.enterRule(_localctx, 66, ParserGrammarCypress.RULE_tagCheckA11y);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
			this.match(ParserGrammarCypress.CHECKA11Y);
			this.state = 475;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
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
	public tagCheck(): TagCheckContext {
		let _localctx: TagCheckContext = new TagCheckContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ParserGrammarCypress.RULE_tagCheck);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.match(ParserGrammarCypress.CHECK);
			this.state = 479;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 480;
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
		this.enterRule(_localctx, 70, ParserGrammarCypress.RULE_tagIts);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this.match(ParserGrammarCypress.ITS);
			this.state = 483;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 484;
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
			this.state = 485;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 492;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 486;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 490;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.SHOULD:
					{
					this.state = 487;
					this.tagShould();
					}
					break;
				case ParserGrammarCypress.INVOKE:
					{
					this.state = 488;
					this.tagInvoke();
					}
					break;
				case ParserGrammarCypress.THEN:
					{
					this.state = 489;
					this.tagThen();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
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
		this.enterRule(_localctx, 72, ParserGrammarCypress.RULE_tagInvoke);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 494;
			this.match(ParserGrammarCypress.INVOKE);
			this.state = 495;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 496;
			this.match(ParserGrammarCypress.STRING);
			this.state = 497;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 498;
			this.match(ParserGrammarCypress.OPEN_KEY);
			{
			this.state = 499;
			this.tagWhich();
			}
			{
			this.state = 500;
			this.tagTarget();
			}
			this.state = 501;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 502;
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
		this.enterRule(_localctx, 74, ParserGrammarCypress.RULE_tagWhich);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this.match(ParserGrammarCypress.WHICH);
			this.state = 505;
			this.match(ParserGrammarCypress.NUMBER);
			this.state = 506;
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
		this.enterRule(_localctx, 76, ParserGrammarCypress.RULE_tagTarget);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.match(ParserGrammarCypress.TARGET);
			this.state = 509;
			this.match(ParserGrammarCypress.OPEN_KEY);
			{
			this.state = 510;
			this.tagValue();
			}
			this.state = 511;
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
		this.enterRule(_localctx, 78, ParserGrammarCypress.RULE_tagValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this.match(ParserGrammarCypress.VALUE);
			this.state = 514;
			this.match(ParserGrammarCypress.STRING);
			this.state = 515;
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
		this.enterRule(_localctx, 80, ParserGrammarCypress.RULE_tagLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.match(ParserGrammarCypress.LOCATION);
			this.state = 518;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 519;
			this.match(ParserGrammarCypress.STRING);
			this.state = 520;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 521;
				this.match(ParserGrammarCypress.PUNTO);
				{
				this.state = 522;
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
		this.enterRule(_localctx, 82, ParserGrammarCypress.RULE_tagFirst);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			this.match(ParserGrammarCypress.FIRST);
			this.state = 526;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 527;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 534;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 528;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 532;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.SHOULD:
					{
					this.state = 529;
					this.tagShould();
					}
					break;
				case ParserGrammarCypress.CONTAINS:
					{
					this.state = 530;
					this.tagContains();
					}
					break;
				case ParserGrammarCypress.FIND:
					{
					this.state = 531;
					this.tagFind();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
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
		this.enterRule(_localctx, 84, ParserGrammarCypress.RULE_tagEq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this.match(ParserGrammarCypress.EQ);
			this.state = 537;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 538;
			this.match(ParserGrammarCypress.NUMBER);
			this.state = 539;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 546;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 540;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 544;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.SHOULD:
					{
					this.state = 541;
					this.tagShould();
					}
					break;
				case ParserGrammarCypress.FIND:
					{
					this.state = 542;
					this.tagFind();
					}
					break;
				case ParserGrammarCypress.CLICK:
					{
					this.state = 543;
					this.tagClick();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
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
		this.enterRule(_localctx, 86, ParserGrammarCypress.RULE_tagThen);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 548;
			this.match(ParserGrammarCypress.THEN);
			this.state = 549;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 550;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (ParserGrammarCypress.STRING - 55)) | (1 << (ParserGrammarCypress.PARAMETER - 55)) | (1 << (ParserGrammarCypress.PESO - 55)))) !== 0)) {
				{
				this.state = 551;
				this.tagParam();
				}
			}

			this.state = 554;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 555;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 556;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParserGrammarCypress.CY || _la === ParserGrammarCypress.EXPECT) {
				{
				this.state = 559;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.EXPECT:
					{
					this.state = 557;
					this.expressionExpect();
					}
					break;
				case ParserGrammarCypress.CY:
					{
					this.state = 558;
					this.tagCy();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 564;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 565;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 568;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 566;
				this.match(ParserGrammarCypress.PUNTO);
				{
				this.state = 567;
				this.tagIts();
				}
				}
				break;
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
		this.enterRule(_localctx, 88, ParserGrammarCypress.RULE_tagShould);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			this.match(ParserGrammarCypress.SHOULD);
			this.state = 571;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			{
			this.state = 572;
			this.match(ParserGrammarCypress.STRING);
			this.state = 582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.COMMA) {
				{
				this.state = 573;
				this.match(ParserGrammarCypress.COMMA);
				this.state = 576;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.STRING:
				case ParserGrammarCypress.NUMBER:
					{
					this.state = 574;
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
					break;
				case ParserGrammarCypress.OPEN_KEY:
					{
					this.state = 575;
					this.tagName();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParserGrammarCypress.COMMA) {
					{
					this.state = 578;
					this.match(ParserGrammarCypress.COMMA);
					this.state = 579;
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
			this.state = 584;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 592;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 585;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 590;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ParserGrammarCypress.FIRST:
					{
					this.state = 586;
					this.tagFirst();
					}
					break;
				case ParserGrammarCypress.ITS:
					{
					this.state = 587;
					this.tagIts();
					}
					break;
				case ParserGrammarCypress.AND:
					{
					this.state = 588;
					this.tagAnd();
					}
					break;
				case ParserGrammarCypress.THEN:
					{
					this.state = 589;
					this.tagThen();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
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
		this.enterRule(_localctx, 90, ParserGrammarCypress.RULE_tagWithin);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
			this.match(ParserGrammarCypress.WITHIN);
			this.state = 595;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 596;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 597;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 598;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 599;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 601;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 600;
				this.tagCy();
				}
				}
				this.state = 603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ParserGrammarCypress.CY);
			this.state = 605;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 606;
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
		this.enterRule(_localctx, 92, ParserGrammarCypress.RULE_tagAnd);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 608;
			this.match(ParserGrammarCypress.AND);
			this.state = 609;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			{
			this.state = 610;
			this.match(ParserGrammarCypress.STRING);
			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.COMMA) {
				{
				this.state = 611;
				this.match(ParserGrammarCypress.COMMA);
				this.state = 612;
				this.match(ParserGrammarCypress.STRING);
				this.state = 615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParserGrammarCypress.COMMA) {
					{
					this.state = 613;
					this.match(ParserGrammarCypress.COMMA);
					this.state = 614;
					this.match(ParserGrammarCypress.STRING);
					}
				}

				}
			}

			}
			this.state = 619;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 631;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 624;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 620;
						this.match(ParserGrammarCypress.PUNTO);
						{
						this.state = 621;
						this.tagAnd();
						}
						}
						}
					}
					this.state = 626;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				}
				}
				break;

			case 2:
				{
				this.state = 629;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
				case 1:
					{
					this.state = 627;
					this.match(ParserGrammarCypress.PUNTO);
					{
					this.state = 628;
					this.tagIts();
					}
					}
					break;
				}
				}
				break;
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
		this.enterRule(_localctx, 94, ParserGrammarCypress.RULE_tagDataString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 633;
			this.match(ParserGrammarCypress.DATE_STRING);
			this.state = 634;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 635;
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
		this.enterRule(_localctx, 96, ParserGrammarCypress.RULE_tagWrap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 637;
			this.match(ParserGrammarCypress.WRAP);
			this.state = 638;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 639;
			this.match(ParserGrammarCypress.STRING);
			this.state = 640;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.PUNTO) {
				{
				this.state = 641;
				this.match(ParserGrammarCypress.PUNTO);
				{
				this.state = 642;
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
		this.enterRule(_localctx, 98, ParserGrammarCypress.RULE_expressionExpect);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			this.match(ParserGrammarCypress.EXPECT);
			this.state = 646;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			{
			this.state = 647;
			this.tagParam();
			}
			this.state = 649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.OPEN_BRACKET) {
				{
				this.state = 648;
				this.tagIndex();
				}
			}

			this.state = 652;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ParserGrammarCypress.INNERTEXT || _la === ParserGrammarCypress.LENGTH) {
				{
				this.state = 651;
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

			this.state = 654;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 655;
			this.match(ParserGrammarCypress.PUNTO);
			this.state = 656;
			_la = this._input.LA(1);
			if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (ParserGrammarCypress.TO - 44)) | (1 << (ParserGrammarCypress.TO_BE_A - 44)) | (1 << (ParserGrammarCypress.NOT_TO_BE_A - 44)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 657;
			this.match(ParserGrammarCypress.PUNTO);
			this.state = 660;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParserGrammarCypress.EQUAL:
				{
				this.state = 658;
				this.tagEqual();
				}
				break;
			case ParserGrammarCypress.DATE_STRING:
				{
				this.state = 659;
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
		this.enterRule(_localctx, 100, ParserGrammarCypress.RULE_tagEqual);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 662;
			this.match(ParserGrammarCypress.EQUAL);
			this.state = 663;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 664;
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
			this.state = 665;
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
		this.enterRule(_localctx, 102, ParserGrammarCypress.RULE_tagParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ParserGrammarCypress.PARAMETER:
			case ParserGrammarCypress.PESO:
				{
				this.state = 668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ParserGrammarCypress.PESO) {
					{
					this.state = 667;
					this.match(ParserGrammarCypress.PESO);
					}
				}

				this.state = 670;
				this.match(ParserGrammarCypress.PARAMETER);
				}
				break;
			case ParserGrammarCypress.STRING:
				{
				this.state = 671;
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
		this.enterRule(_localctx, 104, ParserGrammarCypress.RULE_tagIndex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 674;
			this.match(ParserGrammarCypress.OPEN_BRACKET);
			this.state = 675;
			this.match(ParserGrammarCypress.NUMBER);
			this.state = 676;
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
		this.enterRule(_localctx, 106, ParserGrammarCypress.RULE_tagAs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 678;
			this.match(ParserGrammarCypress.AS);
			this.state = 679;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 680;
			this.match(ParserGrammarCypress.STRING);
			this.state = 681;
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
		this.enterRule(_localctx, 108, ParserGrammarCypress.RULE_tagEventOnBeforeLoad);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 683;
			this.match(ParserGrammarCypress.ON_BEFORE_LOAD);
			this.state = 684;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 685;
			this.match(ParserGrammarCypress.PARAMETER);
			this.state = 686;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 687;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 693;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ParserGrammarCypress.PARAMETER) {
				{
				{
				this.state = 688;
				this.match(ParserGrammarCypress.PARAMETER);
				this.state = 689;
				this.match(ParserGrammarCypress.PUNTO);
				this.state = 690;
				this.tagEventListener();
				}
				}
				this.state = 695;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 696;
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
		this.enterRule(_localctx, 110, ParserGrammarCypress.RULE_tagEventListener);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 698;
			this.match(ParserGrammarCypress.ADD_EVENT_LISTENER);
			this.state = 699;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 700;
			this.match(ParserGrammarCypress.STRING);
			this.state = 701;
			this.match(ParserGrammarCypress.COMMA);
			this.state = 702;
			this.match(ParserGrammarCypress.OPEN_PARENTHESIS);
			this.state = 703;
			this.match(ParserGrammarCypress.PARAMETER);
			this.state = 704;
			this.match(ParserGrammarCypress.CLOSE_PARENTHESIS);
			this.state = 705;
			this.match(ParserGrammarCypress.ENTONCES);
			this.state = 706;
			this.match(ParserGrammarCypress.OPEN_KEY);
			this.state = 707;
			this.match(ParserGrammarCypress.CLOSE_KEY);
			this.state = 708;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03O\u02C9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x07\x02\x80\n\x02\f\x02\x0E\x02\x83\v\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x06\x03\x92\n\x03\r\x03\x0E\x03\x93\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x05\x04\x9B\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xA6\n\x04\f\x04\x0E\x04\xA9\v" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05\xC5\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06\xD9\n\x06\x05\x06\xDB\n\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07\xE4\n\x07\r\x07\x0E\x07\xE5" +
		"\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07" +
		"\n\xFE\n\n\f\n\x0E\n\u0101\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x05\f\u010E\n\f\x03\f\x05\f\u0111\n\f\x03\f" +
		"\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u011A\n\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0122\n\x0E\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u012E" +
		"\n\x0F\x05\x0F\u0130\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0135\n\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u013D\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0145\n\x11\x03\x11" +
		"\x03\x11\x05\x11\u0149\n\x11\x05\x11\u014B\n\x11\x03\x11\x03\x11\x03\x11" +
		"\x05\x11\u0150\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05" +
		"\x12\u0158\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x05\x14\u0164\n\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\u0172\n\x16\x05\x16\u0174\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0194" +
		"\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u019B\n\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u01A3\n\x1E\f\x1E" +
		"\x0E\x1E\u01A6\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01B2\n\x1F\x05\x1F\u01B4\n\x1F\x03" +
		" \x03 \x03 \x03 \x03 \x05 \u01BB\n \x03 \x03 \x05 \u01BF\n \x05 \u01C1" +
		"\n \x03 \x03 \x03 \x05 \u01C6\n \x03!\x03!\x03!\x03!\x03!\x05!\u01CD\n" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u01D5\n!\x05!\u01D7\n!\x03\"\x03" +
		"\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03%\x03%\x03%" +
		"\x03%\x03%\x03%\x03%\x03%\x05%\u01ED\n%\x05%\u01EF\n%\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03" +
		"(\x03(\x03(\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u020E" +
		"\n*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0217\n+\x05+\u0219\n+\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u0223\n,\x05,\u0225\n,\x03-" +
		"\x03-\x03-\x03-\x05-\u022B\n-\x03-\x03-\x03-\x03-\x03-\x07-\u0232\n-\f" +
		"-\x0E-\u0235\v-\x03-\x03-\x03-\x03-\x05-\u023B\n-\x03.\x03.\x03.\x03." +
		"\x03.\x03.\x05.\u0243\n.\x03.\x03.\x05.\u0247\n.\x05.\u0249\n.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x05.\u0251\n.\x05.\u0253\n.\x03/\x03/\x03/\x03/" +
		"\x03/\x03/\x03/\x06/\u025C\n/\r/\x0E/\u025D\x03/\x03/\x03/\x030\x030\x03" +
		"0\x030\x030\x030\x030\x050\u026A\n0\x050\u026C\n0\x030\x030\x030\x070" +
		"\u0271\n0\f0\x0E0\u0274\v0\x030\x030\x050\u0278\n0\x050\u027A\n0\x031" +
		"\x031\x031\x031\x032\x032\x032\x032\x032\x032\x052\u0286\n2\x033\x033" +
		"\x033\x033\x053\u028C\n3\x033\x053\u028F\n3\x033\x033\x033\x033\x033\x03" +
		"3\x053\u0297\n3\x034\x034\x034\x034\x034\x035\x055\u029F\n5\x035\x035" +
		"\x055\u02A3\n5\x036\x036\x036\x036\x037\x037\x037\x037\x037\x038\x038" +
		"\x038\x038\x038\x038\x038\x038\x078\u02B6\n8\f8\x0E8\u02B9\v8\x038\x03" +
		"8\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x02" +
		"\x02\x02:\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02\x02\x05\x03\x029:\x03" +
		"\x02JK\x03\x02.0\x02\u02FE\x02r\x03\x02\x02\x02\x04\x87\x03\x02\x02\x02" +
		"\x06\x98\x03\x02\x02\x02\b\xAD\x03\x02\x02\x02\n\xC6\x03\x02\x02\x02\f" +
		"\xDC\x03\x02\x02\x02\x0E\xEA\x03\x02\x02\x02\x10\xF3\x03\x02\x02\x02\x12" +
		"\xF7\x03\x02\x02\x02\x14\u0102\x03\x02\x02\x02\x16\u0107\x03\x02\x02\x02" +
		"\x18\u0114\x03\x02\x02\x02\x1A\u011B\x03\x02\x02\x02\x1C\u0125\x03\x02" +
		"\x02\x02\x1E\u0136\x03\x02\x02\x02 \u013E\x03\x02\x02\x02\"\u0151\x03" +
		"\x02\x02\x02$\u0159\x03\x02\x02\x02&\u015D\x03\x02\x02\x02(\u0165\x03" +
		"\x02\x02\x02*\u016A\x03\x02\x02\x02,\u0175\x03\x02\x02\x02.\u017A\x03" +
		"\x02\x02\x020\u017F\x03\x02\x02\x022\u0184\x03\x02\x02\x024\u0189\x03" +
		"\x02\x02\x026\u018E\x03\x02\x02\x028\u0195\x03\x02\x02\x02:\u019C\x03" +
		"\x02\x02\x02<\u01A9\x03\x02\x02\x02>\u01B5\x03\x02\x02\x02@\u01C7\x03" +
		"\x02\x02\x02B\u01D8\x03\x02\x02\x02D\u01DC\x03\x02\x02\x02F\u01E0\x03" +
		"\x02\x02\x02H\u01E4\x03\x02\x02\x02J\u01F0\x03\x02\x02\x02L\u01FA\x03" +
		"\x02\x02\x02N\u01FE\x03\x02\x02\x02P\u0203\x03\x02\x02\x02R\u0207\x03" +
		"\x02\x02\x02T\u020F\x03\x02\x02\x02V\u021A\x03\x02\x02\x02X\u0226\x03" +
		"\x02\x02\x02Z\u023C\x03\x02\x02\x02\\\u0254\x03\x02\x02\x02^\u0262\x03" +
		"\x02\x02\x02`\u027B\x03\x02\x02\x02b\u027F\x03\x02\x02\x02d\u0287\x03" +
		"\x02\x02\x02f\u0298\x03\x02\x02\x02h\u02A2\x03\x02\x02\x02j\u02A4\x03" +
		"\x02\x02\x02l\u02A8\x03\x02\x02\x02n\u02AD\x03\x02\x02\x02p\u02BC\x03" +
		"\x02\x02\x02rs\x07\x03\x02\x02st\x07>\x02\x02tu\x079\x02\x02uv\x07C\x02" +
		"\x02vw\x07>\x02\x02wx\x07?\x02\x02xy\x07B\x02\x02y\x81\x07<\x02\x02z\x80" +
		"\x05\x06\x04\x02{\x80\x05\f\x07\x02|\x80\x05\x0E\b\x02}\x80\x05\x04\x03" +
		"\x02~\x80\x05\x02\x02\x02\x7Fz\x03\x02\x02\x02\x7F{\x03\x02\x02\x02\x7F" +
		"|\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x7F~\x03\x02\x02\x02\x80\x83\x03" +
		"\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x84\x03" +
		"\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84\x85\x07=\x02\x02\x85\x86\x07" +
		"?\x02\x02\x86\x03\x03\x02\x02\x02\x87\x88\x07\t\x02\x02\x88\x89\x07>\x02" +
		"\x02\x89\x8A\x079\x02\x02\x8A\x8B\x07C\x02\x02\x8B\x8C\x07>\x02\x02\x8C" +
		"\x8D\x07?\x02\x02\x8D\x8E\x07B\x02\x02\x8E\x91\x07<\x02\x02\x8F\x92\x05" +
		"\x06\x04\x02\x90\x92\x05\f\x07\x02\x91\x8F\x03\x02\x02\x02\x91\x90\x03" +
		"\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93\x94\x03" +
		"\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x07=\x02\x02\x96\x97\x07" +
		"?\x02\x02\x97\x05\x03\x02\x02\x02\x98\x9A\x07\x04\x02\x02\x99\x9B\x07" +
		"(\x02\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C\x03" +
		"\x02\x02\x02\x9C\x9D\x07>\x02\x02\x9D\x9E\x079\x02\x02\x9E\x9F\x07C\x02" +
		"\x02\x9F\xA0\x07>\x02\x02\xA0\xA1\x07?\x02\x02\xA1\xA2\x07B\x02\x02\xA2" +
		"\xA7\x07<\x02\x02\xA3\xA6\x05\b\x05\x02\xA4\xA6\x05d3\x02\xA5\xA3\x03" +
		"\x02\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03" +
		"\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAA\x03\x02\x02\x02\xA9\xA7\x03" +
		"\x02\x02\x02\xAA\xAB\x07=\x02\x02\xAB\xAC\x07?\x02\x02\xAC\x07\x03\x02" +
		"\x02\x02\xAD\xAE\x07\n\x02\x02\xAE\xC4\x07E\x02\x02\xAF\xC5\x05\n\x06" +
		"\x02\xB0\xC5\x05\x14\v\x02\xB1\xC5\x05\x16\f\x02\xB2\xC5\x05\x18\r\x02" +
		"\xB3\xC5\x05@!\x02\xB4\xC5\x05B\"\x02\xB5\xC5\x05D#\x02\xB6\xC5\x05\x1A" +
		"\x0E\x02\xB7\xC5\x05> \x02\xB8\xC5\x05*\x16\x02\xB9\xC5\x058\x1D\x02\xBA" +
		"\xC5\x05R*\x02\xBB\xC5\x056\x1C\x02\xBC\xC5\x05\x1C\x0F\x02\xBD\xC5\x05" +
		"b2\x02\xBE\xC5\x05 \x11\x02\xBF\xC5\x052\x1A\x02\xC0\xC5\x05&\x14\x02" +
		"\xC1\xC5\x05(\x15\x02\xC2\xC5\x05\x1E\x10\x02\xC3\xC5\x05\"\x12\x02\xC4" +
		"\xAF\x03\x02\x02\x02\xC4\xB0\x03\x02\x02\x02\xC4\xB1\x03\x02\x02\x02\xC4" +
		"\xB2\x03\x02\x02\x02\xC4\xB3\x03\x02\x02\x02\xC4\xB4\x03\x02\x02\x02\xC4" +
		"\xB5\x03\x02\x02\x02\xC4\xB6\x03\x02\x02\x02\xC4\xB7\x03\x02\x02\x02\xC4" +
		"\xB8\x03\x02\x02\x02\xC4\xB9\x03\x02\x02\x02\xC4\xBA\x03\x02\x02\x02\xC4" +
		"\xBB\x03\x02\x02\x02\xC4\xBC\x03\x02\x02\x02\xC4\xBD\x03\x02\x02\x02\xC4" +
		"\xBE\x03\x02\x02\x02\xC4\xBF\x03\x02\x02\x02\xC4\xC0\x03\x02\x02\x02\xC4" +
		"\xC1\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC3\x03\x02\x02\x02\xC5" +
		"\t\x03\x02\x02\x02\xC6\xC7\x07\r\x02\x02\xC7\xC8\x07>\x02\x02\xC8\xC9" +
		"\x079\x02\x02\xC9\xCA\x07?\x02\x02\xCA\xDA\x03\x02\x02\x02\xCB\xD8\x07" +
		"E\x02\x02\xCC\xD9\x05\x10\t\x02\xCD\xD9\x05\x12\n\x02\xCE\xD9\x05X-\x02" +
		"\xCF\xD9\x05Z.\x02\xD0\xD9\x05\\/\x02\xD1\xD9\x05V,\x02\xD2\xD9\x05<\x1F" +
		"\x02\xD3\xD9\x05@!\x02\xD4\xD9\x056\x1C\x02\xD5\xD9\x050\x19\x02\xD6\xD9" +
		"\x054\x1B\x02\xD7\xD9\x05$\x13\x02\xD8\xCC\x03\x02\x02\x02\xD8\xCD\x03" +
		"\x02\x02\x02\xD8\xCE\x03\x02\x02\x02\xD8\xCF\x03\x02\x02\x02\xD8\xD0\x03" +
		"\x02\x02\x02\xD8\xD1\x03\x02\x02\x02\xD8\xD2\x03\x02\x02\x02\xD8\xD3\x03" +
		"\x02\x02\x02\xD8\xD4\x03\x02\x02\x02\xD8\xD5\x03\x02\x02\x02\xD8\xD6\x03" +
		"\x02\x02\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDB\x03\x02\x02\x02\xDA\xCB\x03" +
		"\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\v\x03\x02\x02\x02\xDC\xDD\x07" +
		"\x05\x02\x02\xDD\xDE\x07>\x02\x02\xDE\xDF\x07>\x02\x02\xDF\xE0\x07?\x02" +
		"\x02\xE0\xE1\x07B\x02\x02\xE1\xE3\x07<\x02\x02\xE2\xE4\x05\b\x05\x02\xE3" +
		"\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5" +
		"\xE6\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x07=\x02\x02\xE8" +
		"\xE9\x07?\x02\x02\xE9\r\x03\x02\x02\x02\xEA\xEB\x07\x06\x02\x02\xEB\xEC" +
		"\x07>\x02\x02\xEC\xED\x07>\x02\x02\xED\xEE\x07?\x02\x02\xEE\xEF\x07B\x02" +
		"\x02\xEF\xF0\x07<\x02\x02\xF0\xF1\x07=\x02\x02\xF1\xF2\x07?\x02\x02\xF2" +
		"\x0F\x03\x02\x02\x02\xF3\xF4\x073\x02\x02\xF4\xF5\x07>\x02\x02\xF5\xF6" +
		"\x07?\x02\x02\xF6\x11\x03\x02\x02\x02\xF7\xF8\x074\x02\x02\xF8\xF9\x07" +
		">\x02\x02\xF9\xFA\x079\x02\x02\xFA\xFF\x07?\x02\x02\xFB\xFC\x07E\x02\x02" +
		"\xFC\xFE\x05\x12\n\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0101\x03\x02\x02\x02" +
		"\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\x13\x03\x02\x02" +
		"\x02\u0101\xFF\x03\x02\x02\x02\u0102\u0103\x07\f\x02\x02\u0103\u0104\x07" +
		">\x02\x02\u0104\u0105\t\x02\x02\x02\u0105\u0106\x07?\x02\x02\u0106\x15" +
		"\x03\x02\x02\x02\u0107\u0108\x07\v\x02\x02\u0108\u0109\x07>\x02\x02\u0109" +
		"\u0110\x079\x02\x02\u010A\u010B\x07C\x02\x02\u010B\u010D\x07<\x02\x02" +
		"\u010C\u010E\x05n8\x02\u010D\u010C\x03\x02\x02\x02\u010D\u010E\x03\x02" +
		"\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0111\x07=\x02\x02\u0110\u010A" +
		"\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02" +
		"\u0112\u0113\x07?\x02\x02\u0113\x17\x03\x02\x02\x02\u0114\u0115\x07\x0E" +
		"\x02\x02\u0115\u0116\x07>\x02\x02\u0116\u0119\x07?\x02\x02\u0117\u0118" +
		"\x07E\x02\x02\u0118\u011A\x05Z.\x02\u0119\u0117\x03\x02\x02\x02\u0119" +
		"\u011A\x03\x02\x02\x02\u011A\x19\x03\x02\x02\x02\u011B\u011C\x07\x0F\x02" +
		"\x02\u011C\u011D\x07>\x02\x02\u011D\u011E\x079\x02\x02\u011E\u0121\x07" +
		"C\x02\x02\u011F\u0122\x05:\x1E\x02\u0120\u0122\x05\b\x05\x02\u0121\u011F" +
		"\x03\x02\x02\x02\u0121\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02" +
		"\u0123\u0124\x07?\x02\x02\u0124\x1B\x03\x02\x02\x02\u0125\u0126\x07\x1E" +
		"\x02\x02\u0126\u0127\x07>\x02\x02\u0127\u012F\x079\x02\x02\u0128\u0129" +
		"\x07C\x02\x02\u0129\u012D\x079\x02\x02\u012A\u012B\x07C\x02\x02\u012B" +
		"\u012C\x07<\x02\x02\u012C\u012E\x07=\x02\x02\u012D\u012A\x03\x02\x02\x02" +
		"\u012D\u012E\x03\x02\x02\x02\u012E\u0130\x03\x02\x02\x02\u012F\u0128\x03" +
		"\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131" +
		"\u0134\x07?\x02\x02\u0132\u0133\x07E\x02\x02\u0133\u0135\x05l7\x02\u0134" +
		"\u0132\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\x1D\x03\x02\x02" +
		"\x02\u0136\u0137\x07#\x02\x02\u0137\u0138\x07>\x02\x02\u0138\u0139\x07" +
		"9\x02\x02\u0139\u013C\x07?\x02\x02\u013A\u013B\x07E\x02\x02\u013B\u013D" +
		"\x05H%\x02\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D" +
		"\x1F\x03\x02\x02\x02\u013E\u013F\x07\x1F\x02\x02\u013F\u0140\x07>\x02" +
		"\x02\u0140\u014A\x079\x02\x02\u0141\u0144\x07C\x02\x02\u0142\u0145\t\x02" +
		"\x02\x02\u0143\u0145\x05,\x17\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0143" +
		"\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146\u0147\x07C\x02\x02" +
		"\u0147\u0149\t\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0149\x03" +
		"\x02\x02\x02\u0149\u014B\x03\x02\x02\x02\u014A\u0141\x03\x02\x02\x02\u014A" +
		"\u014B\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014F\x07?\x02" +
		"\x02\u014D\u014E\x07E\x02\x02\u014E\u0150\x05\x16\f\x02\u014F\u014D\x03" +
		"\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150!\x03\x02\x02\x02\u0151" +
		"\u0152\x07%\x02\x02\u0152\u0153\x07>\x02\x02\u0153\u0154\x079\x02\x02" +
		"\u0154\u0157\x07?\x02\x02\u0155\u0156\x07E\x02\x02\u0156\u0158\x05Z.\x02" +
		"\u0157\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158#\x03\x02" +
		"\x02\x02\u0159\u015A\x07$\x02\x02\u015A\u015B\x07>\x02\x02\u015B\u015C" +
		"\x07?\x02\x02\u015C%\x03\x02\x02\x02\u015D\u015E\x07!\x02\x02\u015E\u015F" +
		"\x07>\x02\x02\u015F\u0160\x079\x02\x02\u0160\u0163\x07?\x02\x02\u0161" +
		"\u0162\x07E\x02\x02\u0162\u0164\x05Z.\x02\u0163\u0161\x03\x02\x02\x02" +
		"\u0163\u0164\x03\x02\x02\x02\u0164\'\x03\x02\x02\x02\u0165\u0166\x07\"" +
		"\x02\x02\u0166\u0167\x07>\x02\x02\u0167\u0168\x079\x02\x02\u0168\u0169" +
		"\x07?\x02\x02\u0169)\x03\x02\x02\x02\u016A\u016B\x07\x13\x02\x02\u016B" +
		"\u016C\x07>\x02\x02\u016C\u0173\x07?\x02\x02\u016D\u0171\x07E\x02\x02" +
		"\u016E\u0172\x05X-\x02\u016F\u0172\x05H%\x02\u0170\u0172\x05Z.\x02\u0171" +
		"\u016E\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02\u0171\u0170\x03\x02" +
		"\x02\x02\u0172\u0174\x03\x02\x02\x02\u0173\u016D\x03\x02\x02\x02\u0173" +
		"\u0174\x03\x02\x02\x02\u0174+\x03\x02\x02\x02\u0175\u0176\x07<\x02\x02" +
		"\u0176\u0177\x07L\x02\x02\u0177\u0178\x079\x02\x02\u0178\u0179\x07=\x02" +
		"\x02\u0179-\x03\x02\x02\x02\u017A\u017B\x07<\x02\x02\u017B\u017C\x078" +
		"\x02\x02\u017C\u017D\x079\x02\x02\u017D\u017E\x07=\x02\x02\u017E/\x03" +
		"\x02\x02\x02\u017F\u0180\x07\x1C\x02\x02\u0180\u0181\x07>\x02\x02\u0181" +
		"\u0182\x079\x02\x02\u0182\u0183\x07?\x02\x02\u01831\x03\x02\x02\x02\u0184" +
		"\u0185\x07 \x02\x02\u0185\u0186\x07>\x02\x02\u0186\u0187\x079\x02\x02" +
		"\u0187\u0188\x07?\x02\x02\u01883\x03\x02\x02\x02\u0189\u018A\x07)\x02" +
		"\x02\u018A\u018B\x07>\x02\x02\u018B\u018C\x079\x02\x02\u018C\u018D\x07" +
		"?\x02\x02\u018D5\x03\x02\x02\x02\u018E\u018F\x07\x1B\x02\x02\u018F\u0190" +
		"\x07>\x02\x02\u0190\u0193\x07?\x02\x02\u0191\u0192\x07E\x02\x02\u0192" +
		"\u0194\x050\x19\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02" +
		"\x02\u01947\x03\x02\x02\x02\u0195\u0196\x07\x17\x02\x02\u0196\u0197\x07" +
		">\x02\x02\u0197\u019A\x07?\x02\x02\u0198\u0199\x07E\x02\x02\u0199\u019B" +
		"\x05Z.\x02\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B" +
		"9\x03\x02\x02\x02\u019C\u019D\x07>\x02\x02\u019D\u019E\x07H\x02\x02\u019E" +
		"\u019F\x07?\x02\x02\u019F\u01A0\x07B\x02\x02\u01A0\u01A4\x07<\x02\x02" +
		"\u01A1\u01A3\x05d3\x02\u01A2\u01A1\x03\x02\x02\x02\u01A3\u01A6\x03\x02" +
		"\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5" +
		"\u01A7\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A7\u01A8\x07=\x02" +
		"\x02\u01A8;\x03\x02\x02\x02\u01A9\u01AA\x07\x18\x02\x02\u01AA\u01AB\x07" +
		">\x02\x02\u01AB\u01AC\x079\x02\x02\u01AC\u01B3\x07?\x02\x02\u01AD\u01B1" +
		"\x07E\x02\x02\u01AE\u01B2\x05Z.\x02\u01AF\u01B2\x05F$\x02\u01B0\u01B2" +
		"\x05V,\x02\u01B1\u01AE\x03\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B1" +
		"\u01B0\x03\x02\x02\x02\u01B2\u01B4\x03\x02\x02\x02\u01B3\u01AD\x03\x02" +
		"\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4=\x03\x02\x02\x02\u01B5\u01B6" +
		"\x07\x14\x02\x02\u01B6\u01C0\x07>\x02\x02\u01B7\u01B8\x05h5\x02\u01B8" +
		"\u01BA\x07E\x02\x02\u01B9\u01BB\x07H\x02\x02\u01BA\u01B9\x03\x02\x02\x02" +
		"\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BE\x03\x02\x02\x02\u01BC\u01BD\x07" +
		"C\x02\x02\u01BD\u01BF\x079\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF" +
		"\x03\x02\x02\x02\u01BF\u01C1\x03\x02\x02\x02\u01C0\u01B7\x03\x02\x02\x02" +
		"\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C5\x07" +
		"?\x02\x02\u01C3\u01C4\x07E\x02\x02\u01C4\u01C6\x05l7\x02\u01C5\u01C3\x03" +
		"\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6?\x03\x02\x02\x02\u01C7" +
		"\u01C8\x07\x10\x02\x02\u01C8\u01C9\x07>\x02\x02\u01C9\u01CC\x079\x02\x02" +
		"\u01CA\u01CB\x07C\x02\x02\u01CB\u01CD\x079\x02\x02\u01CC\u01CA\x03\x02" +
		"\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE" +
		"\u01D6\x07?\x02\x02\u01CF\u01D4\x07E\x02\x02\u01D0\u01D5\x05\x10\t\x02" +
		"\u01D1\u01D5\x05\x10\t\x02\u01D2\u01D5\x05Z.\x02\u01D3\u01D5\x03\x02\x02" +
		"\x02\u01D4\u01D0\x03\x02\x02\x02\u01D4\u01D1\x03\x02\x02\x02\u01D4\u01D2" +
		"\x03\x02\x02\x02\u01D4\u01D3\x03\x02\x02\x02\u01D5\u01D7\x03\x02\x02\x02" +
		"\u01D6\u01CF\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7A\x03\x02" +
		"\x02\x02\u01D8\u01D9\x07\x11\x02\x02\u01D9\u01DA\x07>\x02\x02\u01DA\u01DB" +
		"\x07?\x02\x02\u01DBC\x03\x02\x02\x02\u01DC\u01DD\x07\x12\x02\x02\u01DD" +
		"\u01DE\x07>\x02\x02\u01DE\u01DF\x07?\x02\x02\u01DFE\x03\x02\x02\x02\u01E0" +
		"\u01E1\x07\x19\x02\x02\u01E1\u01E2\x07>\x02\x02\u01E2\u01E3\x07?\x02\x02" +
		"\u01E3G\x03\x02\x02\x02\u01E4\u01E5\x07\x1D\x02\x02\u01E5\u01E6\x07>\x02" +
		"\x02\u01E6\u01E7\t\x02\x02\x02\u01E7\u01EE\x07?\x02\x02\u01E8\u01EC\x07" +
		"E\x02\x02\u01E9\u01ED\x05Z.\x02\u01EA\u01ED\x05J&\x02\u01EB\u01ED\x05" +
		"X-\x02\u01EC\u01E9\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC\u01EB" +
		"\x03\x02\x02\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE\u01E8\x03\x02\x02\x02" +
		"\u01EE\u01EF\x03\x02\x02\x02\u01EFI\x03\x02\x02\x02\u01F0\u01F1\x07\x16" +
		"\x02\x02\u01F1\u01F2\x07>\x02\x02\u01F2\u01F3\x079\x02\x02\u01F3\u01F4" +
		"\x07C\x02\x02\u01F4\u01F5\x07<\x02\x02\u01F5\u01F6\x05L\'\x02\u01F6\u01F7" +
		"\x05N(\x02\u01F7\u01F8\x07=\x02\x02\u01F8\u01F9\x07?\x02\x02\u01F9K\x03" +
		"\x02\x02\x02\u01FA\u01FB\x07M\x02\x02\u01FB\u01FC\x07:\x02\x02\u01FC\u01FD" +
		"\x07C\x02\x02\u01FDM\x03\x02\x02\x02\u01FE\u01FF\x07N\x02\x02\u01FF\u0200" +
		"\x07<\x02\x02\u0200\u0201\x05P)\x02\u0201\u0202\x07=\x02\x02\u0202O\x03" +
		"\x02\x02\x02\u0203\u0204\x07O\x02\x02\u0204\u0205\x079\x02\x02\u0205\u0206" +
		"\x07C\x02\x02\u0206Q\x03\x02\x02\x02\u0207\u0208\x07\x1A\x02\x02\u0208" +
		"\u0209\x07>\x02\x02\u0209\u020A\x079\x02\x02\u020A\u020D\x07?\x02\x02" +
		"\u020B\u020C\x07E\x02\x02\u020C\u020E\x05Z.\x02\u020D\u020B\x03\x02\x02" +
		"\x02\u020D\u020E\x03\x02\x02\x02\u020ES\x03\x02\x02\x02\u020F\u0210\x07" +
		"6\x02\x02\u0210\u0211\x07>\x02\x02\u0211\u0218\x07?\x02\x02\u0212\u0216" +
		"\x07E\x02\x02\u0213\u0217\x05Z.\x02\u0214\u0217\x05@!\x02\u0215\u0217" +
		"\x05<\x1F\x02\u0216\u0213\x03\x02\x02\x02\u0216\u0214\x03\x02\x02\x02" +
		"\u0216\u0215\x03\x02\x02\x02\u0217\u0219\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0218\u0212\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219U\x03" +
		"\x02\x02\x02\u021A\u021B\x071\x02\x02\u021B\u021C\x07>\x02\x02\u021C\u021D" +
		"\x07:\x02\x02\u021D\u0224\x07?\x02\x02\u021E\u0222\x07E\x02\x02\u021F" +
		"\u0223\x05Z.\x02\u0220\u0223\x05<\x1F\x02\u0221\u0223\x05\x10\t\x02\u0222" +
		"\u021F\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02\u0222\u0221\x03\x02" +
		"\x02\x02\u0223\u0225\x03\x02\x02\x02\u0224\u021E\x03\x02\x02\x02\u0224" +
		"\u0225\x03\x02\x02\x02\u0225W\x03\x02\x02\x02\u0226\u0227\x07,\x02\x02" +
		"\u0227\u0228\x07>\x02\x02\u0228\u022A\x07>\x02\x02\u0229\u022B\x05h5\x02" +
		"\u022A\u0229\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022C\x03" +
		"\x02\x02\x02\u022C\u022D\x07?\x02\x02\u022D\u022E\x07B\x02\x02\u022E\u0233" +
		"\x07<\x02\x02\u022F\u0232\x05d3\x02\u0230\u0232\x05\b\x05\x02\u0231\u022F" +
		"\x03\x02\x02\x02\u0231\u0230\x03\x02\x02\x02\u0232\u0235\x03\x02\x02\x02" +
		"\u0233\u0231\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0236\x03" +
		"\x02\x02\x02\u0235\u0233\x03\x02\x02\x02\u0236\u0237\x07=\x02\x02\u0237" +
		"\u023A\x07?\x02\x02\u0238\u0239\x07E\x02\x02\u0239\u023B\x05H%\x02\u023A" +
		"\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023BY\x03\x02\x02" +
		"\x02\u023C\u023D\x07&\x02\x02\u023D\u023E\x07>\x02\x02\u023E\u0248\x07" +
		"9\x02\x02\u023F\u0242\x07C\x02\x02\u0240\u0243\t\x02\x02\x02\u0241\u0243" +
		"\x05.\x18\x02\u0242\u0240\x03\x02\x02\x02\u0242\u0241\x03\x02\x02\x02" +
		"\u0243\u0246\x03\x02\x02\x02\u0244\u0245\x07C\x02\x02\u0245\u0247\t\x02" +
		"\x02\x02\u0246\u0244\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247" +
		"\u0249\x03\x02\x02\x02\u0248\u023F\x03\x02\x02\x02\u0248\u0249\x03\x02" +
		"\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u0252\x07?\x02\x02\u024B\u0250" +
		"\x07E\x02\x02\u024C\u0251\x05T+\x02\u024D\u0251\x05H%\x02\u024E\u0251" +
		"\x05^0\x02\u024F\u0251\x05X-\x02\u0250\u024C\x03\x02\x02\x02\u0250\u024D" +
		"\x03\x02\x02\x02\u0250\u024E\x03\x02\x02\x02\u0250\u024F\x03\x02\x02\x02" +
		"\u0251\u0253\x03\x02\x02\x02\u0252\u024B\x03\x02\x02\x02\u0252\u0253\x03" +
		"\x02\x02\x02\u0253[\x03\x02\x02\x02\u0254\u0255\x07\'\x02\x02\u0255\u0256" +
		"\x07>\x02\x02\u0256\u0257\x07>\x02\x02\u0257\u0258\x07?\x02\x02\u0258" +
		"\u0259\x07B\x02\x02\u0259\u025B\x07<\x02\x02\u025A\u025C\x05\b\x05\x02" +
		"\u025B\u025A\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025B\x03" +
		"\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F" +
		"\u0260\x07=\x02\x02\u0260\u0261\x07?\x02\x02\u0261]\x03\x02\x02\x02\u0262" +
		"\u0263\x07*\x02\x02\u0263\u0264\x07>\x02\x02\u0264\u026B\x079\x02\x02" +
		"\u0265\u0266\x07C\x02\x02\u0266\u0269\x079\x02\x02\u0267\u0268\x07C\x02" +
		"\x02\u0268\u026A\x079\x02\x02\u0269\u0267\x03\x02\x02\x02\u0269\u026A" +
		"\x03\x02\x02\x02\u026A\u026C\x03\x02\x02\x02\u026B\u0265\x03\x02\x02\x02" +
		"\u026B\u026C\x03\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u0279\x07" +
		"?\x02\x02\u026E\u026F\x07E\x02\x02\u026F\u0271\x05^0\x02\u0270\u026E\x03" +
		"\x02\x02\x02\u0271\u0274\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0272" +
		"\u0273\x03\x02\x02\x02\u0273\u027A\x03\x02\x02\x02\u0274\u0272\x03\x02" +
		"\x02\x02\u0275\u0276\x07E\x02\x02\u0276\u0278\x05H%\x02\u0277\u0275\x03" +
		"\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u027A\x03\x02\x02\x02\u0279" +
		"\u0272\x03\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u027A_\x03\x02\x02" +
		"\x02\u027B\u027C\x077\x02\x02\u027C\u027D\x07>\x02\x02\u027D\u027E\x07" +
		"?\x02\x02\u027Ea\x03\x02\x02\x02\u027F\u0280\x07+\x02\x02\u0280\u0281" +
		"\x07>\x02\x02\u0281\u0282\x079\x02\x02\u0282\u0285\x07?\x02\x02\u0283" +
		"\u0284\x07E\x02\x02\u0284\u0286\x05Z.\x02\u0285\u0283\x03\x02\x02\x02" +
		"\u0285\u0286\x03\x02\x02\x02\u0286c\x03\x02\x02\x02\u0287\u0288\x07-\x02" +
		"\x02\u0288\u0289\x07>\x02\x02\u0289\u028B\x05h5\x02\u028A\u028C\x05j6" +
		"\x02\u028B\u028A\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028E" +
		"\x03\x02\x02\x02\u028D\u028F\t\x03\x02\x02\u028E\u028D\x03\x02\x02\x02" +
		"\u028E\u028F\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0291\x07" +
		"?\x02\x02\u0291\u0292\x07E\x02\x02\u0292\u0293\t\x04\x02\x02\u0293\u0296" +
		"\x07E\x02\x02\u0294\u0297\x05f4\x02\u0295\u0297\x05`1\x02\u0296\u0294" +
		"\x03\x02\x02\x02\u0296\u0295\x03\x02\x02\x02\u0297e\x03\x02\x02\x02\u0298" +
		"\u0299\x072\x02\x02\u0299\u029A\x07>\x02\x02\u029A\u029B\t\x02\x02\x02" +
		"\u029B\u029C\x07?\x02\x02\u029Cg\x03\x02\x02\x02\u029D\u029F\x07I\x02" +
		"\x02\u029E\u029D\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F\u02A0" +
		"\x03\x02\x02\x02\u02A0\u02A3\x07H\x02\x02\u02A1\u02A3\x079\x02\x02\u02A2" +
		"\u029E\x03\x02\x02\x02\u02A2\u02A1\x03\x02\x02\x02\u02A3i\x03\x02\x02" +
		"\x02\u02A4\u02A5\x07@\x02\x02\u02A5\u02A6\x07:\x02\x02\u02A6\u02A7\x07" +
		"A\x02\x02\u02A7k\x03\x02\x02\x02\u02A8\u02A9\x07\x15\x02\x02\u02A9\u02AA" +
		"\x07>\x02\x02\u02AA\u02AB\x079\x02\x02\u02AB\u02AC\x07?\x02\x02\u02AC" +
		"m\x03\x02\x02\x02\u02AD\u02AE\x07\x07\x02\x02\u02AE\u02AF\x07>\x02\x02" +
		"\u02AF\u02B0\x07H\x02\x02\u02B0\u02B1\x07?\x02\x02\u02B1\u02B7\x07<\x02" +
		"\x02\u02B2\u02B3\x07H\x02\x02\u02B3\u02B4\x07E\x02\x02\u02B4\u02B6\x05" +
		"p9\x02\u02B5\u02B2\x03\x02\x02\x02\u02B6\u02B9\x03\x02\x02\x02\u02B7\u02B5" +
		"\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02BA\x03\x02\x02\x02" +
		"\u02B9\u02B7\x03\x02\x02\x02\u02BA\u02BB\x07=\x02\x02\u02BBo\x03\x02\x02" +
		"\x02\u02BC\u02BD\x07\b\x02\x02\u02BD\u02BE\x07>\x02\x02\u02BE\u02BF\x07" +
		"9\x02\x02\u02BF\u02C0\x07C\x02\x02\u02C0\u02C1\x07>\x02\x02\u02C1\u02C2" +
		"\x07H\x02\x02\u02C2\u02C3\x07?\x02\x02\u02C3\u02C4\x07B\x02\x02\u02C4" +
		"\u02C5\x07<\x02\x02\u02C5\u02C6\x07=\x02\x02\u02C6\u02C7\x07?\x02\x02" +
		"\u02C7q\x03\x02\x02\x02G\x7F\x81\x91\x93\x9A\xA5\xA7\xC4\xD8\xDA\xE5\xFF" +
		"\u010D\u0110\u0119\u0121\u012D\u012F\u0134\u013C\u0144\u0148\u014A\u014F" +
		"\u0157\u0163\u0171\u0173\u0193\u019A\u01A4\u01B1\u01B3\u01BA\u01BE\u01C0" +
		"\u01C5\u01CC\u01D4\u01D6\u01EC\u01EE\u020D\u0216\u0218\u0222\u0224\u022A" +
		"\u0231\u0233\u023A\u0242\u0246\u0248\u0250\u0252\u025D\u0269\u026B\u0272" +
		"\u0277\u0279\u0285\u028B\u028E\u0296\u029E\u02A2\u02B7";
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
	public testBlock(): TestBlockContext[];
	public testBlock(i: number): TestBlockContext;
	public testBlock(i?: number): TestBlockContext | TestBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestBlockContext);
		} else {
			return this.getRuleContext(i, TestBlockContext);
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
	public tagBeforeEach(): TagBeforeEachContext[];
	public tagBeforeEach(i: number): TagBeforeEachContext;
	public tagBeforeEach(i?: number): TagBeforeEachContext | TagBeforeEachContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagBeforeEachContext);
		} else {
			return this.getRuleContext(i, TagBeforeEachContext);
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
	public tagTask(): TagTaskContext | undefined {
		return this.tryGetRuleContext(0, TagTaskContext);
	}
	public tagScreenshot(): TagScreenshotContext | undefined {
		return this.tryGetRuleContext(0, TagScreenshotContext);
	}
	public tagFixture(): TagFixtureContext | undefined {
		return this.tryGetRuleContext(0, TagFixtureContext);
	}
	public tagClickLink(): TagClickLinkContext | undefined {
		return this.tryGetRuleContext(0, TagClickLinkContext);
	}
	public tagRequest(): TagRequestContext | undefined {
		return this.tryGetRuleContext(0, TagRequestContext);
	}
	public tagGetCookie(): TagGetCookieContext | undefined {
		return this.tryGetRuleContext(0, TagGetCookieContext);
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
	public tagAttachFile(): TagAttachFileContext | undefined {
		return this.tryGetRuleContext(0, TagAttachFileContext);
	}
	public tagSubmit(): TagSubmitContext | undefined {
		return this.tryGetRuleContext(0, TagSubmitContext);
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
	public tagAs(): TagAsContext | undefined {
		return this.tryGetRuleContext(0, TagAsContext);
	}
	public OPEN_KEY(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public CLOSE_KEY(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.CLOSE_KEY, 0); }
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


export class TagRequestContext extends ParserRuleContext {
	public REQUEST(): TerminalNode { return this.getToken(ParserGrammarCypress.REQUEST, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	public PUNTO(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PUNTO, 0); }
	public tagIts(): TagItsContext | undefined {
		return this.tryGetRuleContext(0, TagItsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagRequest; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagRequest) {
			listener.enterTagRequest(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagRequest) {
			listener.exitTagRequest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagRequest) {
			return visitor.visitTagRequest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagTaskContext extends ParserRuleContext {
	public TASK(): TerminalNode { return this.getToken(ParserGrammarCypress.TASK, 0); }
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
	public tagVisit(): TagVisitContext | undefined {
		return this.tryGetRuleContext(0, TagVisitContext);
	}
	public tagSelector(): TagSelectorContext | undefined {
		return this.tryGetRuleContext(0, TagSelectorContext);
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
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagTask; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagTask) {
			listener.enterTagTask(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagTask) {
			listener.exitTagTask(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagTask) {
			return visitor.visitTagTask(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagGetCookieContext extends ParserRuleContext {
	public GET_COOKIE(): TerminalNode { return this.getToken(ParserGrammarCypress.GET_COOKIE, 0); }
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
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagGetCookie; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagGetCookie) {
			listener.enterTagGetCookie(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagGetCookie) {
			listener.exitTagGetCookie(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagGetCookie) {
			return visitor.visitTagGetCookie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagSubmitContext extends ParserRuleContext {
	public SUBMIT(): TerminalNode { return this.getToken(ParserGrammarCypress.SUBMIT, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagSubmit; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagSubmit) {
			listener.enterTagSubmit(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagSubmit) {
			listener.exitTagSubmit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagSubmit) {
			return visitor.visitTagSubmit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagFixtureContext extends ParserRuleContext {
	public FIXTURE(): TerminalNode { return this.getToken(ParserGrammarCypress.FIXTURE, 0); }
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
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagFixture; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagFixture) {
			listener.enterTagFixture(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagFixture) {
			listener.exitTagFixture(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagFixture) {
			return visitor.visitTagFixture(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagClickLinkContext extends ParserRuleContext {
	public CLICK_LINK(): TerminalNode { return this.getToken(ParserGrammarCypress.CLICK_LINK, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagClickLink; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagClickLink) {
			listener.enterTagClickLink(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagClickLink) {
			listener.exitTagClickLink(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagClickLink) {
			return visitor.visitTagClickLink(this);
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
	public tagShould(): TagShouldContext | undefined {
		return this.tryGetRuleContext(0, TagShouldContext);
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


export class TagSelectorContext extends ParserRuleContext {
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public SELECTOR(): TerminalNode { return this.getToken(ParserGrammarCypress.SELECTOR, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagSelector; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagSelector) {
			listener.enterTagSelector(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagSelector) {
			listener.exitTagSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagSelector) {
			return visitor.visitTagSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagNameContext extends ParserRuleContext {
	public OPEN_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_KEY, 0); }
	public NAMEN(): TerminalNode { return this.getToken(ParserGrammarCypress.NAMEN, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_KEY(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_KEY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagName; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagName) {
			listener.enterTagName(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagName) {
			listener.exitTagName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagName) {
			return visitor.visitTagName(this);
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


export class TagScreenshotContext extends ParserRuleContext {
	public SCREENSHOT(): TerminalNode { return this.getToken(ParserGrammarCypress.SCREENSHOT, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagScreenshot; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagScreenshot) {
			listener.enterTagScreenshot(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagScreenshot) {
			listener.exitTagScreenshot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagScreenshot) {
			return visitor.visitTagScreenshot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagAttachFileContext extends ParserRuleContext {
	public ATTACH_FILE(): TerminalNode { return this.getToken(ParserGrammarCypress.ATTACH_FILE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.OPEN_PARENTHESIS, 0); }
	public STRING(): TerminalNode { return this.getToken(ParserGrammarCypress.STRING, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(ParserGrammarCypress.CLOSE_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ParserGrammarCypress.RULE_tagAttachFile; }
	// @Override
	public enterRule(listener: ParserGrammarCypressListener): void {
		if (listener.enterTagAttachFile) {
			listener.enterTagAttachFile(this);
		}
	}
	// @Override
	public exitRule(listener: ParserGrammarCypressListener): void {
		if (listener.exitTagAttachFile) {
			listener.exitTagAttachFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ParserGrammarCypressVisitor<Result>): Result {
		if (visitor.visitTagAttachFile) {
			return visitor.visitTagAttachFile(this);
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
	public tagParam(): TagParamContext | undefined {
		return this.tryGetRuleContext(0, TagParamContext);
	}
	public PUNTO(): TerminalNode[];
	public PUNTO(i: number): TerminalNode;
	public PUNTO(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.PUNTO);
		} else {
			return this.getToken(ParserGrammarCypress.PUNTO, i);
		}
	}
	public tagAs(): TagAsContext | undefined {
		return this.tryGetRuleContext(0, TagAsContext);
	}
	public PARAMETER(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.PARAMETER, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.COMMA, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ParserGrammarCypress.STRING, 0); }
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
	public tagCy(): TagCyContext[];
	public tagCy(i: number): TagCyContext;
	public tagCy(i?: number): TagCyContext | TagCyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagCyContext);
		} else {
			return this.getRuleContext(i, TagCyContext);
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
	public tagThen(): TagThenContext | undefined {
		return this.tryGetRuleContext(0, TagThenContext);
	}
	public tagName(): TagNameContext | undefined {
		return this.tryGetRuleContext(0, TagNameContext);
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
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.COMMA);
		} else {
			return this.getToken(ParserGrammarCypress.COMMA, i);
		}
	}
	public PUNTO(): TerminalNode[];
	public PUNTO(i: number): TerminalNode;
	public PUNTO(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ParserGrammarCypress.PUNTO);
		} else {
			return this.getToken(ParserGrammarCypress.PUNTO, i);
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
	public tagIts(): TagItsContext | undefined {
		return this.tryGetRuleContext(0, TagItsContext);
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


