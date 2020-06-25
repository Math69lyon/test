import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import commentReducer from './commentReducer'
import profileReducer from './profileReducer'

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    comment: commentReducer,
    profile: profileReducer
})