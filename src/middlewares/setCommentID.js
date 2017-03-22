import {ADD_COMMENT} from '../constants'

export default store => next => action => {

    if (action.type != ADD_COMMENT) {
        return next(action)
    }

    let state = store.getState(),
        comment_count = state.comments.length

    next({...action, comment_id: comment_count})

}