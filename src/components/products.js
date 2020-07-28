import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
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
                        products: res.data.products
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
                 console.log(current)
                return (<figure className="card">
                            <img id="" src={`http://localhost:5000/uploads/${current.name}.jpg` } height="200px" weight="200px"></img>
                            <figcaption>
                                <p key={current} >{current.name}</p>
                            </figcaption>    
                        </figure>
                )
            }
        ) : ''

        const buttons = 
        (this.state.products.length > 0) ? 
            <button id="button" className="btn">Send</button>
         : ''

        console.log('render, titles', titles)        
        return (
            <div className="wrapper container">
                <h4 className="center">Watch now!</h4>
                <Link to={'/register'} id="button" className="btn">ASDF</Link>  
                <Link to={'/'} id="button" className="btn" >BACK</Link>  
                <div id="content">
                    { titles }
                </div>
                
                <br/>
                { buttons }
            </div>
        )
    }
}

export default Products;