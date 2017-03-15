import {INCREMENT, DELETE_ARTICLE, FILTER_ARTICLES, SELECT_ARTICLE, DATE_RANGE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}


export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}


export function filterArticles(filters) {
    return {
        type: FILTER_ARTICLES,
        payload: { filters }
    }
}


export function selectArticle(selected) {
    return {
        type: SELECT_ARTICLE,
        payload: { selected }
    }
}


export function getDateRange(day) {
    return {
        type: DATE_RANGE,
        payload: { day }
    }
}