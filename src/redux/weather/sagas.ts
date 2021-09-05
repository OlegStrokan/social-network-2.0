import {call, put, takeEvery} from "redux-saga/effects";
import {weatherActions} from "./reducer";
import {weatherAPI} from "../../api/weather-api";


export function* getWeatherData(payload: any): any{
    try {
        yield put(weatherActions.requestWeatherData())
        const data = yield call(weatherAPI, payload.name)
        yield put(weatherActions.weatherDataSuccess(data))
    }
    catch (error) {
        yield put(weatherActions.initializedFailed())
    }
}

export function* weatherDataWatcher() {
    yield takeEvery('FETCHED_WEATHER_DATA', getWeatherData);
}
