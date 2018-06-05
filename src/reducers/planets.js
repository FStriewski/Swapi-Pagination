
import { FETCH_ALL_PLANETS } from '../actions/planets'



export default function (state = [], action) {

    switch (action.type) {
        case FETCH_ALL_PLANETS:
            return action.payload
        default: return state
    }
}
