import React, { Component } from 'react';
import axios from 'axios';
/*import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';*/

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: ''
        };
        //this.onChangeLenguage = this.onChangeLenguage.bind(this);
    }
    
    componentDidMount() {
        // get the lenguages before the render
        axios.get('http://localhost:5000/products/')
            .then( res => {
                //if( res.data.products > 0 ) {
                    console.log('entro', res)
                    this.setState({
                        products: res.data.products.map( books => books.name )
                    })
                //}
            })
        
        console.log('componentDidMount, this.state.products', this.state.products)
    }

    render() {
        console.log('render, this.state.products', this.state.products)
        const titles = 
        (this.state.products.length > 0) ? 
             this.state.products.map( current => {
                return <div key={current}>{current}</div>
            }
        ) : ''
        /*this.state.products.forEach(element => {
            console.log(element)
        });*/
        console.log('render, titles', titles)        
        return (
            <div className="wrapper container">
                <h3 className="">Products</h3>
                { titles }
            </div>
        )
    }
}

export default Products;