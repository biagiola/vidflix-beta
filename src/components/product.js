import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
/*import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';*/

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: ''
        };
        //this.onChangeLenguage = this.onChangeLenguage.bind(this);
    }
    
    componentDidMount() {
        // get the lenguages before the render
        axios.get(`http://localhost:5000/products/${this.props.match.params.productId}`)
            .then( res => {
                //if( res.data.products > 0 ) {
                    console.log('entro', res)
                    this.setState({
                        product: res.data.product
                    })
                //}
            })
        
        console.log('componentDidMount, this.state.product', this.state.product)
    }

    render() {
        return (
            <div className="wrapper container">
                <h3 className="">ID: {this.state.product._id}</h3>
                <h3 className="">Product: {this.state.product.name}</h3>
                <h3 className="">Price: {this.state.product.price}$</h3>
                <img 
                    src={`http://localhost:5000/uploads/${this.state.product.name}.jpg` } 
                    alt={`${this.state.product.name}`}></img>
                <br/>
                <Link to={ '/products/'}className="btn btn-red">Back</Link>
            </div>
        )
    }
}

export default Products;