
export const ADD_STORE = 'ADD_STORE';
export const EDIT_STORE = 'EDIT_STORE';
export const SET_LOADING = 'SET_LOADING';
import Geocoder from 'react-native-geocoder';

export const addStore = store => ({
    type: 'ADD_STORE',
    store
});

export const editStore = (id, store) => ({
    type: 'EDIT_STORE',
    id,
    store
});

export const changeLoading = () => ({
    type: 'SET_LOADING'
});

export function addingStore(store) {
    return function (dispatch) {
        dispatch(changeLoading());
        return Geocoder.geocodeAddress(store.address).then(response => {
            console.log(response[0].position);
            let newStore = {...store, position: response[0].position};
            dispatch(addStore(newStore));
            dispatch(changeLoading());
        }).catch(err => console.log(err))
    }
}
