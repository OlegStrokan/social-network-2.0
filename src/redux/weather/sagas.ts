import {call, put, takeEvery} from "redux-saga/effects";
import {weatherAPI} from "../../api/weather-api";
import {FetchedWeatherInterface, WeatherActionTypes} from "./action-types";
import {requestWeather, requestWeatherFailed, requestWeatherSuccess} from "./action-creators";
import {WeatherDataType} from "../../types/types";


export function* getWeatherData({payload}: FetchedWeatherInterface) {
    try {
        yield put(requestWeather())
        const data: WeatherDataType = yield call(weatherAPI, payload)
        yield put(requestWeatherSuccess(data))
    }
    catch (error) {
        yield put(requestWeatherFailed(error))
    }
}

export function* weatherDataWatcher() {
    yield takeEvery(WeatherActionTypes.FETCHED_WEATHER, getWeatherData);
}
