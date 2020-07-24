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
            name: '',
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
        console.log(newUser)
        axios.post('http://localhost:5000/user/signup', newUser)
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
            <div className="wrapper container">
                <h4>Register</h4>
                <form onSubmit={ this.onSubmit } className="input-field">
                    <div className="col s12 l6">
                        {/*<input 
                            id="form-name" 
                            type="text"
                            placeholder="Name..."
                            value={ this.state.email } 
                            onChange={ this.changeEmail }/>
                        <br/>*/}
                        <input 
                            id="form-email" 
                            type="text"
                            placeholder="Email..."
                            value={ this.state.email } 
                            onChange={ this.changeEmail }
                            required/>
                        <br/>
                        <input 
                            id="form-password" 
                            type="text"
                            placeholder="Password..."
                            value={ this.state.password } 
                            onChange={ this.changePassword }/>
                        <br/>
                        <button id="button" className="btn">Register</button> <tb/>
                        <Link to={'/'} id="button" className="btn">Back</Link>    
                    </div>
                </form> 
                
            </div>
        )
    }
}

login.propTypes = {
  setNewToken: PropTypes.func,
}

const mapDispatchToProps = dispatch => {
  return {
    setNewToken: (token) => dispatch(setNewToken(token))
  }
}

export default connect(null, mapDispatchToProps)(login)