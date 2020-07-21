import {combineReducers} from 'redux'
import blogReducer from './blog'
import mapReducer from './map'
import chatroomReducer from './chatroom'
import userReducer from './user'

const rootReducer = combineReducers({
    blogReducer,
    mapReducer,
    chatroomReducer,
    userReducer,
})

export default rootReducer;