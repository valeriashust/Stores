import {SET_ERROR} from '../actions/actions';

function error(state = false, action) {
    switch (action.type) {
        case SET_ERROR: {
            return action.state;
        }
        default: {
            return state
        }
    }
}

export default error;
