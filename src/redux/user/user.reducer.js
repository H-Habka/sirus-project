import { usersTypes } from "./user.types"

const INITAL_STATE = {
    currentUser: null,
    error: "",
    isLoading : false
}

export const userReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case usersTypes.USER_SIGN_UP_START:
            return {
                ...state,
                isLoading: true
            }
        case usersTypes.USER_SIGN_UP_SUCC:
            return {
                ...state,
                currentUser: action.payload,
                error: "",
                isLoading: false
            }
        case usersTypes.USER_SIGN_UP_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading : false
            }
        case usersTypes.USER_LOG_OUT:
            return {
                ...state,
                currentUser: null,
                error: ""
            }
        // case usersTypes.COMPLETE_USER_PROFILE:
        //     return {
        //         ...state,
        //         currentUser : {...state.currentUser,...action.payload}
        //     }
        default:
            return state
    }
}