import { PRODUCTS } from "../files/products";
import { INCREASECART, DECREASECART, PRODUCTITEM, SEARCHFIELD } from "./constant"

const initialState = {
    search: '',
    items: PRODUCTS,
    quantity: 1,
    totalItem: 0

}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case SEARCHFIELD:
            return {
                ...state,
                search: action.payload,
            };
        case PRODUCTITEM:
            return filterItem(state, action)
        case INCREASECART:
            return increaseCart(state,action)
        case DECREASECART:
            return decreaseCart(state,action)
        


        default:
            return state
    }
}

const filterItem = (state, action) => {
    const currentItems = [...state.items];
    const index = currentItems.indexOf(action.payload);
    const existingItem = currentItems[index];
    let updateProduct = {
        ...existingItem,
        id: action.payload.id
    }
    currentItems[index] = updateProduct;
    
    return {
        ...state,
        items: currentItems
    }
}

const increaseCart = (state, action) => {
    const currentItems = [...state.items];
    const index = currentItems.indexOf(action.payload);
    const totalItem = state.totalItem + 1;

    const existingItem = currentItems[index];


    const updateCart = {
        ...existingItem,
    }

    currentItems[index] = updateCart

    return {
        ...state,
        totalItem,
        items: currentItems
    }
}

const decreaseCart = (state,action) => {
    const currentItems = [...state.items];
    const index = currentItems.indexOf(action.payload);
    const existingItem = currentItems[index];
    const totalItem = state.totalItem && state.totalItem - 1;

    const updateCart = {
        ...existingItem
    }

    currentItems[index] = updateCart;

    return {
        ...state,
        totalItem,
        items: currentItems
    }
}