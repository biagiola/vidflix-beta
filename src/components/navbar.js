import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { toggleSidebar, toggleNavbar, setNewToken } from '../actions/actions'

import Sidebar from './sidebar'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            authToken: null
        }
        
    }

    componentDidMount() {
        this.setState({
            authToken: this.props.authToken
        })
    }

    handleSidebar = () => {
        this.props.toggleSidebar()
    }

    handleNavbar = () => {
        this.props.setNewToken(null)
    }
    
    render() {
        console.log('navbar authToken ', this.props.authToken)
        const navbar = this.props.authToken === null ?
            <nav>
                <div className="nav-wrapper">
                    <ul id="burger">
                        <li  onClick={ this.handleSidebar }>
                            <a>&#9776;</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <a href="#" className="brand-logo center"></a>
                        </li>
                    </ul>

                    <ul className="nav-left-items">
                        <li><Link to={'/'}onClick={ this.handleNavbar }>Logout</Link></li>
                    </ul>
                </div>
            </nav>
            : 
                ''

        return (
            <div>
                <Sidebar/>
                { navbar }
            </div>
        )
    }
}

Navbar.propTypes = {
  authToken: PropTypes.string
}

const mapStateToProps = state => ({
    authToken: state.all.authToken,
    toggleSidebarValue: state.all.toggleSidebarValue,
    toggleNavItemsValue: state.all.toggleNavItemsValue
})

const mapDispatchToProps = dispatch => {
    return {
        toggleSidebar: () => dispatch(toggleSidebar()),
        toggleNavbar: () => dispatch(toggleNavbar()),
        setNewToken: token => dispatch(setNewToken(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)