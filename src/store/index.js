import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/index'
import logger from '../middlewares/logger'
import comment_id from '../middlewares/setCommentID'

const enhancer = applyMiddleware(logger, comment_id)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store