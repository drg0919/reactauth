import {LOGIN,LOGIN_ERROR,CREDENTIALS, LOGOUT} from './types';
import FakePromise from '../FakePromise';

export const login = (data) => async (dispatch) => {
    await FakePromise(1000);
    const {email,password} = data;
    if(email === CREDENTIALS.email&&password===CREDENTIALS.password)
        dispatch({type: LOGIN, payload: CREDENTIALS.token});
    else
        dispatch({type: LOGIN_ERROR, payload: 'Credentials do not match'});
}

export const logout = () => (dispatch) => {
    dispatch({type:LOGOUT});
}