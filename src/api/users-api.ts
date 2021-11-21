import {APIResponseType, GetItemsType, instance} from "./instance";


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null): Promise<GetItemsType> {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`) )
            .then(res => res.data)
    },
    follow(userId: number): Promise<APIResponseType> {
        return instance.post<APIResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number): Promise<APIResponseType> {
        return instance.delete(`follow/${userId}`).then(res => res.data)
    }
}
