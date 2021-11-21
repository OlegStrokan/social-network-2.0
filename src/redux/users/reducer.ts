import { updateObjectInArray } from '../../utils/object-helpers';
import { UserType } from '../../types/types';
import { UserActionTypes, UsersActionInterface } from './action-types';

const initialState = {
    users: [] as UserType[],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    loading: false,
    error: false,
    followingInProgress: [] as number[],
    filter: {
        term: '',
        friend: null as null | boolean,
    },
}

export const usersReducer = (state = initialState, action: UsersActionInterface): InitialState => {
    switch (action.type) {
        case UserActionTypes.FOLLOW_SUCCESS:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload, 'id', {followed: true})
            }
        case UserActionTypes.UNFOLLOW_SUCCESS:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload, 'id', {followed: false})
            }
        case UserActionTypes.REQUEST_USER: {
            return {...state, loading: true}
        }
        case UserActionTypes.REQUEST_USERS_SUCCESS: {
            return {...state, users: action.payload.items, totalUsersCount: action.payload.totalCount, loading: false}
        }
        case UserActionTypes.SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload,  loading: false}
        }
        case UserActionTypes.FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        }
        case UserActionTypes.SET_FILTER: {
            return {...state, filter: action.payload, loading: false}
        }
        case UserActionTypes.REQUEST_USERS_FAILED: {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}

export type InitialState = typeof initialState
export type FilterType = typeof initialState.filter
