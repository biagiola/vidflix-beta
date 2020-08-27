import React, { Component } from 'react'
import axios from 'axios'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { setNewToken } from '../actions/actions'

class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    changeEmail = (e) => {
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
            <div className="wrapper">

                <div style={{ 
                        textAlign: "center", 
                        fontSize: "3rem", 
                        paddingTop: "3rem"}}>Account</div>

                <p style={{ textAlign: "justify", margin: "0 30px"}}>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                
            </div>
        )
    }
}

Account.propTypes = {
  setNewToken: PropTypes.func,
}

const mapDispatchToProps = dispatch => {
  return {
    setNewToken: token => dispatch(setNewToken(token))
  }
}

export default connect(null, mapDispatchToProps)(Account)