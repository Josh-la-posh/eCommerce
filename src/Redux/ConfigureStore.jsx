import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Reducer } from "./reducer";
import { Product } from "./product";


// export default combineReducers({
//     reducer: Reducer,
//     product: Product
// })

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            reducer: Reducer,
            product: Product,
        }),
        applyMiddleware(thunk, logger)
        );

        return store;
}