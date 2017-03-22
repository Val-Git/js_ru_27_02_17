import {normalizedComments} from '../fixtures'
import {ADD_COMMENT} from '../constants'

export default (comments = normalizedComments, action) => {
    const { type, payload, comment_id } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.concat({
                id: comment_id,
                text: payload.comment.text,
                user: payload.comment.user
            })
    }

    return comments
}