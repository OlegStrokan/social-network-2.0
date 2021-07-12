import {call, put, takeEvery } from "redux-saga/effects";
import {authActions} from "./reducer";
import {authAPI} from "../../api/social-network-api/auth-api";
import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../../api/instance";
import {securityAPI} from "../../api/social-network-api/security-api";



export function* getUserData(): any{
    try {
        yield put(authActions.requestUserData())
        const data = yield call(authAPI.me)
        let {id, login, email} = data.data
        if (data.resultCode === ResultCodesEnum.Success) {
            yield put(authActions.requestUserDataSuccess(id, login, email, true))
        }
    }
    catch (error) {
        yield put(authActions.requestUserDataFailed())
    }
}

export function* getCaptchaUrl(): any {
    try {
        yield  put(authActions.requestUserData())
        const data = yield call(securityAPI.getCaptchaUrl)
        const captchaUrl = data;
    }
    catch (error) {
        yield  put(authActions.requestUserDataFailed())
    }
}


export function* login(payload: any): any {
    try {
        yield put(authActions.requestUserData())
        const data = yield call(authAPI.login, payload.email, payload.password, payload.rememberMe, payload.captcha)
        if (data.resultCode === ResultCodesEnum.Success) {
            yield call(getUserData)
        } else {
            if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
                yield call(getCaptchaUrl)
            }
        }
    } catch (error) {
        yield put(authActions.requestUserDataFailed())
    }
}
export function* logout(): any {
    try {
        yield put(authActions.requestUserData())
        const data = yield call(authAPI.logout)
        if (data.data.resultCode === 0) {
            yield put(authActions.requestUserDataSuccess(null, null, null, false))
        }
    } catch {
        yield put(authActions.requestUserDataFailed())
    }
}

export function* userDataWatcher() {
    // @ts-ignore
    yield takeEvery('FETCHED_LOGIN', login);
    yield takeEvery('FETCHED_LOGOUT', logout);
    yield takeEvery('FETCHED_USER_DATA', getUserData);
    yield takeEvery('FETCHED_CAPTCHA_URL', getCaptchaUrl);
}
