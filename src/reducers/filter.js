
import { FILTER_BY_NAME, FILTER_BY_GENDER, FILTER_BY_SPECIES } from '../actions/filter'

const initalState = {
    term: "",
    gender: "all",
    race: "all",
}

export default function (state = initalState, action) {

    switch (action.type) {
        case FILTER_BY_NAME:
            return {...state, term: action.payload }
        case FILTER_BY_GENDER:
            return { ...state, gender: action.payload }
        case FILTER_BY_SPECIES:
            return { ...state, race: action.payload }
        default: return state
    }
}
