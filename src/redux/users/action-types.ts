import { Action } from 'redux';
import { UserType } from '../../types/types';
import { UserRequestType } from '../../api/users-api';
import { FilterType } from './reducer';
import { GetItemsType } from '../../api/instance';

export enum UserActionTypes {
  REQUEST_USER = 'REQUEST_USER',
  FOLLOW_SUCCESS = 'FOLLOW_SUCCESS',
  UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS',
  FETCHED_FOLLOW = 'FETCHED_FOLLOW',
  FETCHED_UNFOLLOW = 'FETCHED_UNFOLLOW',
  FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_FILTER = 'SET_FILTER',
  REQUEST_USERS_SUCCESS = 'REQUEST_USERS_SUCCESS',
  REQUEST_USERS_FAILED = 'REQUEST_USERS_FAILED',
  FETCHED_USER = 'FETCHED_USER',
}

export interface RequestUsersInterface extends Action<UserActionTypes> {
  type: UserActionTypes.REQUEST_USER,
}

export interface RequestFollowSuccessInterface extends Action<UserActionTypes> {
  type: UserActionTypes.FOLLOW_SUCCESS,
  payload: number,
}

export interface RequestUnfollowSuccessInterface extends Action<UserActionTypes> {
  type: UserActionTypes.UNFOLLOW_SUCCESS,
  payload: number,
}

export interface FetchedFollowInterface extends Action<UserActionTypes> {
  type: UserActionTypes.FETCHED_FOLLOW,
  payload: number,
}
export interface FetchedUnfollowInterface extends Action<UserActionTypes> {
  type: UserActionTypes.FETCHED_UNFOLLOW,
  payload: number,
}

export interface RequestFollowingProgressInterface extends Action<UserActionTypes> {
  type: UserActionTypes.FOLLOWING_PROGRESS,
  payload: { isFetching: boolean, userId: number },
}

export interface RequestSetCurrentPageInterface extends Action<UserActionTypes> {
  type: UserActionTypes.SET_CURRENT_PAGE,
  payload: number,
}

export interface RequestSetFilterInterface extends Action<UserActionTypes> {
  type: UserActionTypes.SET_FILTER,
  payload: FilterType,
}

export interface RequestUserSuccessInterface extends Action<UserActionTypes> {
  type: UserActionTypes.REQUEST_USERS_SUCCESS,
  payload: GetItemsType,
}

export interface RequestUsersFailedInterface extends Action<UserActionTypes> {
  type: UserActionTypes.REQUEST_USERS_FAILED,
  error: any,
}

export interface FetchedUsersInterface extends Action<UserActionTypes> {
  type: UserActionTypes.FETCHED_USER,
  payload: UserRequestType;
}

export type UsersActionInterface =
  RequestUsersInterface
  | RequestFollowSuccessInterface
  | RequestUnfollowSuccessInterface
  | FetchedFollowInterface
  | FetchedUnfollowInterface
  | RequestFollowingProgressInterface
  | RequestSetCurrentPageInterface
  | RequestSetFilterInterface
  | RequestUserSuccessInterface
  | RequestUsersFailedInterface
  | FetchedUsersInterface

