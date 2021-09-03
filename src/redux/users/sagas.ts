import {call, put, takeEvery} from "redux-saga/effects";
import {usersActions} from "./reducer";
import {usersAPI} from "../../api/social-network-api/users-api";


export function* getUsers (payload: any): any {
    try {
        yield put(usersActions.requestUsers())
        yield put(usersActions.setCurrentPage(payload.currentPage))
        yield put(usersActions.setFilter({term: payload.term,friend: payload.friend}))
        const data = yield call(usersAPI.getUsers, payload.currentPage, payload.pageSize, payload.term, payload.friend)
        yield put(usersActions.requestUsersSuccess(data))
    } catch (error) {
        yield put(usersActions.requestUsersFailed())
    }
}

export function* follow (payload: any): any {
    try {
        yield put(usersActions.requestUsers())
        const data = yield call(usersAPI.follow, payload.userId)
        yield put(usersActions.followSuccess(data))
    }
    catch (error) {
        yield put(usersActions.requestUsersFailed())
    }

}

export function* unfollow (payload: any): any {
    try {
        yield put(usersActions.requestUsers())
        const data = yield call(usersAPI.unfollow, payload.userId)
        yield put(usersActions.unfollowSuccess(data))
    }
    catch (error) {
        yield put(usersActions.requestUsersFailed())
    }

}

export function* getUsersWatcher () {
    yield takeEvery('FETCHED_USERS', getUsers);
    yield takeEvery('FETCHED_FOLLOW', follow);
    yield takeEvery('FETCHED_UNFOLLOW', unfollow);
}
