import * as request from 'superagent'

const baseUrl = 'https://swapi.co/api'


export const FETCH_ALL_STARSHIPS = "FETCH_ALL_STARSHIPS"

export const fetchAllPeople = () => (dispatch) => {
    request
        .get(`${baseUrl}/starships/`)
        .then(response => dispatch({
            type: FETCH_ALL_STARSHIPS,
            payload: response.body
        }))
        .catch(error => console.error(error))
}


