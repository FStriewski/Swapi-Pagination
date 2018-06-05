import * as request from 'superagent'

const baseUrl = 'https://swapi.co/api'

export const FETCH_ALL_PLANETS = "FETCH_ALL_PLANETS"


// This is not the best approach but will do for now.
export const fetchAllPlanets = () => (dispatch) => {

    Promise.all([
        request.get(`${baseUrl}/planets/?page=1`),
        request.get(`${baseUrl}/planets/?page=2`),
        request.get(`${baseUrl}/planets/?page=3`),
        request.get(`${baseUrl}/planets/?page=4`),
        request.get(`${baseUrl}/planets/?page=5`),
        request.get(`${baseUrl}/planets/?page=6`),
        request.get(`${baseUrl}/planets/?page=7`)
    ])
        .then(response => {
            const flatPlanets = {}
            const result = []

            response.map(i =>
                (i.body)
                    ? result.push(...i.body.results)
                    : null
            )

            result.map(i =>
                (!flatPlanets.hasOwnProperty(i.url))
                    ? flatPlanets[i.url] = i.name
                    : null
            )

            dispatch({
                type: FETCH_ALL_PLANETS,
                payload: flatPlanets
            })
        })
        .catch(error => console.error(error))
}
