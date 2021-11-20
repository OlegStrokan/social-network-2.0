import {
    fetchedWeatherInterface,
    requestWeatherFailedInterface,
    requestWeatherInterface,
    requestWeatherSuccessInterface,
    WeatherActionTypes
} from "./action-types";
import {WeatherDataType} from "../../types/types";

export const requestWeather = (): requestWeatherInterface => ({
    type: WeatherActionTypes.REQUEST_WEATHER
})

export const requestWeatherSuccess = (payload: WeatherDataType): requestWeatherSuccessInterface => ({
    type: WeatherActionTypes.REQUEST_WEATHER_SUCCESS,
    payload,
})
export const requestWeatherFailed = (error: any): requestWeatherFailedInterface => ({
    type: WeatherActionTypes.REQUEST_WEATHER_FAILED,
    error,
})
export const fetchedWeather = (payload: string): fetchedWeatherInterface => ({
    type: WeatherActionTypes.FETCHED_WEATHER,
    payload,
})

