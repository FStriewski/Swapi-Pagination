
export const REQUEST_PAGE = "REQUEST_PAGE"
export const RECEIVE_PAGE = "RECEIVE_PAGE"

const requestPage = (page) => ({
    type: REQUEST_PAGE,
    payload: {
        page
    }
})

const receivePage = (page, results) => ({
    type: RECEIVE_PAGE ,
    payload: {
        page,
        results
    }
})

