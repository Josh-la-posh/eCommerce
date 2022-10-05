import { SEARCHFIELD, PRODUCTITEM, INCREASECART, DECREASECART, REMOVEITEM } from "./constant"

export const setSearch = (text) => ({
    type: SEARCHFIELD,
    payload: text
})

export const checkProduct = (item) => ({
    type: PRODUCTITEM,
    payload: item
})

export const increaseCart = (item) => ({
    type: INCREASECART,
    payload: item
})

export const decreaseCart = (id) => ({
    type: DECREASECART,
    payload: id
})

export const removeItem = (item) => ({
    type: REMOVEITEM,
    payload: item
})