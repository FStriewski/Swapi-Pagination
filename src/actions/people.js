import * as request from 'superagent'

const baseUrl = 'https://swapi.co/api'


export const FETCH_ALL_PEOPLE = "FETCH_ALL_PEOPLE"
export const FETCH_MORE_PEOPLE = "FETCH_MORE_PEOPLE"

export const FETCH_CHARACTER = "FETCH_CHARACTER"


export const fetchAllPeople = () => (dispatch) => {
    request
        .get(`${baseUrl}/people/`)
        .then(response => dispatch({
            type: FETCH_ALL_PEOPLE,
            payload: response.body
        }))
        .catch(error => console.error(error))
}
export const fetchCharacter = (url) => (dispatch) => {
    console.log(url)
    request
        .get(`${baseUrl}/people/${url}`)
        .then(response => dispatch({
            type: FETCH_CHARACTER,
            payload: response.body
        }))
        .catch(error => console.error(error))
}

export const fetchMorePeople = (url) => (dispatch) => {
    request
        .get(`${url}`)
        .then(response => dispatch({
            type: FETCH_MORE_PEOPLE,
            payload: response.body
        }))
        .catch(error => console.error(error))
}

