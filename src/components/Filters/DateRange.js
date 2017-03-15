import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getDateRange, filterArticles} from '../../AC'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = (day) => {
        const { getDateRange, filterArticles } = this.props
        const { from, to } = this.props;
        getDateRange(day)
        filterArticles({from: from, to: to})
    }

    render() {
        const { from, to } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        from : state.date_range.from,
        to   : state.date_range.to,
    }
}

export default connect(mapStateToProps, { getDateRange, filterArticles })(DateRange)