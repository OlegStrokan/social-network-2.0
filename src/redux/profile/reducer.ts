import {PhotosType, PostType, ProfileType} from "../../types/types";
import {InferActionsTypes} from "../store";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    loading: false,
    error: true
}

export const profileReducer = (state = initialState, action: ActionsType): ProfileStateType => {

    switch (action.type) {
        case 'ADD_POST': {
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case 'REQUEST_USER_PROFILE': {
            return {
                ...state,
                loading: true,
            }
        }
        case 'REQUEST_STATUS_SUCCESS': {
            return {
                ...state,
                status: action.status,
                loading: false
            }
        }
        case 'REQUEST_USER_PROFILE_SUCCESS': {
            return {
                ...state,
                profile: action.profile,
                loading: false
            }
        }

        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }

        case 'REQUEST_PHOTO_SUCCESS':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos,
                    loading: false
                } as ProfileType
            }
        case 'REQUEST_USER_PROFILE_FAILED':
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}


export const profileActions = {
    addPost: (newPostText: string) => ({type: 'ADD_POST', newPostText} as const),
    deletePost: (postId: number) => ({type: 'DELETE_POST', postId} as const),
    requestProfileData: () => ({type: 'REQUEST_USER_PROFILE'} as const),
    requestUserProfileSuccess: (profile: ProfileType) => ({type: 'REQUEST_USER_PROFILE_SUCCESS', profile} as const),
    requestStatusSuccess: (status: string) => ({type: 'REQUEST_STATUS_SUCCESS', status} as const),
    requestProfileDataFailed: ( ) => ({type: 'REQUEST_USER_PROFILE_FAILED'} as const),
    requestPhotoSuccess: (photos: PhotosType) => ({type: 'REQUEST_PHOTO_SUCCESS', photos} as const),
    fetchedProfileData: ( userId: number) => ({type: 'FETCHED_USER_PROFILE', userId} as const),
    fetchedStatus: ( status: string ) => ({type: 'FETCHED_STATUS', status} as const),
    fetchedPhoto: ( photos: PhotosType ) => ({type: 'FETCHED_PHOTO', photos} as const),
}

export type ProfileStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof profileActions>


