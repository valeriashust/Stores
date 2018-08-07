import {ADD_STORE, EDIT_STORE, SET_LOADING} from "../actions/actions";

export default function stores(state = {stores: [], currentId: 0, loading: false}, action) {
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

        case SET_LOADING: {
            return {...state, loading: !state.loading};
        }

        default: {
            return state
        }
    }
}