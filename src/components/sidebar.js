import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        console.log('holi');
        this.props.toggleSidebar()
    }

    render() {
        let scope;
        if (this.props.toggleSidebarValue) {
            scope = "250px";
        } else {
            scope = "0px"
        }

        return (
            <div id="myLeftSidenav" className="leftSidenav" >
                <h4 className="closebtn" onClick={ this.toggleSidebar }>&times;</h4>
                <h1 >Account</h1>
                <h2  >Stadistics</h2>
                <h2  >Training</h2>
                <h2  >Read More</h2>
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
