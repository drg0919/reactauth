import {LOGIN,LOGIN_ERROR,LOGOUT} from '../actions/types';

const initialState = {
    authenticated: null,
    token: null,
    error: {
        present: null,
        message: null
    }
}

export default (state=initialState,action) => {
    switch (action.type) {
        case LOGIN:
            return {...state,authenticated:true, token: action.payload};
        case LOGIN_ERROR: 
            return {...state,error: {present: true, message: action.payload}};
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}