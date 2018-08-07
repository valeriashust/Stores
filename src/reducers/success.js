import {SUCCESS} from "../actions/actions";

export default function success(state = false, action) {
    switch (action.type) {

        case SUCCESS: {
            return action.state;
        }

        default: {
            return state
        }
    }
}