import {articles} from '../fixtures'
import { DateUtils } from 'react-day-picker'
import {DELETE_ARTICLE, FILTER_ARTICLES} from '../constants'

export default (state = articles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.filter(article => article.id !== payload.id)

        case FILTER_ARTICLES:  // пока только select
            return articles.filter(article => ~payload.filters.selected.findIndex(elem => elem.value == article.id) )
            // return articles.filter(article => DateUtils.isDayInRange(article.date, payload.filters))


    }

    return state
}