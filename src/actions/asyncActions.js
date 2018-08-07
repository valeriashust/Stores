import Geocoder from 'react-native-geocoder';
import {addStore, setError, setLoading, setSuccess,} from './actions';

export function asyncAddStore(store) {
    return function (dispatch) {
        dispatch(setLoading());
        return Geocoder.geocodeAddress(store.address)
            .then(response => {
                    if (!response[0]) {
                        dispatch(setError(true));
                    }
                    else {
                        let newStore = {...store, position: response[0].position};
                        dispatch(addStore(newStore));
                        dispatch(setSuccess(true));
                        dispatch(setError(false));
                    }

                    dispatch(setLoading());
                }
            )
            .catch(err => {
                    console.log(err);
                    dispatch(setError(true));
                    dispatch(setLoading());
                }
            )
    };
}
