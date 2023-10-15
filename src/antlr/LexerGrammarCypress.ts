// Generated from ./src/LexerGrammarCypress.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class LexerGrammarCypress extends Lexer {
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
	public static readonly OPEN_PARENTHESIS = 24;
	public static readonly CLOSE_PARENTHESIS = 25;
	public static readonly OPEN_BRACKET = 26;
	public static readonly CLOSE_BRACKET = 27;
	public static readonly ENTONCES = 28;
	public static readonly COMMA = 29;
	public static readonly PUNTO = 30;
	public static readonly COMMENT1 = 31;
	public static readonly COMMENT2 = 32;
	public static readonly PARAMETER = 33;
	public static readonly PESO = 34;
	public static readonly INNERTEXT = 35;
	public static readonly LENGTH = 36;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"DESCRIBE", "IT", "BEFORE_EACH", "AFTER_EACH", "CY", "VISIT", "WAIT", 
		"GET", "URL", "SHOULD", "WITHIN", "THEN", "EXPECT", "TO", "EQUAL", "CLICK", 
		"TYPE", "EXIST", "STRING", "NUMBER", "WS", "OPEN_KEY", "CLOSE_KEY", "OPEN_PARENTHESIS", 
		"CLOSE_PARENTHESIS", "OPEN_BRACKET", "CLOSE_BRACKET", "ENTONCES", "COMMA", 
		"PUNTO", "COMMENT1", "COMMENT2", "PARAMETER", "PESO", "INNERTEXT", "LENGTH",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'describe'", "'it'", "'beforeEach'", "'afterEach'", "'cy'", 
		"'visit'", "'wait'", "'get'", "'url'", "'should'", "'within'", "'then'", 
		"'expect'", "'to'", "'equal'", "'click'", "'type'", "'exist'", undefined, 
		undefined, undefined, "'{'", "'}'", "'('", "')'", "'['", "']'", "'=>'", 
		"','", "'.'", undefined, undefined, undefined, "'$'", "'.innerText'", 
		"'.length'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DESCRIBE", "IT", "BEFORE_EACH", "AFTER_EACH", "CY", "VISIT", 
		"WAIT", "GET", "URL", "SHOULD", "WITHIN", "THEN", "EXPECT", "TO", "EQUAL", 
		"CLICK", "TYPE", "EXIST", "STRING", "NUMBER", "WS", "OPEN_KEY", "CLOSE_KEY", 
		"OPEN_PARENTHESIS", "CLOSE_PARENTHESIS", "OPEN_BRACKET", "CLOSE_BRACKET", 
		"ENTONCES", "COMMA", "PUNTO", "COMMENT1", "COMMENT2", "PARAMETER", "PESO", 
		"INNERTEXT", "LENGTH",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LexerGrammarCypress._LITERAL_NAMES, LexerGrammarCypress._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LexerGrammarCypress.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(LexerGrammarCypress._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "LexerGrammarCypress.g4"; }

	// @Override
	public get ruleNames(): string[] { return LexerGrammarCypress.ruleNames; }

	// @Override
	public get serializedATN(): string { return LexerGrammarCypress._serializedATN; }

	// @Override
	public get channelNames(): string[] { return LexerGrammarCypress.channelNames; }

	// @Override
	public get modeNames(): string[] { return LexerGrammarCypress.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02&\u011C\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n" +
		"\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x07\x14\xB9\n\x14\f\x14" +
		"\x0E\x14\xBC\v\x14\x03\x14\x03\x14\x03\x14\x07\x14\xC1\n\x14\f\x14\x0E" +
		"\x14\xC4\v\x14\x03\x14\x05\x14\xC7\n\x14\x03\x15\x06\x15\xCA\n\x15\r\x15" +
		"\x0E\x15\xCB\x03\x16\x06\x16\xCF\n\x16\r\x16\x0E\x16\xD0\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B" +
		"\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03 \x03 \x03 \x03 \x07 \xEC\n \f \x0E \xEF\v \x03 \x03 \x03" +
		"!\x03!\x03!\x03!\x07!\xF7\n!\f!\x0E!\xFA\v!\x03!\x03!\x03!\x03!\x03!\x03" +
		"\"\x03\"\x07\"\u0103\n\"\f\"\x0E\"\u0106\v\"\x03#\x03#\x03$\x03$\x03$" +
		"\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x03\xF8\x02\x02&\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
		"\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
		"\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%" +
		"\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B" +
		"5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02" +
		"%I\x02&\x03\x02\t\x03\x02))\x03\x02$$\x03\x022;\x05\x02\v\f\x0F\x0F\"" +
		"\"\x04\x02\f\f\x0F\x0F\x05\x02C\\aac|\x06\x022;C\\aac|\x02\u0123\x02\x03" +
		"\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t" +
		"\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03" +
		"\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03" +
		"\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03" +
		"\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03" +
		"\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02" +
		"\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02" +
		"/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02" +
		"\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02" +
		"\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03" +
		"\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02" +
		"\x02\x03K\x03\x02\x02\x02\x05T\x03\x02\x02\x02\x07W\x03\x02\x02\x02\t" +
		"b\x03\x02\x02\x02\vl\x03\x02\x02\x02\ro\x03\x02\x02\x02\x0Fu\x03\x02\x02" +
		"\x02\x11z\x03\x02\x02\x02\x13~\x03\x02\x02\x02\x15\x82\x03\x02\x02\x02" +
		"\x17\x89\x03\x02\x02\x02\x19\x90\x03\x02\x02\x02\x1B\x95\x03\x02\x02\x02" +
		"\x1D\x9C\x03\x02\x02\x02\x1F\x9F\x03\x02\x02\x02!\xA5\x03\x02\x02\x02" +
		"#\xAB\x03\x02\x02\x02%\xB0\x03\x02\x02\x02\'\xC6\x03\x02\x02\x02)\xC9" +
		"\x03\x02\x02\x02+\xCE\x03\x02\x02\x02-\xD4\x03\x02\x02\x02/\xD6\x03\x02" +
		"\x02\x021\xD8\x03\x02\x02\x023\xDA\x03\x02\x02\x025\xDC\x03\x02\x02\x02" +
		"7\xDE\x03\x02\x02\x029\xE0\x03\x02\x02\x02;\xE3\x03\x02\x02\x02=\xE5\x03" +
		"\x02\x02\x02?\xE7\x03\x02\x02\x02A\xF2\x03\x02\x02\x02C\u0100\x03\x02" +
		"\x02\x02E\u0107\x03\x02\x02\x02G\u0109\x03\x02\x02\x02I\u0114\x03\x02" +
		"\x02\x02KL\x07f\x02\x02LM\x07g\x02\x02MN\x07u\x02\x02NO\x07e\x02\x02O" +
		"P\x07t\x02\x02PQ\x07k\x02\x02QR\x07d\x02\x02RS\x07g\x02\x02S\x04\x03\x02" +
		"\x02\x02TU\x07k\x02\x02UV\x07v\x02\x02V\x06\x03\x02\x02\x02WX\x07d\x02" +
		"\x02XY\x07g\x02\x02YZ\x07h\x02\x02Z[\x07q\x02\x02[\\\x07t\x02\x02\\]\x07" +
		"g\x02\x02]^\x07G\x02\x02^_\x07c\x02\x02_`\x07e\x02\x02`a\x07j\x02\x02" +
		"a\b\x03\x02\x02\x02bc\x07c\x02\x02cd\x07h\x02\x02de\x07v\x02\x02ef\x07" +
		"g\x02\x02fg\x07t\x02\x02gh\x07G\x02\x02hi\x07c\x02\x02ij\x07e\x02\x02" +
		"jk\x07j\x02\x02k\n\x03\x02\x02\x02lm\x07e\x02\x02mn\x07{\x02\x02n\f\x03" +
		"\x02\x02\x02op\x07x\x02\x02pq\x07k\x02\x02qr\x07u\x02\x02rs\x07k\x02\x02" +
		"st\x07v\x02\x02t\x0E\x03\x02\x02\x02uv\x07y\x02\x02vw\x07c\x02\x02wx\x07" +
		"k\x02\x02xy\x07v\x02\x02y\x10\x03\x02\x02\x02z{\x07i\x02\x02{|\x07g\x02" +
		"\x02|}\x07v\x02\x02}\x12\x03\x02\x02\x02~\x7F\x07w\x02\x02\x7F\x80\x07" +
		"t\x02\x02\x80\x81\x07n\x02\x02\x81\x14\x03\x02\x02\x02\x82\x83\x07u\x02" +
		"\x02\x83\x84\x07j\x02\x02\x84\x85\x07q\x02\x02\x85\x86\x07w\x02\x02\x86" +
		"\x87\x07n\x02\x02\x87\x88\x07f\x02\x02\x88\x16\x03\x02\x02\x02\x89\x8A" +
		"\x07y\x02\x02\x8A\x8B\x07k\x02\x02\x8B\x8C\x07v\x02\x02\x8C\x8D\x07j\x02" +
		"\x02\x8D\x8E\x07k\x02\x02\x8E\x8F\x07p\x02\x02\x8F\x18\x03\x02\x02\x02" +
		"\x90\x91\x07v\x02\x02\x91\x92\x07j\x02\x02\x92\x93\x07g\x02\x02\x93\x94" +
		"\x07p\x02\x02\x94\x1A\x03\x02\x02\x02\x95\x96\x07g\x02\x02\x96\x97\x07" +
		"z\x02\x02\x97\x98\x07r\x02\x02\x98\x99\x07g\x02\x02\x99\x9A\x07e\x02\x02" +
		"\x9A\x9B\x07v\x02\x02\x9B\x1C\x03\x02\x02\x02\x9C\x9D\x07v\x02\x02\x9D" +
		"\x9E\x07q\x02\x02\x9E\x1E\x03\x02\x02\x02\x9F\xA0\x07g\x02\x02\xA0\xA1" +
		"\x07s\x02\x02\xA1\xA2\x07w\x02\x02\xA2\xA3\x07c\x02\x02\xA3\xA4\x07n\x02" +
		"\x02\xA4 \x03\x02\x02\x02\xA5\xA6\x07e\x02\x02\xA6\xA7\x07n\x02\x02\xA7" +
		"\xA8\x07k\x02\x02\xA8\xA9\x07e\x02\x02\xA9\xAA\x07m\x02\x02\xAA\"\x03" +
		"\x02\x02\x02\xAB\xAC\x07v\x02\x02\xAC\xAD\x07{\x02\x02\xAD\xAE\x07r\x02" +
		"\x02\xAE\xAF\x07g\x02\x02\xAF$\x03\x02\x02\x02\xB0\xB1\x07g\x02\x02\xB1" +
		"\xB2\x07z\x02\x02\xB2\xB3\x07k\x02\x02\xB3\xB4\x07u\x02\x02\xB4\xB5\x07" +
		"v\x02\x02\xB5&\x03\x02\x02\x02\xB6\xBA\x07)\x02\x02\xB7\xB9\n\x02\x02" +
		"\x02\xB8\xB7\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02" +
		"\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBD\x03\x02\x02\x02\xBC\xBA\x03\x02\x02" +
		"\x02\xBD\xC7\x07)\x02\x02\xBE\xC2\x07$\x02\x02\xBF\xC1\n\x03\x02\x02\xC0" +
		"\xBF\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2" +
		"\xC3\x03\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5" +
		"\xC7\x07$\x02\x02\xC6\xB6\x03\x02\x02\x02\xC6\xBE\x03\x02\x02\x02\xC7" +
		"(\x03\x02\x02\x02\xC8\xCA\t\x04\x02\x02\xC9\xC8\x03\x02\x02\x02\xCA\xCB" +
		"\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC*" +
		"\x03\x02\x02\x02\xCD\xCF\t\x05\x02\x02\xCE\xCD\x03\x02\x02\x02\xCF\xD0" +
		"\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2" +
		"\x03\x02\x02\x02\xD2\xD3\b\x16\x02\x02\xD3,\x03\x02\x02\x02\xD4\xD5\x07" +
		"}\x02\x02\xD5.\x03\x02\x02\x02\xD6\xD7\x07\x7F\x02\x02\xD70\x03\x02\x02" +
		"\x02\xD8\xD9\x07*\x02\x02\xD92\x03\x02\x02\x02\xDA\xDB\x07+\x02\x02\xDB" +
		"4\x03\x02\x02\x02\xDC\xDD\x07]\x02\x02\xDD6\x03\x02\x02\x02\xDE\xDF\x07" +
		"_\x02\x02\xDF8\x03\x02\x02\x02\xE0\xE1\x07?\x02\x02\xE1\xE2\x07@\x02\x02" +
		"\xE2:\x03\x02\x02\x02\xE3\xE4\x07.\x02\x02\xE4<\x03\x02\x02\x02\xE5\xE6" +
		"\x070\x02\x02\xE6>\x03\x02\x02\x02\xE7\xE8\x071\x02\x02\xE8\xE9\x071\x02" +
		"\x02\xE9\xED\x03\x02\x02\x02\xEA\xEC\n\x06\x02\x02\xEB\xEA\x03\x02\x02" +
		"\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02" +
		"\x02\xEE\xF0\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xF1\b \x02\x02" +
		"\xF1@\x03\x02\x02\x02\xF2\xF3\x071\x02\x02\xF3\xF4\x07,\x02\x02\xF4\xF8" +
		"\x03\x02\x02\x02\xF5\xF7\v\x02\x02\x02\xF6\xF5\x03\x02\x02\x02\xF7\xFA" +
		"\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFB" +
		"\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFC\x07,\x02\x02\xFC\xFD" +
		"\x071\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\b!\x02\x02\xFFB\x03\x02" +
		"\x02\x02\u0100\u0104\t\x07\x02\x02\u0101\u0103\t\b\x02\x02\u0102\u0101" +
		"\x03\x02\x02\x02\u0103\u0106\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02" +
		"\u0104\u0105\x03\x02\x02\x02\u0105D\x03\x02\x02\x02\u0106\u0104\x03\x02" +
		"\x02\x02\u0107\u0108\x07&\x02\x02\u0108F\x03\x02\x02\x02\u0109\u010A\x07" +
		"0\x02\x02\u010A\u010B\x07k\x02\x02\u010B\u010C\x07p\x02\x02\u010C\u010D" +
		"\x07p\x02\x02\u010D\u010E\x07g\x02\x02\u010E\u010F\x07t\x02\x02\u010F" +
		"\u0110\x07V\x02\x02\u0110\u0111\x07g\x02\x02\u0111\u0112\x07z\x02\x02" +
		"\u0112\u0113\x07v\x02\x02\u0113H\x03\x02\x02\x02\u0114\u0115\x070\x02" +
		"\x02\u0115\u0116\x07n\x02\x02\u0116\u0117\x07g\x02\x02\u0117\u0118\x07" +
		"p\x02\x02\u0118\u0119\x07i\x02\x02\u0119\u011A\x07v\x02\x02\u011A\u011B" +
		"\x07j\x02\x02\u011BJ\x03\x02\x02\x02\v\x02\xBA\xC2\xC6\xCB\xD0\xED\xF8" +
		"\u0104\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LexerGrammarCypress.__ATN) {
			LexerGrammarCypress.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LexerGrammarCypress._serializedATN));
		}

		return LexerGrammarCypress.__ATN;
	}

}

