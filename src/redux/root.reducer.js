import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import inboxReducer from "./inbox/inboxReducer";
import { categoryReducer } from "./categories/categories.reducer";
import { templatesReducer } from "./templates/templates-reducer";
import { interviewsReducer } from "./interviews/interviews-reducer";

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['user']
}


export const rootReducer = combineReducers({
    user: userReducer,
    inbox: inboxReducer,
    categories: categoryReducer,
    templates : templatesReducer,
    interviews : interviewsReducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)