import {
    FetchedWeatherInterface,
    RequestWeatherFailedInterface,
    RequestWeatherInterface,
    RequestWeatherSuccessInterface,
    WeatherActionTypes
} from "./action-types";
import {WeatherDataType} from "../../types/types";

export const requestWeather = (): RequestWeatherInterface => ({
    type: WeatherActionTypes.REQUEST_WEATHER
})

export const requestWeatherSuccess = (payload: WeatherDataType): RequestWeatherSuccessInterface => ({
    type: WeatherActionTypes.REQUEST_WEATHER_SUCCESS,
    payload,
})
export const requestWeatherFailed = (error: any): RequestWeatherFailedInterface => ({
    type: WeatherActionTypes.REQUEST_WEATHER_FAILED,
    error,
})
export const fetchedWeather = (payload: string): FetchedWeatherInterface => ({
    type: WeatherActionTypes.FETCHED_WEATHER,
    payload,
})

