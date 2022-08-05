import { templatesTypes } from "./templates-types"

const INITAIL_STATE = {
    data: [],
    err: "",
    isLoading: false
}

export const templatesReducer = (state = INITAIL_STATE, action) => {

    switch (action.type) {
        case templatesTypes.FETCH_ALL_TEMPLATES_START:
            return ({
                ...state,
                isLoading: true
            })
        case templatesTypes.FETCH_ALL_TEMPLATES_SUCC:
            return ({
                ...state,
                isLoading: false,
                data: action.payload
            })
        case templatesTypes.FETCH_ALL_TEMPLATES_FAIL:
            return ({
                ...state,
                isLoading: false,
                err: action.payload
            })
        default:
            return state
    }
}
