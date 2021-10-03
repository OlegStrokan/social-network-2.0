import {authReducer} from "./auth/reducer";
import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagaRoot";
import {usersReducer} from "./users/reducer";
import {appReducer} from "./app/reducer";
import {profileReducer} from "./profile/reducer";
import chatReducer from "./chat/reducer";
import {weatherReducer} from "./weather/reducer";

let rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    profile: profileReducer,
    app: appReducer,
    chat: chatReducer,
    weather: weatherReducer,
})

type RootReducerType = typeof rootReducer; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

const sagaMiddleware = createSagaMiddleware()

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
