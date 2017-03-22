import {DATE_RANGE} from '../constants'
import { DateUtils } from 'react-day-picker'

export default (date_range = {from: null, to: null}, action) => {
    const { type, payload } = action

    switch (type) {
        case DATE_RANGE:
            return DateUtils.addDayToRange(payload.day, date_range)
    }

    return date_range
}