import api from "../../api";
import { templatesTypes } from './templates-types'

const fetchAllTemplatesStart = () => ({
    type: templatesTypes.FETCH_ALL_TEMPLATES_START
})


const fetchAllTemplatesSucc = (categories) => ({
    type: templatesTypes.FETCH_ALL_TEMPLATES_SUCC,
    payload: categories
})


const fetchAllTemplatesFail = (err) => ({
    type: templatesTypes.FETCH_ALL_TEMPLATES_FAIL,
    payload: err
})


export const fetchAllTemplatesInit = (PageSize,CurrentPage) => dispatch => {

    dispatch(fetchAllTemplatesStart())
    api.sirius.templates.getAll(PageSize,CurrentPage).then(res => {
        dispatch(fetchAllTemplatesSucc(res.data))
    }).catch((err => {
        dispatch(fetchAllTemplatesFail(err))
    }))
}

