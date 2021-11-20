import { UserRequestType } from '../../api/users-api';
import { UserType } from '../../types/types';
import {
    FetchedFollowInterface,
    FetchedUnfollowInterface,
    FetchedUsersInterface,
    RequestFollowingProgressInterface,
    RequestFollowSuccessInterface,
    RequestSetCurrentPageInterface,
    RequestSetFilterInterface,
    RequestUnfollowSuccessInterface,
    RequestUsersFailedInterface,
    RequestUsersInterface,
    RequestUserSuccessInterface,
    UserActionTypes
} from './action-types';
import { FilterType } from './reducer';
import { GetItemsType } from '../../api/instance';


export const requestUsers = (): RequestUsersInterface => ({
    type: UserActionTypes.REQUEST_USER
})

export const requestFollowSuccess = (payload: number): RequestFollowSuccessInterface => ({
    type: UserActionTypes.FOLLOW_SUCCESS,
    payload,
})
export const requestUnfollowSuccess = (payload: number): RequestUnfollowSuccessInterface => ({
    type: UserActionTypes.UNFOLLOW_SUCCESS,
    payload,
})
export const fetchedFollow = (payload: number): FetchedFollowInterface => ({
    type: UserActionTypes.FETCHED_FOLLOW,
    payload,
})
export const fetchedUnfollow = (payload: number): FetchedUnfollowInterface => ({
    type: UserActionTypes.FETCHED_UNFOLLOW,
    payload,
})
export const requestFollowingProgress = (payload: { isFetching: boolean, userId: number }): RequestFollowingProgressInterface => ({
    type: UserActionTypes.FOLLOWING_PROGRESS,
    payload,
})
export const requestCurrentPage = (payload: number): RequestSetCurrentPageInterface => ({
    type: UserActionTypes.SET_CURRENT_PAGE,
    payload,
})
export const requestFilterInterface = (payload: FilterType): RequestSetFilterInterface => ({
    type: UserActionTypes.SET_FILTER,
    payload,
})
export const requestUserSuccess = (payload: GetItemsType): RequestUserSuccessInterface => ({
    type: UserActionTypes.REQUEST_USERS_SUCCESS,
    payload,
})
export const requestUsersFailed = (error: any): RequestUsersFailedInterface => ({
    type: UserActionTypes.REQUEST_USERS_FAILED,
    error,
})
export const fetchedUsers = (payload: UserRequestType): FetchedUsersInterface => ({
    type: UserActionTypes.FETCHED_USER,
    payload,
})

