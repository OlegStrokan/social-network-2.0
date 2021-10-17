import {InferActionsTypes} from "../store";
import {updateObjectInArray} from "../../utils/object-helpers";

const initialState = {
    users: [] as any,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    loading: false,
    error: false,
    followingInProgress: [] as Array<number>,
    filter: {
        term: '',
        friend: null as null | boolean,
    },
}

export const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true}),
                loading: false,
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false}),
                loading: false,
            }
        case 'REQUEST_USERS': {
            return {...state, loading: true}
        }
        case 'REQUEST_USERS_SUCCESS': {
            return {...state, users: action.users.items, totalUsersCount: action.users.totalCount, loading: false}
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage,  loading: false}
        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId),
                loading: false,
            }
        }
        case 'SET_FILTER': {
            return {...state, filter: action.payload, loading: false}
        }
        case 'REQUEST_USERS_FAILED': {
            return {...state, error: true, loading: false}
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
    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    setFilter: (filter: FilterType) => ({type: 'SET_FILTER', payload: filter} as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const),
    fetchedUsers: (currentPage: number, pageSize: number, term: string = '', friend: boolean | null  = null) =>
        ({type: 'FETCHED_USERS', currentPage, pageSize, term, friend} as const),
    fetchedFollow: (userId: number) => ({type: 'FETCHED_FOLLOW', userId} as const),
    fetchedUnfollow: (userId: number) => ({type: 'FETCHED_UNFOLLOW', userId} as const),
}

export type InitialState = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsTypes = InferActionsTypes<typeof usersActions>
