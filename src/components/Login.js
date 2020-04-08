import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login} from '../actions';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        if(this.props.location.state)
            alert(this.props.location.state.alert)
        if(this.props.auth.authenticated) {
            alert("You are logged in");
            const from = this.props.location.state?this.props.location.state.from:'/reactauth/';
            this.props.history.push(from);
        }
    }

    handleValueChange = (eve) => {
        this.setState({
            [eve.target.name] : eve.target.value
        });
    }

    handleSubmit = async (eve) => {
        eve.preventDefault();
        await this.props.login(this.state);
        if(this.props.auth.authenticated)
        {
            alert("Login successful"); 
            const from = this.props.location.state?this.props.location.state.from:'/reactauth/';
            this.props.history.push(from);
        }
        else {
            alert(this.props.auth.error.message)
            this.props.history.push('/reactauth/login');
        }
        this.setState({
            email: '',
            password: ''
        });
    }

    render() {
        return (
            <div className='card'>
                <h2 style={{textDecoration: 'underline'}}>Login</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="email" value={this.state.email} name="email" onChange={this.handleValueChange} placeholder="Enter your email" required/>
                    <input type="password" minLength={8} value={this.state.password} name="password" onChange={this.handleValueChange} placeholder="Enter password" />
                    <button><div className='btn'>Submit</div></button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(login(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);