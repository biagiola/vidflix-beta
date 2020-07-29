import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'

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
                 return (<div class="">
                            <div className="card">
                                <img src={`http://localhost:5000/uploads/${current.name}.jpg` } width="200px" height="290px"  alt="An awesome picture"></img>
                                <div className="overlay" key={current} >
                                    <h4 className="contenido">Fantasy</h4>
                                    <h4 className="contenido">2020</h4><br/>
                                    <Link to={`/casa/${current._id}`} className="btn btn-red view-details-btn">Details</Link>  
                                </div>
                                <div>
                                    <h4 className="contenido">{current.name}</h4>
                                </div>
                            </div>
                        </div>
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
                
            </div>
        )
    }
}

export default Products;
