import {takeEvery, put, call, select} from "redux-saga/effects";
import {profileAPI} from "../../api/social-network-api/profile-api";
import {profileActions} from "./reducer";
import {AppStateType} from "../store";

export function* getProfile(payload: any): any{
    try {
        yield put(profileActions.requestProfileData())
        const data = yield call(profileAPI.getProfile, payload.userId)
        yield put(profileActions.requestUserProfileSuccess(data))
    }
    catch (error) {
        yield put(profileActions.requestProfileDataFailed())
    }
}

export function* getStatus(userId: any): any {
    try {
        yield put(profileActions.requestProfileData())
        const data = yield call(profileAPI.getStatus, userId)
        yield put(profileActions.requestStatusSuccess(data))
    }
    catch (error) {
        yield put(profileActions.requestProfileDataFailed())
    }
}

export function* updateStatus(status: any): any {
    try {
        yield put(profileActions.requestProfileData())
        const data = yield call(profileAPI.updateStatus, status)
        yield put(profileActions.requestStatusSuccess(data))
    }
    catch (error) {
        yield put(profileActions.requestProfileDataFailed())
    }
}

export function* savePhoto(file: any): any {
    try {
        yield put(profileActions.requestProfileData())
        const data = yield call(profileAPI.savePhoto, file)
        yield put(profileActions.requestPhotoSuccess(data))
    }
    catch (error) {
        yield put(profileActions.requestProfileDataFailed())
    }
}

export function* saveProfile(profile: any): any {
    try {
        yield put(profileActions.requestProfileData())
        const userId = yield select((state: AppStateType) => state.auth.userId)
        const data = yield call(profileAPI.saveProfile, profile)

        if (data.resultCode === 0) {
            if (userId != null) {
                yield call(getProfile, userId)
            } else {
                throw new Error("userId can't be null")
            }
        }
    }
    catch (error) {
        yield put(profileActions.requestProfileDataFailed())
    }
}

export function profileDataWatcher() {
    takeEvery('FETCHED_USER_PROFILE',getProfile)
    takeEvery('FETCHED_STATUS',getStatus)
    takeEvery('FETCHED_NEW_STATUS',updateStatus)
    takeEvery('FETCHED_PHOTO',savePhoto)
    takeEvery('FETCHED_NEW_USER_PROFILE',saveProfile)
}
