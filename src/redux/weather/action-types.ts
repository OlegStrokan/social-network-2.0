import {Action} from "redux";
import {WeatherDataType} from "../../types/types";

export enum WeatherActionTypes {
    REQUEST_WEATHER = 'REQUEST_WEATHER',
    REQUEST_WEATHER_SUCCESS = 'REQUEST_WEATHER_SUCCESS',
    REQUEST_WEATHER_FAILED = 'REQUEST_WEATHER_FAILED',
    FETCHED_WEATHER = 'FETCHED_WEATHER',
}

export interface requestWeatherInterface extends Action<WeatherActionTypes> {
    type: WeatherActionTypes.REQUEST_WEATHER,
}

export interface requestWeatherSuccessInterface extends Action<WeatherActionTypes> {
    type: WeatherActionTypes.REQUEST_WEATHER_SUCCESS,
    payload: WeatherDataType,
}

export interface requestWeatherFailedInterface extends Action<WeatherActionTypes> {
    type: WeatherActionTypes.REQUEST_WEATHER_FAILED,
    error: any,
}

export interface fetchedWeatherInterface extends Action<WeatherActionTypes> {
    type: WeatherActionTypes.FETCHED_WEATHER,
    payload: string;
}

export type WeatherActionInterface =
    requestWeatherInterface
| requestWeatherSuccessInterface
| requestWeatherFailedInterface
| fetchedWeatherInterface
