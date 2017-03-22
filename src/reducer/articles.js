import {normalizedArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

export default (state = normalizedArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.filter(article => article.id !== payload.id)

        case ADD_COMMENT:
            let comment_id = action.comment_id | false
            if (comment_id) {
                return state.map(article => {
                    if (article.id == payload.article_id) {
                        //здесь ты мутируешь стейт. Возвращаешь новый массив, но внутри меняешь объекты по ссылке
                        article.comments.push(comment_id)
                    }
                    return article
                })
            }
    }

    return state
}
