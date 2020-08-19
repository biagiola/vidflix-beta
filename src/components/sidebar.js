import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { toggleSidebar } from '../actions/actions'

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            title: ''
        }
    }

    toggleSidebar = () => {
        this.props.toggleSidebar()
    }

    render() {
        let scope;
        //console.log('this.props.toggleSidebarValue',this.props.toggleSidebarValue)
        if (this.props.toggleSidebarValue) {
            scope = "120px"
        } else {
            scope = "0px"
        }

        return (
            <div 
                id="mySidenav" 
                className="sidebar" 
                style={{ width: scope }}>

                <h6 
                    className="closebtn" 
                    onClick={ this.toggleSidebar }>&times;</h6>

                <Link to={'/account'}>Account</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/orders'}>Orders</Link>
                <Link to={'/'}>Contact</Link>
                
            </div>
        );
    }
}

Sidebar.propTypes = {
  toggleSidebarValue: PropTypes.bool,
  toggleSidebar: PropTypes.func
}

const mapStateToPros = state => ({
  toggleSidebarValue: state.all.toggleSidebarValue
})

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar())
  }
}

export default connect(mapStateToPros, mapDispatchToProps)(Sidebar)
