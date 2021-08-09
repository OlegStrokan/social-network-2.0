import {takeEvery, put, call} from "redux-saga/effects";
import {chatAPI, ChatMessageAPIType, StatusType} from "../../api/social-network-api/chat-api";
import {chatActions} from "./reducer";


let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null

export function* newMessageHandlerCreator(payload: any): any {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            //yield put(chatActions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null

export function* statusChangedHandlerCreator (payload: any): any {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            //yield put(chatActions.statusChanged(status))
        }
    }
    return _statusChangedHandler
}

export function* startMessagesListening(): any {
    yield call(chatAPI.start)
    yield call(chatAPI.subscribe('messages-received', newMessageHandlerCreator))
    yield call(chatAPI.subscribe('status-changed', statusChangedHandlerCreator))

}
export function stopMessagesListening():any {
    chatAPI.unsubscribe('messages-received', newMessageHandlerCreator)
    chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator)
    chatAPI.stop()
}

export function* sendMessage(message: string): any {
    yield call(chatAPI.sendMessage, message)
}

export function* chatWatcher () {

}
