import {AppStateType} from "../store";

export const getUsersSelector = ((state: AppStateType) => state.users)
