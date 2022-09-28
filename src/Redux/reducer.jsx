import { SEARCHFIELD } from "./constant"

const initialState = {
    search: ''
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case SEARCHFIELD:
            return {
                ...state,
                search: action.payload,
            }


        default:
            return state
    }
}