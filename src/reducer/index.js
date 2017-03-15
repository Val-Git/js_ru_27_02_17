import {combineReducers} from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import selectReducer from './select'
import dateRangeReducer from './date_range'

export default combineReducers({
    articles   : articleReducer,
    count      : counterReducer,
    selected   : selectReducer,
    date_range : dateRangeReducer
})