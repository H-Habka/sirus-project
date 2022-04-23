import api from "../../api";
import { interviewsTypes } from './interviews-types'

const fetchAllInterviewsStart = () => ({
    type: interviewsTypes.FETCH_ALL_INTERVIEWS_START
})


const fetchAllInterviewsSucc = (categories) => ({
    type: interviewsTypes.FETCH_ALL_INTERVIEWS_SUCC,
    payload: categories
})


const fetchAllInterviewsFail = (err) => ({
    type: interviewsTypes.FETCH_ALL_INTERVIEWS_FAIL,
    payload: err
})


export const fetchAllInterviewsInit = () => dispatch => {

    dispatch(fetchAllInterviewsStart())
    api.categories.getAll().then(res => {
        dispatch(fetchAllInterviewsSucc(res.data))
    }).catch((err => {
        dispatch(fetchAllInterviewsFail(err))
    }))
}