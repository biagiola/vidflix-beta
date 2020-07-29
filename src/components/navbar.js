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
            authToken: ''
        }
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        this.props.toggleSidebar()
    }
    
    render() {
        const navbar = this.props.authToken ? 
            <nav>
                <div class="nav-wrapper">
                    <a href="#" className="brand-logo center">Vidflix</a>
                    <ul id="nav-mobile" class="left hide-on-sm-and-down">
                        <li onClick={ this.toggleSidebar } style={{fontSize:"30px", cursor:"pointer"}}>&#9776;</li>
                    </ul>
                    <ul id="nav-mobile" class="right hide-on-sm-and-down">
                        <Link to={'/'} onClick={ this.toggleSidebar }>Logout</Link>
                    </ul>
                    
                </div>
            </nav>
            : <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo center">Vidflix</a>
                </div>
            </nav> 

        const sidebar = this.props.toggleSidebar ? <Sidebar/> : <div></div>

        return (
            <div>
                
                { navbar }
            </div>
        )
    }
}

navbar.propTypes = {
  authToken: PropTypes.string
}

const mapStateToProps = state => ({
    authToken: state.casa.authToken
})

const mapDispatchToProps = dispatch => {
    return {
        toggleSidebar: () => dispatch(toggleSidebar())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navbar)