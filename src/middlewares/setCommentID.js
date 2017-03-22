import {ADD_COMMENT} from '../constants'

export default store => next => action => {

    //через мидлвары будет проходить каждый экшин, они должны быть максимально общими, завязывать на конкретные экшины - плохая практика
    if (action.type != ADD_COMMENT) {
        return next(action)
    }

    let state = store.getState(),
        //завязка на length - очень плохая логика, что если удалят коммент?
        comment_count = state.comments.length

    next({...action, comment_id: comment_count})

}
