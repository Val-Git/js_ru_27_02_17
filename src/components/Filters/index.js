import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import ArticlesSelect from './ArticlesSelect'
import DateRange from './DateRange'

class Filters extends Component {
    // static propTypes = {
    //     articles: PropTypes.array.isRequired
    // }

    render() {
        return (
            <div>
                <ArticlesSelect />
                <DateRange/>
            </div>
        )
    }
}

export default Filters