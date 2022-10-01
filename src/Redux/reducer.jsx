import { PRODUCTS } from "../files/products";
import { PRODUCTITEM, SEARCHFIELD } from "./constant"

const initialState = {
    search: '',
    items: PRODUCTS

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
    console.log(updateProduct)
    
    return {
        ...state,
        items: currentItems
    }
}