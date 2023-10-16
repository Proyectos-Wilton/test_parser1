// Generated from ./src/ParserGrammarCypress.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
	 * Enter a parse tree produced by `ParserGrammarCypress.tagContext`.
	 * @param ctx the parse tree
	 */
	enterTagContext?: (ctx: TagContextContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagContext`.
	 * @param ctx the parse tree
	 */
	exitTagContext?: (ctx: TagContextContext) => void;

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
	 * Enter a parse tree produced by `ParserGrammarCypress.tagOn`.
	 * @param ctx the parse tree
	 */
	enterTagOn?: (ctx: TagOnContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagOn`.
	 * @param ctx the parse tree
	 */
	exitTagOn?: (ctx: TagOnContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagIntercept`.
	 * @param ctx the parse tree
	 */
	enterTagIntercept?: (ctx: TagInterceptContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagIntercept`.
	 * @param ctx the parse tree
	 */
	exitTagIntercept?: (ctx: TagInterceptContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagWindow`.
	 * @param ctx the parse tree
	 */
	enterTagWindow?: (ctx: TagWindowContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagWindow`.
	 * @param ctx the parse tree
	 */
	exitTagWindow?: (ctx: TagWindowContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagSelect`.
	 * @param ctx the parse tree
	 */
	enterTagSelect?: (ctx: TagSelectContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagSelect`.
	 * @param ctx the parse tree
	 */
	exitTagSelect?: (ctx: TagSelectContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagPause`.
	 * @param ctx the parse tree
	 */
	enterTagPause?: (ctx: TagPauseContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagPause`.
	 * @param ctx the parse tree
	 */
	exitTagPause?: (ctx: TagPauseContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagTittle`.
	 * @param ctx the parse tree
	 */
	enterTagTittle?: (ctx: TagTittleContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagTittle`.
	 * @param ctx the parse tree
	 */
	exitTagTittle?: (ctx: TagTittleContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagFunction`.
	 * @param ctx the parse tree
	 */
	enterTagFunction?: (ctx: TagFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagFunction`.
	 * @param ctx the parse tree
	 */
	exitTagFunction?: (ctx: TagFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagFind`.
	 * @param ctx the parse tree
	 */
	enterTagFind?: (ctx: TagFindContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagFind`.
	 * @param ctx the parse tree
	 */
	exitTagFind?: (ctx: TagFindContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagStub`.
	 * @param ctx the parse tree
	 */
	enterTagStub?: (ctx: TagStubContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagStub`.
	 * @param ctx the parse tree
	 */
	exitTagStub?: (ctx: TagStubContext) => void;

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
	 * Enter a parse tree produced by `ParserGrammarCypress.tagCheck`.
	 * @param ctx the parse tree
	 */
	enterTagCheck?: (ctx: TagCheckContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagCheck`.
	 * @param ctx the parse tree
	 */
	exitTagCheck?: (ctx: TagCheckContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagIts`.
	 * @param ctx the parse tree
	 */
	enterTagIts?: (ctx: TagItsContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagIts`.
	 * @param ctx the parse tree
	 */
	exitTagIts?: (ctx: TagItsContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagInvoke`.
	 * @param ctx the parse tree
	 */
	enterTagInvoke?: (ctx: TagInvokeContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagInvoke`.
	 * @param ctx the parse tree
	 */
	exitTagInvoke?: (ctx: TagInvokeContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagWhich`.
	 * @param ctx the parse tree
	 */
	enterTagWhich?: (ctx: TagWhichContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagWhich`.
	 * @param ctx the parse tree
	 */
	exitTagWhich?: (ctx: TagWhichContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagTarget`.
	 * @param ctx the parse tree
	 */
	enterTagTarget?: (ctx: TagTargetContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagTarget`.
	 * @param ctx the parse tree
	 */
	exitTagTarget?: (ctx: TagTargetContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagValue`.
	 * @param ctx the parse tree
	 */
	enterTagValue?: (ctx: TagValueContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagValue`.
	 * @param ctx the parse tree
	 */
	exitTagValue?: (ctx: TagValueContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagLocation`.
	 * @param ctx the parse tree
	 */
	enterTagLocation?: (ctx: TagLocationContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagLocation`.
	 * @param ctx the parse tree
	 */
	exitTagLocation?: (ctx: TagLocationContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagFirst`.
	 * @param ctx the parse tree
	 */
	enterTagFirst?: (ctx: TagFirstContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagFirst`.
	 * @param ctx the parse tree
	 */
	exitTagFirst?: (ctx: TagFirstContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagEq`.
	 * @param ctx the parse tree
	 */
	enterTagEq?: (ctx: TagEqContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagEq`.
	 * @param ctx the parse tree
	 */
	exitTagEq?: (ctx: TagEqContext) => void;

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
	 * Enter a parse tree produced by `ParserGrammarCypress.tagAnd`.
	 * @param ctx the parse tree
	 */
	enterTagAnd?: (ctx: TagAndContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagAnd`.
	 * @param ctx the parse tree
	 */
	exitTagAnd?: (ctx: TagAndContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagDataString`.
	 * @param ctx the parse tree
	 */
	enterTagDataString?: (ctx: TagDataStringContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagDataString`.
	 * @param ctx the parse tree
	 */
	exitTagDataString?: (ctx: TagDataStringContext) => void;

	/**
	 * Enter a parse tree produced by `ParserGrammarCypress.tagWrap`.
	 * @param ctx the parse tree
	 */
	enterTagWrap?: (ctx: TagWrapContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagWrap`.
	 * @param ctx the parse tree
	 */
	exitTagWrap?: (ctx: TagWrapContext) => void;

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
	 * Enter a parse tree produced by `ParserGrammarCypress.tagAs`.
	 * @param ctx the parse tree
	 */
	enterTagAs?: (ctx: TagAsContext) => void;
	/**
	 * Exit a parse tree produced by `ParserGrammarCypress.tagAs`.
	 * @param ctx the parse tree
	 */
	exitTagAs?: (ctx: TagAsContext) => void;

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
}

