import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList/index'
import Chart from './Chart'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css"

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        text: '',
        selected: null,
        selectedDay: new Date(),
        isSelectingLastDay: false,
        from: null,
        to: null
    }

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const { from, to } = this.state;

        return (
            <div>
                Enter your name: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
                <Select options = {options} value={this.state.selected} onChange = {this.handleSelectChange} multi/>

                <DayPicker
                    numberOfMonths={ 1 }
                    initialMonth={ new Date(2017, 2) }
                    firstDayOfWeek={ 1 }
                    selectedDays={ [from, { from, to }] }
                    onDayClick={ this.handleDayClick }
                    onDayMouseEnter={ this.handleDayMouseEnter }
                />
                { from && to &&
                    <p>
                        You chose from { from.toLocaleDateString() } to { to.toLocaleDateString() }.
                        { ' ' }<a onClick={ this.reset }>Reset</a>
                    </p>
                }

                <ArticleList articles={this.props.articles}/>
                <Chart articles={this.props.articles}/>
            </div>
        )
    }

    handleSelectChange = selected => {
        this.setState({ selected })
    }

    handleTextChange = ev => {
        if (ev.target.value.length > 10) return

        this.setState({
            text: ev.target.value
        })
    }

    handleDayClick = day => {
        const { from, isSelectingLastDay } = this.state;
        // активируем выделение мышью
        if (!isSelectingLastDay) {
            this.setState({
                isSelectingLastDay: true,
                from: day,
                to: null,
            });
        }
        if (isSelectingLastDay && from && day < from) {
            // если выбрали конечную дату которая стоит перед начальной датой
            this.setState({
                from: day,
                to: from
            });
        }
        if (isSelectingLastDay && DateUtils.isSameDay(day, from)) {
            // обнуляем, если дважды кликнули по одной и той-же дате
            this.reset();
        }
        if (isSelectingLastDay) {
            // выключаем выделение мышью
            this.setState({
                isSelectingLastDay: false,
            });
        }
    }

    handleDayMouseEnter = day => {
        const { isSelectingLastDay, from } = this.state;

        // обрабатываем только выбор дня вперёд
        if (!isSelectingLastDay || (from && day < from) || DateUtils.isSameDay(day, from)) return

        this.setState({
            to: day,
        });
    }

    reset = ev => {
        this.setState({
            from: null,
            to: null,
            isSelectingLastDay: false,
        });
    }

}

export default App