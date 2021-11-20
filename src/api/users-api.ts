import {APIResponseType, GetItemsType, instance} from "./instance";

export type UserRequestType = {
    currentPage: number;
    pageSize: number;
    term: string;
    friend: null | boolean;
}
export const usersAPI = {
    getUsers(data: UserRequestType): Promise<GetItemsType> {
        return instance.get<GetItemsType>(`users?page=${data.currentPage}&count=${data.pageSize}&term=${data.term}` + (data.friend === null ? '' : `&friend=${data.friend}`) )
            .then(res => res.data)
    },
    follow(userId: number): Promise<APIResponseType> {
        return instance.post<APIResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number): Promise<APIResponseType> {
        return instance.delete(`follow/${userId}`).then(res => res.data)
    }
}

/*
currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null
*/
