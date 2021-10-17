import {call, put, takeEvery} from "redux-saga/effects";
import {newsActions} from "./reducer";
import {newsAPI} from "../../api/news-api";


export function* getNews(payload: any): any{
    try {
        yield put(newsActions.requestNews())
        const data = yield call(newsAPI, payload.topic)
        yield put(newsActions.requestNewsSuccess(data))
    }
    catch (error) {
        yield put(newsActions.requestNewsFailed())
    }
}

export function* newsDataWatcher() {
    yield takeEvery('FETCHED_NEWS', getNews);
}
