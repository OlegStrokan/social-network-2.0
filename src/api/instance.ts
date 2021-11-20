import axios from "axios";
import {UserType} from "../types/types";

const NETWORK_KEY = '7eaf4c11-a445-4b77-be52-da75e1dbe314'
export const WEATHER_KEY = '55598e00e9fc9fb8f3777e1dd9e2aef8'

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": NETWORK_KEY
    }
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D,
    message: string[],
    resultCode: RC
}
