import React, { Component } from 'react'
import axios from 'axios'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { setNewToken } from '../actions/actions'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    changeEmail (e) {
        this.setState({
            email: e.target.value
        })
    }

    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit = (e) => {
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

    goBack = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="wrapper container">

                <div className="register-brand">
                    <div id="brand-msg" className="">Create a new user</div>
                </div>

                <div className="form-login">
                    <form onSubmit={ this.onSubmit } className="input-field">
                        <div className="">
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
                            <div className="form-buttons">
                                <input 
                                    id="form-submit-register" 
                                    className="btn "
                                    type="submit"
                                    value="Register" />
                                <input 
                                    id="form-submit-register" 
                                    className="btn "
                                    type="submit"
                                    onClick={ this.goBack }
                                    value="Back" />
                            </div>
                        </div>
                    </form> 
                </div>
                
            </div>
        )
    }
}

Login.propTypes = {
  setNewToken: PropTypes.func,
}

const mapDispatchToProps = dispatch => {
  return {
    setNewToken: (token) => dispatch(setNewToken(token))
  }
}

export default connect(null, mapDispatchToProps)(Login)