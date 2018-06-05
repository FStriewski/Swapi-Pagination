import FETCH_ALL_STARSHIPS from '../actions/starships'

export default function (state = {}, action = {}) {

    switch (action.type) {
        case 'FETCH_ALL_STARSHIPS':

            let _starships = {}

            for (let starship of action.payload.results) {
                _starships = {
                    // Appending the object with the property from iteration:
                    ..._starships,
                    // I don't have an id, so name. This will store the ship under its name.
                    [starship.name]: starship
                }
            }

            
            return {
                // Append this to the state we had before:
                ...state,
                ..._starships
            }

        default:
            return state
    }
}