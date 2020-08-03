import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: ''
        };
        this.deleteProduct = this.deleteProduct.bind(this);
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
            (<button onClick={ this.deleteProduct } className="btn">Delete</button>) 
            : 
            ('')

        return (
            <div className="wrapper container">
                <div className="center">
                    <h3 className="">Product: {this.state.product.name}</h3>
                    <h3 className="">Price: {this.state.product.price}$</h3>

                    <Link to={ '/products/'} className="btn">Back</Link>
                    { deleteButton }
                    <div className="imgContainer">
                        <img 
                            src={`http://localhost:5000/uploads/${this.state.product.name}.jpg` } 
                            width=""
                            height=""
                            alt={`${this.state.product.name}`}></img>
                        <br/>
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