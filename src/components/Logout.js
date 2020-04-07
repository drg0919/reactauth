import React from 'react';
import { connect } from 'react-redux';
import {logout} from '../actions';

const Logout = ({authenticated, logout}) => {
    return (
        authenticated?<li className="navbar__item" style={{cursor: 'pointer'}} onClick={logout}>Logout</li>:null
    )
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Logout);