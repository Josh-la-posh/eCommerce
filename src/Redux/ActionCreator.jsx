import * as ActionTypes from './ActionTypes'
import { PRODUCTS } from "../files/products";

export const setSearch = (text) => ({
    type: ActionTypes.SEARCHFIELD,
    payload: text
});

export const checkProduct = (item) => ({
    type: ActionTypes.PRODUCTITEM,
    payload: item
});

export const increaseCart = (item) => ({
    type: ActionTypes.INCREASECART,
    payload: item
});

export const decreaseCart = (id) => ({
    type: ActionTypes.DECREASECART,
    payload: id
});

export const removeItem = (item) => ({
    type: ActionTypes.REMOVEITEM,
    payload: item
});

export const fetchProduct = () => (dispatch) => {
    dispatch(productLoading(true));

    setTimeout(() => {
        dispatch(addProduct(PRODUCTS))
    }, 2000);
}

export const productLoading = () => ({
    type: ActionTypes.PRODUCTLOADING
})

export const productFailed = (errMess) => ({
    type: ActionTypes.PRODUCTFAILED,
    payload: errMess
});

export const addProduct = (product) => ({
    type: ActionTypes.ADDPRODUCT,
    payload: product
});