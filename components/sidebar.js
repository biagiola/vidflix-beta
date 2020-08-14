import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleSidebar } from '../actions/actions';

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            title: ''
        }
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        this.props.toggleSidebar()
    }

    render() {
        let scope;
        //console.log('this.props.toggleSidebarValue',this.props.toggleSidebarValue)
        if (this.props.toggleSidebarValue) {
            scope = "120px";
        } else {
            scope = "0px"
        }

        return (
            <div id="mySidenav" className="sidebar" style={{ width: scope }}>
                <h6 href="javascript:void(0)" className="closebtn" onClick={ this.toggleSidebar }>&times;</h6>
                <Link to={'/account'}>Account</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/orders'}>Orders</Link>
                <Link to={'/'}>Contact</Link>
            </div>
        );
    }
}

const mapStateToPros = state => ({
    toggleSidebarValue: state.casa.toggleSidebarValue
})

const mapDispatchToProps = dispatch => {
    return {
        toggleSidebar: () => dispatch(toggleSidebar())
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(Sidebar);
