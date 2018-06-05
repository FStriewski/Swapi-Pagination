// Taken from https://medium.com/@pierrecriulanscy/working-with-paginated-api-in-redux-be871818e444

import { combineReducers } from 'redux'


const createPaginationReducer = (endpoint) => {

    const pages = (pages = {}, action = {}) => {

    switch (action.type) {
        case 'REQUEST_PAGE':
            return {
                ...pages,
                [action.payload.page]: {
                    ids: [],
                    fetching: true
                }
            }
        case 'RECEIVE_PAGE': {
            return {
                ...pages,
                [action.payload.page]: {
                    ids: action.payload.results.filter(item => item.id),
                    fetching: false
                }
            }
        }
        default:
            return pages
    }
}

const currentPage = (currentPage = 1, action = {}) =>
    action.type == 'REQUEST_PAGE' ? action.payload.page : currentPage

const onlyForEndpoint = (reducer) => (state = {}, action = {}) =>
    typeof action.meta == 'undefined' ? state : action.meta.endpoint == endpoint ? reducer(state, action) : state

const paginations = onlyForEndpoint(
    combineReducers({
        pages,
        currentPage
    })
)

}

const shipPagination = createPaginationReducer('/starships/')
//const usersPagination = createPaginationReducer('/users/')