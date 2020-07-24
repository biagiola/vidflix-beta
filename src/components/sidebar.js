import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeftNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            title: ''
        }
    }

    render() {
        let scope;
        if (this.props.toggleSidebar) {
            scope = "250px";
        } else {
            scope = "0px"
        }

        return (
            <div id="myLeftSidenav" className="leftSidenav" >
                <h4 className="closebtn" onClick={ this.props.close }>&times;</h4>
                <h1 >Account</h1>
                <h2  >Stadistics</h2>
                <h2  >Training</h2>
                <h2  >Read More</h2>
            </div>
        );
    }
}

const mapStateToPros = state => ({
    toggleSidebar: state.casa.toggleSidebar
})

export default connect(mapStateToPros, null)(LeftNavbar);
