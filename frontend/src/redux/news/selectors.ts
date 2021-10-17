import {AppStateType} from "../store";

export const getNewsSelector = ((state: AppStateType) => state.news)
