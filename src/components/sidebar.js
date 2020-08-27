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
            scope = "sidebar show"
        } else {
            scope = "sidebar "
        }

        return (
            <nav className={ scope }>
                <div 
                    className="closebtn" 
                    onClick={ this.toggleSidebar }>&times;
                </div>
                <div className="text">Menu</div>
                <ul>
                    <li className="active"><a href="#">Dashboard</a></li>
                    <li>
                    <a href="#" className="feat-btn">Features
                        <span className="fas fa-caret-down first"></span>
                    </a>
                    <ul className="feat-show">
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Elements</a></li>
                    </ul>
                    </li>
                    <li>
                    <a href="#" className="serv-btn">Services
                        <span className="fas fa-caret-down second"></span>
                    </a>
                    <ul className="serv-show">
                        <li><a href="#">App Design</a></li>
                        <li><a href="#">Web Design</a></li>
                    </ul>
                    </li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Shortcuts</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
            </nav>
        );
    }
}

Sidebar.propTypes = {
  toggleSidebarValue: PropTypes.bool,
  toggleSidebar: PropTypes.func,
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
