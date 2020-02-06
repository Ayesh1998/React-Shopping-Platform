import {UserActionTypes} from './user.action.types'

export const setCurrentUser =  (user) => ({
    type: UserActionTypes.SET_CURRET_USER,
    payload: user
})

