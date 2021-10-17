import {call, put, takeEvery} from "redux-saga/effects";
import {appActions} from "./reducer";
import {getUserData} from "../auth/sagas";

export function* initializeApp(): any{
    try {
        yield put(appActions.requestInitialized())
       yield call(getUserData)
       yield put(appActions.initializedSuccess())
    }
    catch (error) {
        yield put(appActions.initializedFailed())
    }
}

export function* initializeAppWatcher() {
    // @ts-ignore
    yield takeEvery('FETCHED_INITIALIZE_APP', initializeApp);
}
