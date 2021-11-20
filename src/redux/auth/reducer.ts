import {InferActionsTypes} from "../store";

const initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
    loading: false,
    error: false,
}

export const authReducer = (state = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case 'REQUEST_USER_DATA': {
            return { ...state, loading: true}
        }
        case 'SET_USER_DATA':
        case 'GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }

        case 'REQUEST_USER_DATA_FAILED': {
            return {...state, error: true}
        }
        default:
            return state;
    }
}

export const authActions = {
    requestUserData: ( ) => ({type: 'REQUEST_USER_DATA'} as const),
    requestUserDataSuccess: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
        ({type: 'SET_USER_DATA', payload: {userId, email, login, isAuth}} as const),
    requestCaptchaUrlSuccess: (captchaUrl: string) => ({type: 'GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const),
    requestUserDataFailed: ( ) => ({type: 'REQUEST_USER_DATA_FAILED'} as const),
    fetchedUserData: ( ) => ({type: 'FETCHED_USER_DATA'} as const),
    fetchedCaptchaUrl: ( ) => ({type: 'FETCHED_CAPTCHA_URL'} as const),
    fetchedLogin: ( email: string, password: string, rememberMe: boolean, captcha: string | null) => ({type: 'FETCHED_LOGIN', email, password, rememberMe, captcha} as const),
    fetchedLogout: () => ({type: 'FETCHED_LOGOUT'} as const),
}

export type AuthStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof authActions>


