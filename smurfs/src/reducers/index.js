import { GET_SMURF, SHOWING_SMURF, ERROR_SMURF } from "../actions";

export const initialState = {
    smurfs: [],
    aquiringSmurf: false,
    error: ''
};

export const smurfReducer = (state = initialState, action) => {
    console.log(state, action);

    switch (action.type) {
        case GET_SMURF:
            return {
                ...state,
                aquiringSmurf: true,
                smurfs: []
            };
        case SHOWING_SMURF:
            return {
                ...state,
                smurfs: action.smurfs,
                aquiringSmurf: false
            };
        case ERROR_SMURF:
            return {
                ...state,
                aquiringSmurf: false,
                error: action.error
            };
        default:
        return state;
  }
};