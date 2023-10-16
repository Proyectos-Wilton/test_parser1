// Generated from ./src/ParserGrammarCypress.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { TestBlockContext } from "./ParserGrammarCypress";
import { TagContextContext } from "./ParserGrammarCypress";
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
import { TagOnContext } from "./ParserGrammarCypress";
import { TagInterceptContext } from "./ParserGrammarCypress";
import { TagWindowContext } from "./ParserGrammarCypress";
import { TagSelectContext } from "./ParserGrammarCypress";
import { TagPauseContext } from "./ParserGrammarCypress";
import { TagTittleContext } from "./ParserGrammarCypress";
import { TagFunctionContext } from "./ParserGrammarCypress";
import { TagFindContext } from "./ParserGrammarCypress";
import { TagStubContext } from "./ParserGrammarCypress";
import { TagContainsContext } from "./ParserGrammarCypress";
import { TagInjectAxeContext } from "./ParserGrammarCypress";
import { TagCheckA11yContext } from "./ParserGrammarCypress";
import { TagCheckContext } from "./ParserGrammarCypress";
import { TagItsContext } from "./ParserGrammarCypress";
import { TagInvokeContext } from "./ParserGrammarCypress";
import { TagWhichContext } from "./ParserGrammarCypress";
import { TagTargetContext } from "./ParserGrammarCypress";
import { TagValueContext } from "./ParserGrammarCypress";
import { TagLocationContext } from "./ParserGrammarCypress";
import { TagFirstContext } from "./ParserGrammarCypress";
import { TagEqContext } from "./ParserGrammarCypress";
import { TagThenContext } from "./ParserGrammarCypress";
import { TagShouldContext } from "./ParserGrammarCypress";
import { TagWithinContext } from "./ParserGrammarCypress";
import { TagAndContext } from "./ParserGrammarCypress";
import { TagDataStringContext } from "./ParserGrammarCypress";
import { TagWrapContext } from "./ParserGrammarCypress";
import { ExpressionExpectContext } from "./ParserGrammarCypress";
import { TagEqualContext } from "./ParserGrammarCypress";
import { TagParamContext } from "./ParserGrammarCypress";
import { TagIndexContext } from "./ParserGrammarCypress";
import { TagAsContext } from "./ParserGrammarCypress";
import { TagEventOnBeforeLoadContext } from "./ParserGrammarCypress";
import { TagEventListenerContext } from "./ParserGrammarCypress";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ParserGrammarCypress`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ParserGrammarCypressVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.testBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTestBlock?: (ctx: TestBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagContext`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagContext?: (ctx: TagContextContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagIt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagIt?: (ctx: TagItContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagCy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagCy?: (ctx: TagCyContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagGet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagGet?: (ctx: TagGetContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagBeforeEach`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagBeforeEach?: (ctx: TagBeforeEachContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagAfterEach`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagAfterEach?: (ctx: TagAfterEachContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagClick`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagClick?: (ctx: TagClickContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagType?: (ctx: TagTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagWait`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagWait?: (ctx: TagWaitContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagVisit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagVisit?: (ctx: TagVisitContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagUrl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagUrl?: (ctx: TagUrlContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagOn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagOn?: (ctx: TagOnContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagIntercept`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagIntercept?: (ctx: TagInterceptContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagWindow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagWindow?: (ctx: TagWindowContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagSelect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagSelect?: (ctx: TagSelectContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagPause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagPause?: (ctx: TagPauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagTittle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagTittle?: (ctx: TagTittleContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagFunction?: (ctx: TagFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagFind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagFind?: (ctx: TagFindContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagStub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagStub?: (ctx: TagStubContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagContains`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagContains?: (ctx: TagContainsContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagInjectAxe`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagInjectAxe?: (ctx: TagInjectAxeContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagCheckA11y`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagCheckA11y?: (ctx: TagCheckA11yContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagCheck`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagCheck?: (ctx: TagCheckContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagIts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagIts?: (ctx: TagItsContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagInvoke`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagInvoke?: (ctx: TagInvokeContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagWhich`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagWhich?: (ctx: TagWhichContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagTarget`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagTarget?: (ctx: TagTargetContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagValue?: (ctx: TagValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagLocation?: (ctx: TagLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagFirst`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagFirst?: (ctx: TagFirstContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagEq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagEq?: (ctx: TagEqContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagThen`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagThen?: (ctx: TagThenContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagShould`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagShould?: (ctx: TagShouldContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagWithin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagWithin?: (ctx: TagWithinContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagAnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagAnd?: (ctx: TagAndContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagDataString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagDataString?: (ctx: TagDataStringContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagWrap`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagWrap?: (ctx: TagWrapContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.expressionExpect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionExpect?: (ctx: ExpressionExpectContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagEqual`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagEqual?: (ctx: TagEqualContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagParam?: (ctx: TagParamContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagIndex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagIndex?: (ctx: TagIndexContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagAs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagAs?: (ctx: TagAsContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagEventOnBeforeLoad`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagEventOnBeforeLoad?: (ctx: TagEventOnBeforeLoadContext) => Result;

	/**
	 * Visit a parse tree produced by `ParserGrammarCypress.tagEventListener`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagEventListener?: (ctx: TagEventListenerContext) => Result;
}

