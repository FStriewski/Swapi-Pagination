export const FILTER_BY_NAME = "FILTER_BY_NAME"
export const FILTER_BY_GENDER = "FILTER_BY_GENDER"
export const FILTER_BY_SPECIES = "FILTER_BY_SPECIES"

export const filterByName = (input) => ({
    type: FILTER_BY_NAME,
    payload: input,
})

export const filterByGender= (input) => ({
    type: FILTER_BY_GENDER,
    payload: input,
})

export const filterBySpecies= (input) => ({
    type: FILTER_BY_SPECIES,
    payload: input,
})
