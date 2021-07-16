
import {v1} from 'uuid'
import {ChatMessageAPIType, StatusType} from "../../api/social-network-api/chat-api";
import {InferActionsTypes} from "../store";

type ChatMessageType = ChatMessageAPIType & {id: string}

let initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
}

const chatReducer = (state = initialState, action: ActionsType): ChatStateType => {
    switch (action.type) {
        case 'MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map( m => ({...m, id: v1() }))]
                    .filter((m, index, array) => index >= array.length - 100)
            }
        case 'STATUS_CHANGED':
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state
    }
}

export const chatActions = {
    messagesReceived: (messages: ChatMessageAPIType[]) => ({type: 'MESSAGES_RECEIVED', payload: {messages}} as const),
    statusChanged: (status: StatusType) => ({type: 'STATUS_CHANGED', payload: {status}} as const)
}



export default chatReducer

export type ChatStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof chatActions>
