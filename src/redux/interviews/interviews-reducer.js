import { interviewsTypes } from "./interviews-types"

const INITAIL_STATE = {
    data: [],
    err: "",
    isLoading: false
}

export const interviewsReducer = (state = INITAIL_STATE, action) => {

    switch (action.type) {
        case interviewsTypes.FETCH_ALL_INTERVIEWS_START:
            return ({
                ...state,
                isLoading: true
            })
        case interviewsTypes.FETCH_ALL_INTERVIEWS_SUCC:
            return ({
                ...state,
                isLoading: false,
                data: action.payload
            })
        case interviewsTypes.FETCH_ALL_INTERVIEWS_FAIL:
            return ({
                ...state,
                isLoading: false,
                err: action.payload
            })
        default:
            return state
    }
}