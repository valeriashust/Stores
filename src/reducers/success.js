import {SET_SUCCESS} from '../actions/actions';

function success(state = false, action) {
    switch (action.type) {
        case SET_SUCCESS: {
            return action.state;
        }
        default: {
            return state
        }
    }
}

export default success;
