import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setNewToken, toggleNavbar } from '../actions/actions';

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
            }).then (
                this.props.toggleNavbar()
            )
            .catch( error => {
                console.log(error + " :'(");
            })
        
    }

    render() {
        return (
            <div className="cover-background">
                <div className="form-login">
                    <h4 className="form-title">Login</h4>
                    <form onSubmit={ this.onSubmit } className="input-field">
                        <input 
                            id="form-email" 
                            className="form-group"
                            type="text"
                            placeholder="Email..."
                            value={ this.state.email } 
                            onChange={ this.changeEmail }/>
                        <br/>
                        <input 
                            id="form-password" 
                            className="form-group"
                            type="text"
                            placeholder="Password..."
                            value={ this.state.password } 
                            onChange={ this.changePassword }/>
                        <br/>
                        <input
                            id="form-submit-login" 
                            className="btn"
                            type="submit"
                            value="GO"
                        />
                    </form>     
                </div>

                <div className="register-brand">
                    <div id="register-msg" className="">Sign Up and See What's is Next!</div>
                    <Link to={'/register'} className="btn btn-register">Register</Link>            
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
    setNewToken: token => dispatch(setNewToken(token)),
    toggleNavbar: token => dispatch(toggleNavbar(token))
  }
}

export default connect(null, mapDispatchToProps)(login)