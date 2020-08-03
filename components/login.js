import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setNewToken } from '../actions/actions';

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeEmail (e) {
        this.setState({
            email: e.target.value
        })
    }

    changePassword (e) {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        
        const newUser = {
            email: this.state.email,
            password: this.state.password
        }
        //console.log(newUser)
        axios.post('http://localhost:5000/user/login', newUser)
            .then( res => {
                console.log(':D res: ', res)
                this.props.setNewToken(res.data.token)
                this.props.history.push('/products')
            })
            .catch( error => {
                console.log(error + " :'(");
            })
    }

    render() {
        return (
            <div className="cover-background">
                <div className="wrapper container login">
                    <h4>Login</h4>
                    <form onSubmit={ this.onSubmit } className="input-field">
                        <div className="col s12 l6">
                            <input 
                                id="form-email" 
                                className=""
                                type="text"
                                placeholder="Email..."
                                value={ this.state.email } 
                                onChange={ this.changeEmail }/>
                            <br/>
                            <input 
                                id="form-password" 
                                type="text"
                                placeholder="Password..."
                                value={ this.state.password } 
                                onChange={ this.changePassword }/>
                            <br/>
                            <button id="button" className="btn">GO</button>
                        </div>

                        <div id="register-msg" className="center">Sign Up and See What's is Next!</div>
                        <div className="center-align">
                            <button id="button" className="btn register-btn">
                                <Link to={'/register'} >Register</Link>            
                            </button>
                        </div>
                    </form>     
                </div>
            </div>
        )
    }
}

login.propTypes = {
  setNewToken: PropTypes.func,
}

const mapDispatchToProps = dispatch => {
  return {
    setNewToken: token => dispatch(setNewToken(token))
  }
}

export default connect(null, mapDispatchToProps)(login)