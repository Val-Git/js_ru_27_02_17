import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {selectArticle, filterArticles} from '../../AC'
import Select from 'react-select'
import {articles} from '../../fixtures'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    // static propTypes = {
    //     articles: PropTypes.array.isRequired
    // };

    handleChange = selected => {
        const { selectArticle, filterArticles } = this.props
        //не нужно на 2 AC разбивать
        selectArticle(selected)
        filterArticles({selected: selected})
    }

    render() {
        const { selected } = this.props
        const options = articles.map(article => ({
            label : article.title,
            value : article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

const mapStateToProps = state => {
    return {
        selected: state.selected
    }
}

export default connect(mapStateToProps, { selectArticle, filterArticles })(SelectFilter)
