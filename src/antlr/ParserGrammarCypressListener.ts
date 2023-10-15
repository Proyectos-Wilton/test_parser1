// Generated from ./src/ParserGrammarCypress.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { TestBlockContext } from "./ParserGrammarCypress";
import { TagItContext } from "./ParserGrammarCypress";
import { TagCyContext } from "./ParserGrammarCypress";
import { TagGetContext } from "./ParserGrammarCypress";
import { TagBeforeEachContext } from "./ParserGrammarCypress";
import { TagAfterEachContext } from "./ParserGrammarCypress";
import { TagClickContext } from "./ParserGrammarCypress";
import { TagTypeContext } from "./ParserGrammarCypress";
import { TagWaitContext } from "./ParserGrammarCypress";
import { TagVisitContext } from "./ParserGrammarCypress";
import { TagUrlContext } from "./ParserGrammarCypress";
import { TagContainsContext } from "./ParserGrammarCypress";
import { TagInjectAxeContext } from "./ParserGrammarCypress";
import { TagCheckA11yContext } from "./ParserGrammarCypress";
import { TagThenContext } from "./ParserGrammarCypress";
import { TagShouldContext } from "./ParserGrammarCypress";
import { TagWithinContext } from "./ParserGrammarCypress";
import { ExpressionExpectContext } from "./ParserGrammarCypress";
import { TagEqualContext } from "./ParserGrammarCypress";
import { TagParamContext } from "./ParserGrammarCypress";
import { TagIndexContext } from "./ParserGrammarCypress";
import { TagPrintContext } from "./ParserGrammarCypress";
import { TagEventOnBeforeLoadContext } from "./ParserGrammarCypress";
import { TagEventListenerContext } from "./ParserGrammarCypress";
import { TagConstantContext } from "./ParserGrammarCypress";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ParserGrammarCypress`.
 */
export interface ParserGrammarCypressListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.testBlock`.
	 * @param ctx the parse tree
	 */
	enterTestBlock?: (ctx: TestBlockContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.testBlock`.
	 * @param ctx the parse tree
	 */
	exitTestBlock?: (ctx: TestBlockContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagIt`.
	 * @param ctx the parse tree
	 */
	enterTagIt?: (ctx: TagItContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagIt`.
	 * @param ctx the parse tree
	 */
	exitTagIt?: (ctx: TagItContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagCy`.
	 * @param ctx the parse tree
	 */
	enterTagCy?: (ctx: TagCyContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagCy`.
	 * @param ctx the parse tree
	 */
	exitTagCy?: (ctx: TagCyContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagGet`.
	 * @param ctx the parse tree
	 */
	enterTagGet?: (ctx: TagGetContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagGet`.
	 * @param ctx the parse tree
	 */
	exitTagGet?: (ctx: TagGetContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagBeforeEach`.
	 * @param ctx the parse tree
	 */
	enterTagBeforeEach?: (ctx: TagBeforeEachContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagBeforeEach`.
	 * @param ctx the parse tree
	 */
	exitTagBeforeEach?: (ctx: TagBeforeEachContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagAfterEach`.
	 * @param ctx the parse tree
	 */
	enterTagAfterEach?: (ctx: TagAfterEachContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagAfterEach`.
	 * @param ctx the parse tree
	 */
	exitTagAfterEach?: (ctx: TagAfterEachContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagClick`.
	 * @param ctx the parse tree
	 */
	enterTagClick?: (ctx: TagClickContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagClick`.
	 * @param ctx the parse tree
	 */
	exitTagClick?: (ctx: TagClickContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagType`.
	 * @param ctx the parse tree
	 */
	enterTagType?: (ctx: TagTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagType`.
	 * @param ctx the parse tree
	 */
	exitTagType?: (ctx: TagTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagWait`.
	 * @param ctx the parse tree
	 */
	enterTagWait?: (ctx: TagWaitContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagWait`.
	 * @param ctx the parse tree
	 */
	exitTagWait?: (ctx: TagWaitContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagVisit`.
	 * @param ctx the parse tree
	 */
	enterTagVisit?: (ctx: TagVisitContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagVisit`.
	 * @param ctx the parse tree
	 */
	exitTagVisit?: (ctx: TagVisitContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagUrl`.
	 * @param ctx the parse tree
	 */
	enterTagUrl?: (ctx: TagUrlContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagUrl`.
	 * @param ctx the parse tree
	 */
	exitTagUrl?: (ctx: TagUrlContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagContains`.
	 * @param ctx the parse tree
	 */
	enterTagContains?: (ctx: TagContainsContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagContains`.
	 * @param ctx the parse tree
	 */
	exitTagContains?: (ctx: TagContainsContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagInjectAxe`.
	 * @param ctx the parse tree
	 */
	enterTagInjectAxe?: (ctx: TagInjectAxeContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagInjectAxe`.
	 * @param ctx the parse tree
	 */
	exitTagInjectAxe?: (ctx: TagInjectAxeContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagCheckA11y`.
	 * @param ctx the parse tree
	 */
	enterTagCheckA11y?: (ctx: TagCheckA11yContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagCheckA11y`.
	 * @param ctx the parse tree
	 */
	exitTagCheckA11y?: (ctx: TagCheckA11yContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagThen`.
	 * @param ctx the parse tree
	 */
	enterTagThen?: (ctx: TagThenContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagThen`.
	 * @param ctx the parse tree
	 */
	exitTagThen?: (ctx: TagThenContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagShould`.
	 * @param ctx the parse tree
	 */
	enterTagShould?: (ctx: TagShouldContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagShould`.
	 * @param ctx the parse tree
	 */
	exitTagShould?: (ctx: TagShouldContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagWithin`.
	 * @param ctx the parse tree
	 */
	enterTagWithin?: (ctx: TagWithinContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagWithin`.
	 * @param ctx the parse tree
	 */
	exitTagWithin?: (ctx: TagWithinContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.expressionExpect`.
	 * @param ctx the parse tree
	 */
	enterExpressionExpect?: (ctx: ExpressionExpectContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.expressionExpect`.
	 * @param ctx the parse tree
	 */
	exitExpressionExpect?: (ctx: ExpressionExpectContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagEqual`.
	 * @param ctx the parse tree
	 */
	enterTagEqual?: (ctx: TagEqualContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagEqual`.
	 * @param ctx the parse tree
	 */
	exitTagEqual?: (ctx: TagEqualContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagParam`.
	 * @param ctx the parse tree
	 */
	enterTagParam?: (ctx: TagParamContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagParam`.
	 * @param ctx the parse tree
	 */
	exitTagParam?: (ctx: TagParamContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagIndex`.
	 * @param ctx the parse tree
	 */
	enterTagIndex?: (ctx: TagIndexContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagIndex`.
	 * @param ctx the parse tree
	 */
	exitTagIndex?: (ctx: TagIndexContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagPrint`.
	 * @param ctx the parse tree
	 */
	enterTagPrint?: (ctx: TagPrintContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagPrint`.
	 * @param ctx the parse tree
	 */
	exitTagPrint?: (ctx: TagPrintContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagEventOnBeforeLoad`.
	 * @param ctx the parse tree
	 */
	enterTagEventOnBeforeLoad?: (ctx: TagEventOnBeforeLoadContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagEventOnBeforeLoad`.
	 * @param ctx the parse tree
	 */
	exitTagEventOnBeforeLoad?: (ctx: TagEventOnBeforeLoadContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagEventListener`.
	 * @param ctx the parse tree
	 */
	enterTagEventListener?: (ctx: TagEventListenerContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagEventListener`.
	 * @param ctx the parse tree
	 */
	exitTagEventListener?: (ctx: TagEventListenerContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagConstant`.
	 * @param ctx the parse tree
	 */
	enterTagConstant?: (ctx: TagConstantContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagConstant`.
	 * @param ctx the parse tree
	 */
	exitTagConstant?: (ctx: TagConstantContext) => void;
}

