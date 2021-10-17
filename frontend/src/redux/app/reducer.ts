import {InferActionsTypes} from "../store";

let initialState = {
    initialized: false,
    loading: false,
    error: false
};

export type InitialStateType = typeof initialState

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "REQUEST_INITIALIZED":
            return {
                ...state,
                loading: true,
            }
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true,
                loading: false,
            }
        case "INITIALIZED_FAILED":
            return {
                ...state,
                error: true,
                loading: false,
            }
        default:
            return state;
    }
}

export const appActions = {
    requestInitialized: () => ({type: 'REQUEST_INITIALIZED'} as const),
    initializedSuccess: () => ({type: 'INITIALIZED_SUCCESS'} as const),
    initializedFailed: () => ({type: 'INITIALIZED_FAILED'} as const),
    fetchedInitialized: () => ({type: 'FETCHED_INITIALIZE_APP'} as const),
}
export type AppStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof appActions>


