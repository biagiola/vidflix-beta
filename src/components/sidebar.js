import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { 
    toggleSidebar, 
    toggleFeatureSubMenu, 
    toggleServicesSubMenu,
    animateDownArrowFeature,
    animateDownArrowServices
} from '../actions/actions'

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

    toggleFeatureSubMenu = () => {
        this.props.toggleFeatureSubMenu()
        this.props.animateDownArrowFeature()
    }
    
    toggleServicesSubMenu = () => {
        this.props.toggleServicesSubMenu()
        this.props.animateDownArrowServices()
    }

    render() {
        let scope;
        //console.log('this.props.toggleSidebarValue',this.props.toggleSidebarValue)
        if (this.props.toggleSidebarValue) {
            scope = "sidebar show"
        } else {
            scope = "sidebar"
        }

        let showFeature;
        if (this.props.subMenuFeature) {
            showFeature = "feat-show show"
        } else {
            showFeature = "feat-show"
        }

        let showServices;
        if (this.props.subMenuServices) {
            showServices = "serv-show show1"
        } else {
            showServices = "serv-show"
        }

        let arrowFeature;
        if (this.props.downArrowFeatureRotate) {
            arrowFeature = "fas fa-caret-down first rotate"
        } else {
            arrowFeature = "fas fa-caret-down first"
        }

        let arrowServices;
        if (this.props.downArrowServicesRotate) {
            arrowServices = "fas fa-caret-down second rotate"
        } else {
            arrowServices = "fas fa-caret-down second"
        }

        return (
            <nav className={ scope }>
                <div 
                    className="closebtn" 
                    onClick={ this.toggleSidebar }>
                &times;</div>
                
                <div className="text">VidFlix</div>
                <ul>
                    <li className="active"><a href="#">Dashboard</a></li>
                    <li>
                        <a href="#" className="feat-btn" onClick={ this.toggleFeatureSubMenu }>Features
                            <span className={ arrowFeature }></span>
                        </a>
                        <ul className={ showFeature }>
                            <li><a href="#">Pages</a></li>
                            <li><a href="#">Elements</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="serv-btn" onClick={ this.toggleServicesSubMenu }>Services
                            <span className={ arrowServices }></span>
                        </a>
                        <ul className={ showServices }>
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
  animateDownArrowFeature: PropTypes.func,
  animateDownArrowServices: PropTypes.func,
  downArrowFeatureRotate: PropTypes.bool,
  downArrowServicesRotate:PropTypes.bool
}

const mapStateToPros = state => ({
  toggleSidebarValue: state.all.toggleSidebarValue,
  subMenuFeature: state.all.subMenuFeature,
  subMenuServices: state.all.subMenuServices,
  downArrowFeatureRotate: state.all.downArrowFeatureRotate,
  downArrowServicesRotate:state.all.downArrowServicesRotate
})

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar()),
    toggleFeatureSubMenu: () => dispatch(toggleFeatureSubMenu()),
    toggleServicesSubMenu: () => dispatch(toggleServicesSubMenu()),
    animateDownArrowFeature: () => dispatch(animateDownArrowFeature()),
    animateDownArrowServices: () => dispatch(animateDownArrowServices()),
  }
}

export default connect(mapStateToPros, mapDispatchToProps)(Sidebar)
