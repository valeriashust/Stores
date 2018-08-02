import {ADD_STORE, EDIT_STORE} from "./actions";


function reducer(state = {stores: [], currentId: 0}, action) {
    switch (action.type) {
        case ADD_STORE: {
            let newStore = {...action.store, id: state.currentId};
            return {
                ...state, stores: [...state.stores, newStore], currentId: state.currentId + 1
            }
        }
        case EDIT_STORE:
            return {
                ...state,
                stores: state.stores.map(item => (item.id === action.id) ? {...item, ...action.store} : item)
            };

        default: {
            return state
        }
    }
}


export default reducer;