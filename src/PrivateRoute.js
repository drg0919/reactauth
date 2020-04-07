import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Canvas from './components/Canvas';

const PrivateRoute = ({component:Component,alert, authenticated, ...rest}) => {
    return (
       <Route {...rest} render={(rpr) => (
           authenticated===true?<Canvas><Component {...rpr}/></Canvas>:<Redirect to={{pathname: "/login", state:{from: rpr.location.pathname, alert: alert}}} />
       )} />
    )
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(PrivateRoute);