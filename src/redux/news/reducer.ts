import {InferActionsTypes} from "../store";
import {NewsType} from "../../types/types";

let initialState = {
    news: null as null | NewsType,
    loading: false,
    error: false
};

export type InitialStateType = typeof initialState

export const newsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "REQUEST_NEWS":
            return {
                ...state,
                loading: true,
            }
        case 'REQUEST_NEWS_SUCCESS':
            return {
                ...state,
                news: action.news,
                loading: false,
            }
        case "REQUEST_NEWS_FAILED":
            return {
                ...state,
                error: true,
                loading: false,
            }
        default:
            return state;
    }
}

export const newsActions = {
    requestNews: () => ({type: 'REQUEST_NEWS'} as const),
    requestNewsSuccess: (news: NewsType) => ({type: 'REQUEST_NEWS_SUCCESS', news} as const),
    requestNewsFailed: () => ({type: 'REQUEST_NEWS_FAILED'} as const),
    fetchedWeatherData: (topic: string) => ({type: 'FETCHED_NEWS', topic} as const),
}

export type NewsStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof newsActions>


