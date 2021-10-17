import {APIResponseType, instance, ResultCodeForCaptchaEnum, ResultCodesEnum} from "./instance";

type MeResponseType = {
    id: number,
    email: string,
    login: string,
}

type LoginResponseType = {
    userId: number,
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseType>>(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseType, ResultCodesEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data);
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
