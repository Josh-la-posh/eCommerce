import { SEARCHFIELD, PRODUCTITEM } from "./constant"

export const setSearch = (text) => ({
    type: SEARCHFIELD,
    payload: text
})

export const checkProduct = (item) => ({
    type: PRODUCTITEM,
    payload: item
})