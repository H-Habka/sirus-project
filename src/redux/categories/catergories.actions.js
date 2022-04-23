import api from "../../api";
import { categoriesTypes } from "./categories.types";

const fetchCategoryStart = () => ({
    type: categoriesTypes.FETCH_CATEGORIES_START
})


const fetchCategorySucc = (categories) => ({
    type: categoriesTypes.FETCH_CATEGORIES_SUCC,
    payload: categories
})


const fetchCategoryFail = (err) => ({
    type: categoriesTypes.FETCH_CATEGORIES_FAIL,
    payload: err
})


export const fetchCategoriesInit = () => dispatch => {

    dispatch(fetchCategoryStart())
    api.sirius.categories.getAll().then(res => {
        dispatch(fetchCategorySucc(res.data))
    }).catch((err => {
        dispatch(fetchCategoryFail(err))
    }))

}