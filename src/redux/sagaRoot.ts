import { all } from "redux-saga/effects";
import {userDataWatcher} from "./auth/sagas";
import {getUsersWatcher} from "./users/sagas";
import {initializeAppWatcher} from "./app/sagas";
import {profileDataWatcher} from "./profile/sagas";

export default function* rootSaga() {
    yield all([
        userDataWatcher(),
        getUsersWatcher(),
        initializeAppWatcher(),
        profileDataWatcher(),
    ])
}
