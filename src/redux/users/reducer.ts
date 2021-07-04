import {UserType} from "../../types/types";
import {InferActionsTypes} from "../store";
import {updateObjectInArray} from "../../utils/object-helpers";

const initialState = {
    users: [] as any,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    loading: false,
    error: false,
    followingInProgress: [] as Array<number>, //array of users ids,
}

export const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case 'REQUEST_USERS': {
            return {...state, loading: true}
        }
        case 'REQUEST_USERS_SUCCESS': {
            return {...state, users: action.users.items, totalUsersCount: action.users.totalCount}
        }
        case 'SN/USERS/SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SN/USERS/TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        case 'REQUEST_USERS_FAILED': {
            return {...state, error: true}
        }
        default:
            return state
    }
}

export const usersActions = {
    followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    requestUsers: ( ) => ({type: 'REQUEST_USERS'} as const),
    requestUsersSuccess: (users: any) => ({type: 'REQUEST_USERS_SUCCESS', users} as const),
    requestUsersFailed: ( ) => ({type: 'REQUEST_USERS_FAILED'} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SN/USERS/SET_CURRENT_PAGE', currentPage} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const),
    fetchedUsers: (currentPage: number, pageSize: number) => ({type: 'FETCHED_USERS', currentPage, pageSize} as const),
    fetchedFollow: (userId: number) => ({type: 'FETCHED_FOLLOW', userId} as const),
    fetchedUnfollow: (userId: number) => ({type: 'FETCHED_UNFOLLOW', userId} as const),
}

export type InitialState = typeof initialState
type ActionsTypes = InferActionsTypes<typeof usersActions>
