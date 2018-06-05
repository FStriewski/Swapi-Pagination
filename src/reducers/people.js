
import { FETCH_ALL_PEOPLE, FETCH_CHARACTER, FETCH_MORE_PEOPLE } from '../actions/people'




export default function (state = [], action) {

    switch (action.type) {
        case FETCH_ALL_PEOPLE:
            return action.payload
        case FETCH_MORE_PEOPLE:
            return {
                ...state,
                results: [...state.results, ...action.payload.results],
                next: action.payload.next
            };
        case FETCH_CHARACTER:
            return action.payload

        default: return state
    }
}
