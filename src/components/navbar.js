import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { toggleSidebar } from '../actions/actions';
import { Link } from 'react-router-dom';

import Sidebar from './sidebar';

class navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            authToken: null
        }
        this.handleSidebar = this.handleSidebar.bind(this);
    }

    componentDidMount() {
        this.setState({
            authToken: this.props.authToken
        })
    }

    handleSidebar() {
        this.props.toggleSidebar()
    }
    
    render() {
        const navbar = this.props.authToken !== null ? 
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">Vidflix</a>
                    <ul id="nav-mobile" className="left hide-on-sm-and-down">
                        <li onClick={ this.handleSidebar } style={{fontSize:"30px", cursor:"pointer"}}>&#9776;</li>
                    </ul>
                    <ul id="nav-mobile" className="right hide-on-sm-and-down">
                        <Link to={'/'} onClick={ this.handleSidebar }>Logout</Link>
                    </ul>
                    
                </div>
            </nav>
        :
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">Vidflix</a>
                    <ul id="nav-mobile" className="right hide-on-sm-and-down">
                        <Link to={'/'} className>Login</Link>
                    </ul>
                </div>
            </nav> 

        const sidebar = this.props.toggleSidebarValue ? <Sidebar/> : <div></div>
        return (
            <div>
                { sidebar }
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
    toggleSidebarValue: state.casa.toggleSidebarValue
})

const mapDispatchToProps = dispatch => {
    return {
        toggleSidebar: () => dispatch(toggleSidebar())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navbar)