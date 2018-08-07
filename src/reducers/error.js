import {ERROR} from "../actions/actions";


export default function error(state = false, action) {
    switch (action.type) {

        case ERROR: {
            return action.state;
        }

        default: {
            return state
        }
    }
}