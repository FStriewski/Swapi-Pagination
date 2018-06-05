import * as request from 'superagent'

const baseUrl = 'https://swapi.co/api'

export const FETCH_ALL_SPECIES = "FETCH_ALL_SPECIES"


// This is not the best approach but will do for now.
export const fetchAllSpecies = () => (dispatch) => {

    Promise.all([
        request.get(`${baseUrl}/species/?page=1`),
        request.get(`${baseUrl}/species/?page=2`),
        request.get(`${baseUrl}/species/?page=3`),
        request.get(`${baseUrl}/species/?page=4`),
    ])
        .then(response => {
            const flatSpecies = {}
            const result = []

            response.map(i =>
                (i.body)
                    ? result.push(...i.body.results)
                    : null
            )

            result.map(i =>
                (!flatSpecies.hasOwnProperty(i.url))
                    ? flatSpecies[i.url] = i.name
                    : null
            )

            dispatch({
                type: FETCH_ALL_SPECIES,
                payload: flatSpecies
            })
        })
        .catch(error => console.error(error))
}
