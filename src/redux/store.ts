import {authReducer} from "./auth/reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagaRoot";
import {usersReducer} from "./users/reducer";
import {appReducer} from "./app/reducer";
import {profileReducer} from "./profile/reducer";

let rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    profile: profileReducer,
    app: appReducer,
})

type RootReducerType = typeof rootReducer; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

const sagaMiddleware = createSagaMiddleware()

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
