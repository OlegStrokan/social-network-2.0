import {AppStateType} from "../store";

export const getUserDataSelector = ((state: AppStateType) => state.auth)
