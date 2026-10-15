import { GraphState } from "../graph";

export function identifyIntent(state: GraphState): GraphState{
    const input = state.message.at(-1)?.text ?? ""

    const inputLower = input.toLowerCase()

    let command: GraphState['command'] = 'unknown'

    if(inputLower.includes('upper')){
        command = 'uppercase'
    }else if (inputLower.includes('lower')){
        command = 'lowecase'
    }

    return{
        ...state,
        command,
        output: input
    }
}