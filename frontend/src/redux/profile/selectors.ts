import {AppStateType} from "../store";

export const getProfileDataSelector = ((state: AppStateType) => state.profile)
