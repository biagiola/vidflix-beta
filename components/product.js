import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: '',
            modal: false
        };
        this.deleteProduct = this.deleteProduct.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    
    componentDidMount() {
        // get the lenguages before the render
        axios.get(`http://localhost:5000/products/${this.props.match.params.productId}`)
            .then( res => {
                //if( res.data.products > 0 ) {
                    this.setState({
                        product: res.data.product
                    })
                //}
            })
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        })
    }

    deleteProduct(e) {
        e.preventDefault()

        const config = {
            headers: { Authorization: `Bearer ${this.props.authToken}` }
        };
        
        axios.delete( 
            'http://localhost:5000/products/' + this.props.match.params.productId,
            config
        )
            .then( res => {
                console.log('product.js delete then ', res)
                this.props.history.push('/products')
            })
            .catch( err => {
                console.log('product.js delete then ', err)
                alert('Unauthorized user')
            })
    }

    render() {

        const deleteButton = this.props.authToken ? 
            (<button onClick={ this.toggleModal } className="btn">Delete</button>) 
            : 
            ('')

        const imageName = this.state.product ? this.state.product.productImage.slice(8, -4) : ''

        const scope = this.state.modal ? "block" : "none"
        const position = this.state.modal ? "fixed" : "relative"

        return (
            <div className="wrapper container">

                <div id="productData" className="productContainer">
                    <img 
                        id="big-img"
                        src={`http://localhost:5000/uploads/${imageName}.jpg` } 
                        width="370"                        
                        height="556"
                        alt={`${this.state.product.name}`}>
                    </img>
                    <div className="descriptionContainer">
                        <h4 className="">{this.state.product.name}</h4>
                        <h4 className="">{this.state.product.price}$</h4>
                        <h4>Synapsis</h4>
                        <p id="synapsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                
                <div id="productBtns">
                    <Link to={ '/products/'} className="btn">Back</Link>
                    { deleteButton }
                </div>
                
                <div className="modal modalDelete" style={{ display: scope, position: position  }}>
                    <div className="modalContent" >
                        <p>Are you sure to delete it?</p>
                        <span className="btn" onClick={ this.deleteProduct }>YES</span>
                        <span className="btn" onClick={ this.toggleModal }>NO</span>
                    </div>    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authToken: state.casa.authToken
})

export default connect(mapStateToProps, null)(Products);