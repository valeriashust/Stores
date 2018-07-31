import {ADD_STORE, EDIT_STORE} from "./actions";


function reducer(state = [], action) {
    switch (action.type) {
        case ADD_STORE:
            return [
                ...state,
                action.store
            ];
        case EDIT_STORE:
            return state.map(item =>
                (item.id === action.id)
                    ? {...item, name: action.name, time: action.time, address: action.address}
                    : item);
        default:
            return state
    }
}

export default reducer;