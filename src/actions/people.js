import * as request from 'superagent'

const baseUrl = 'https://swapi.co/api'


export const FETCH_ALL_PEOPLE = "FETCH_ALL_PEOPLE"
export const FETCH_MORE_PEOPLE = "FETCH_MORE_PEOPLE"

export const FETCH_CHARACTER = "FETCH_CHARACTER"

const birthYearDecoder = (year) => {
    if (year.search("BBY") > 0) {
        year = year.slice(0, year.search("BBY"))
        year = (0 - Number(year))
    }
    else if (year.search("ABY") > 0) {
        year = year.slice(0, year.search("ABY"))
    }
    else {
        year = null
    }
    return year 
}

export const fetchAllPeople = () => (dispatch) => {
    request
        .get(`${baseUrl}/people/`)
        .then(response => {

            const people = {
                ...response.body,
                results: response.body.results.map(
                    x => (
                        {
                            ...x,
                            birth_year: birthYearDecoder(x.birth_year)
                        }
                    )
                )
            }
            dispatch({
                type: FETCH_ALL_PEOPLE,
                payload: people
            })
        })
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

