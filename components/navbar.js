import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { toggleSidebar, toggleNavbar, setNewToken } from '../actions/actions';
import { Link, Redirect } from 'react-router-dom';

import Sidebar from './sidebar';

class navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            authToken: null
        }
        this.handleSidebar = this.handleSidebar.bind(this);
        this.handleNavbar = this.handleNavbar.bind(this);
    }

    componentDidMount() {
        this.setState({
            authToken: this.props.authToken
        })
    }

    handleSidebar() {
        this.props.toggleSidebar()
    }

    shouldComponentUpdate(){
        if(this.state.authToken === null) {
            return true
        }
    }

    handleNavbar() {
        console.log('handleNavbar hola')
        this.props.setNewToken(null)
    }
    
    render() {
        console.log('navbar authToken ', this.props.authToken)
        const navbar = this.props.toggleNavItemsValue ? 
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">Vidflix</a>

                    <ul id="nav-mobile" className="left hide-on-sm-and-down">
                        <li onClick={ this.handleSidebar } style={{fontSize:"30px", cursor:"pointer"}}>&#9776;</li>
                    </ul>

                    <ul id="nav-mobile" className="right hide-on-sm-and-down">
                        <li><Link to={'/'} >Browse</Link></li>
                        <li><Link to={'/'}onClick={ this.handleNavbar }>Logout</Link></li>
                    </ul>
                </div>
            </nav>
        :
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">Vidflix</a>
                    <ul id="nav-mobile" className="right hide-on-sm-and-down">
                        <Link to={'/'} onClick={ this.handleNavbar } >Login</Link>
                    </ul>
                </div>
            </nav> 

        
        return (
            <div>
                <Sidebar/>
                { navbar }
            </div>
        )
    }
}

navbar.propTypes = {
  authToken: PropTypes.string
}

const mapStateToProps = state => ({
    authToken: state.casa.authToken,
    toggleSidebarValue: state.casa.toggleSidebarValue,
    toggleNavItemsValue: state.casa.toggleNavItemsValue
})

const mapDispatchToProps = dispatch => {
    return {
        toggleSidebar: () => dispatch(toggleSidebar()),
        toggleNavbar: () => dispatch(toggleNavbar()),
        setNewToken: (token) => dispatch(setNewToken(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navbar)