import { categoriesTypes } from "./categories.types"

const INITAIL_STATE = {
    data: [],
    err: "",
    isLoading: false
}

export const categoryReducer = (state = INITAIL_STATE, action) => {

    switch (action.type) {
        case categoriesTypes.FETCH_CATEGORIES_START:
            return ({
                ...state,
                isLoading: true
            })
        case categoriesTypes.FETCH_CATEGORIES_SUCC:
            return ({
                ...state,
                isLoading: false,
                data: action.payload
            })
        case categoriesTypes.FETCH_CATEGORIES_FAIL:
            return ({
                ...state,
                isLoading: false,
                err: action.payload
            })
        default:
            return state
    }
}