import {InferActionsTypes} from "../store";
import {WeatherDataType} from "../../types/types";

let initialState = {
    weatherData: null as null | WeatherDataType,
    loading: false,
    error: false
};

export type InitialStateType = typeof initialState

export const weatherReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "REQUEST_WEATHER_DATA":
            return {
                ...state,
                loading: true,
            }
        case 'WEATHER_DATA_SUCCESS':
            return {
                ...state,
                weatherData: action.weatherData,
                loading: false,
            }
        case "WEATHER_DATA_FAILED":
            return {
                ...state,
                error: true,
                loading: false,
            }
        default:
            return state;
    }
}

export const weatherActions = {
    requestWeatherData: () => ({type: 'REQUEST_WEATHER_DATA'} as const),
    weatherDataSuccess: (weatherData: WeatherDataType) => ({type: 'WEATHER_DATA_SUCCESS', weatherData} as const),
    initializedFailed: () => ({type: 'WEATHER_DATA_FAILED'} as const),
    fetchedWeatherData: (name: string) => ({type: 'FETCHED_WEATHER_DATA', name} as const),
}

export type WeatherStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof weatherActions>


