import { PRODUCTS } from "../files/products";
import { INCREASECART, DECREASECART, PRODUCTITEM, SEARCHFIELD, REMOVEITEM } from "./constant"

const initialState = {
    search: '',
    items: PRODUCTS,
    totalItem: 0,
    quantity: 0,

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
        case REMOVEITEM:
            return removeItem(state,action)
        

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
    const quantity = state.quantity;
    const totalItem = state.totalItem + 1;
    
    const existingItem = currentItems[index];

    const updateExistingItem = {
        ...existingItem,
        quantity: state.quantity++
        
    }

    const updateCart = {
        ...updateExistingItem,
        quantity: state.quantity
    }

    currentItems[index] = updateCart;
    console.log(localStorage)

    console.log(updateCart.quantity);
    
    const _updateCart = updateCart.quantity && localStorage.setItem(action.payload.id, JSON.stringify(updateCart.quantity))
    const _totalItem = localStorage.setItem('Total Item', JSON.stringify(totalItem));

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

    const updateExistingItem = {
        ...existingItem,
        quantity: state.quantity && state.quantity--
    }

    const updateCart = {
        ...updateExistingItem,
        quantity: state.quantity
    }
    
    console.log(updateCart.quantity);

    currentItems[index] = updateCart;

    const _updateCart = updateCart.quantity ? localStorage.setItem(action.payload.id, JSON.stringify(updateCart)) : localStorage.removeItem(action.payload.id, JSON.stringify(updateCart));
    const _totalItem = totalItem > 0 ? localStorage.setItem('Total Item', JSON.stringify(totalItem)) : localStorage.removeItem('Total Item', JSON.stringify(totalItem));

    return {
        ...state,
        totalItem,
        items: currentItems
    }
}

const removeItem = (state,action) => {
    const currentItems = [...state.items];
    const index = currentItems.indexOf(action.payload);

    const updateCart = currentItems.filter(item => item.id === action.payload);

    currentItems[index] = updateCart;

    return {
        ...state,
        items: currentItems
    }
}