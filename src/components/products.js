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
                return (<span className="row">
                            <div className="col s12 m6">
                            <div className="card red darken-1">
                                <div className="card-content white-text">
                                <div>
                                    <img id="card-info" src={`http://localhost:5000/uploads/${current.name}.jpg` } height="350px" weight="350px"></img>
                                    <h3 id="card-info" key={current} className="card-title ">{current.name}</h3><br/>
                                    <p id="card-info">{current.price} $</p>
                                </div>
                                    
                                
                                <div className="card-description">
                                    <h3 key={current} className="card-title ">{current.name}</h3>
                                    
                                </div>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                                </div>

                                <div className="card-action">
                                <a href="#">This is a link</a>
                                <a href="#">This is a link</a>
                                </div>
                            </div>
                            </div>
                        </span>
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
                <div id="data ">
                    { titles }
                </div>
                
                <br/>
                { buttons }
            </div>
        )
    }
}

export default Products;