import {WeatherDataType} from "../../types/types";
import {WeatherActionInterface, WeatherActionTypes} from "./action-types";

let initialState = {
    weatherData: null as null | WeatherDataType,
    loading: false,
    error: false
};

export type InitialStateType = typeof initialState

export const weatherReducer = (state = initialState, action: WeatherActionInterface): InitialStateType => {
    switch (action.type) {
        case WeatherActionTypes.REQUEST_WEATHER:
            return {
                ...state,
                loading: true,
            }
        case WeatherActionTypes.REQUEST_WEATHER_SUCCESS:
            return {
                ...state,
                weatherData: action.payload,
                loading: false,
            }
        case WeatherActionTypes.REQUEST_WEATHER_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export type WeatherStateType = typeof initialState


