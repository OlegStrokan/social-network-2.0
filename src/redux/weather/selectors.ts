import {AppStateType} from "../store";

export const getWeatherDataSelector = ((state: AppStateType) => state.weather)
