import {ADD_STORE, EDIT_STORE, SET_LOADING} from '../actions/actions';

function stores(state = {items: [], currentId: 0, loading: false}, action) {
    switch (action.type) {
        case ADD_STORE: {
            let newStore = {...action.store, id: state.currentId};
            return {
                ...state,
                items: [...state.items, newStore],
                currentId: state.currentId + 1,
            };
        }

        case EDIT_STORE:
            return {
                ...state,
                items: state.items.map(item => (item.id === action.id) ? {...item, ...action.newInfo} : item)
            };

        case SET_LOADING: {
            return {...state, loading: !state.loading};
        }

        default: {
            return state;
        }
    }
}

export default stores;
