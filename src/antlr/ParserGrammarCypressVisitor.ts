// Generated from ./src/ParserGrammarCypress.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
import { TagThenContext } from "./ParserGrammarCypress";
import { TagShouldContext } from "./ParserGrammarCypress";
import { TagWithinContext } from "./ParserGrammarCypress";
import { ExpressionExpectContext } from "./ParserGrammarCypress";
import { TagEqualContext } from "./ParserGrammarCypress";
import { TagParamContext } from "./ParserGrammarCypress";
import { TagIndexContext } from "./ParserGrammarCypress";


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
}

