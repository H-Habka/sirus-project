import { inboxTypes } from "./inboxtypes";

const INITAL_STATE = {
    hidden: true,
    replayContent: '',
    rowSubjectData: '',
    inboxIsLoading: false,
    inboxData: [],
    inboxErrMsg: ''
}


const inboxReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case inboxTypes.SHOW_POPUP:
            return {

                ...state,
                hidden: !state.hidden,
            }

        case inboxTypes.SHOW_ROW_SUBJECT:
            return {
                ...state,
                rowSubjectData: action.payload
            }
        case inboxTypes.FETCH_INBOX_START:
            return {
                ...state,
                inboxIsLoading: true
            }
        case inboxTypes.FETCH_INBOX_SUCCESS:
            return {
                ...state,
                inboxData: action.payload,
                inboxIsLoading: false,
                inboxErrMsg: ''
            }
        case inboxTypes.FETCH_INBOX_FAILURE:
            return {
                ...state,
                inboxIsLoading: false,
                inboxErrMsg: action.payload
            }

        default:
            return state;
    }
}


export default inboxReducer

