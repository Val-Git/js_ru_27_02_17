import React, {PropTypes} from 'react'
import Article from './Article'
import toggleAccordion from '../decorators/toggleAccordion'

function ArticleList(props) {

    const {articles, openItemId, toggleAccordion} = props

    const articleComponents = articles.map(article => <li key={article.id}>
        <Article article={article}
                 isOpen={article.id === openItemId}
                 toggleOpen={toggleAccordion(article.id)}
        />
    </li>)

    return (
        <ul>
            {articleComponents}
        </ul>
    )

}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default toggleAccordion(ArticleList)