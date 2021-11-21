import {call, put, takeEvery} from "redux-saga/effects";
import {usersAPI} from "../../api/users-api";
import {
    requestCurrentPage,
    requestFilterInterface, requestFollowSuccess, requestUnfollowSuccess,
    requestUsers, requestUsersFailed,
    requestUserSuccess
} from './action-creators';
import {
    FetchedFollowInterface,
    FetchedUnfollowInterface,
    FetchedUsersInterface,
    UserActionTypes
} from './action-types';


export function* getUsers ({payload}: FetchedUsersInterface) {
    try {
        yield put(requestUsers())
        yield put(requestCurrentPage(payload.currentPage))
        yield put(requestFilterInterface({term: payload.term, friend: payload.friend}))
        const { data } = yield call(usersAPI.getUsers, payload)
        yield put(requestUserSuccess(data))
    } catch (error) {
        yield put(requestUsersFailed(error))
    }
}

export function* follow ({ payload }: FetchedFollowInterface)  {
    try {
        yield put(requestUsers())
        const { data } = yield call(usersAPI.follow, payload)
        yield put(requestFollowSuccess(data))
    }
    catch (error) {
        yield put(requestUsersFailed(error))
    }

}

export function* unfollow ({ payload }: FetchedUnfollowInterface) {
    try {
        yield put(requestUsers())
        const { data } = yield call(usersAPI.unfollow, payload)
        yield put(requestUnfollowSuccess(data))
    }
    catch (error) {
        yield put(requestUsersFailed(error))
    }

}

export function* getUsersWatcher () {
    yield takeEvery(UserActionTypes.FETCHED_USER, getUsers);
    yield takeEvery(UserActionTypes.FETCHED_FOLLOW, follow);
    yield takeEvery(UserActionTypes.FETCHED_UNFOLLOW, unfollow);
}
