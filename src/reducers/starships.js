import FETCH_ALL_STARSHIPS from '../actions/starships'

export default function (starship = {}, action = {}) {

    switch (action.type) {
        case 'FETCH_ALL_STARSHIPS':

            let _starships = {}

            for (let starship of action.payload.starships) {
                _starships = {
                    ..._starships,
                    [starship.name]: starship
                }
            }

            
            return {
                ...starship,
                ..._starships
            }

        default:
            return starship
    }
}