import { END, MessagesZodMeta, START, StateGraph } from "@langchain/langgraph";
import { withLangGraph } from "@langchain/langgraph/zod";
import { BaseMessage } from "langchain";
import { z } from "zod/v3";
import { identifyIntent } from "./nodes/identifyIntentNode";
import { chatResponseNode } from "./nodes/chatResponseNode";


const GraphState = z.object({
    message: withLangGraph(
        z.custom<BaseMessage[]>(),
        MessagesZodMeta
    ),
    output: z.string(),
    command: z.enum(['uppercase', 'lowecase', 'unknown']),
})

export type GraphState = z.infer<typeof GraphState>;

export function createGraph() {
    const workflow = new StateGraph(GraphState)
    .addNode("identifyIntent", identifyIntent)
    .addNode("chatResponse", chatResponseNode)
    .addEdge(START, "identifyIntent")
    .addEdge("identifyIntent", "chatResponse")
    .addEdge("chatResponse", END);

    return workflow.compile();
}