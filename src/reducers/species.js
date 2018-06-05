
import { FETCH_ALL_SPECIES } from '../actions/species'



export default function (state = [], action) {

    switch (action.type) {
        case FETCH_ALL_SPECIES:
            return action.payload
        default: return state
    }
}
