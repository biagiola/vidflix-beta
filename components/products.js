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
        
        //console.log('componentDidMount, this.state.products', this.state.products)
    }

    render() {
        //console.log('render, this.state.products', this.state.products)
        const titles = 
        (this.state.products.length > 0) ? 
             this.state.products.map( current => {
                 //console.log(current.productImage.slice(23, -4))
                 return (<div id="">
                            <div className="">
                                <img src={`http://localhost:5000/uploads/${current.productImage.slice(23, -4)}.jpg` } width="200px" height="290px"  alt="An awesome picture"></img>
                                <div className="" key={current} >
                                    <h4 className="">Fantasy</h4>
                                    <h4 className="">2020</h4><br/>
                                    <Link to={`/${current._id}`} className="">Details</Link>  
                                </div>
                                <div className="title-card">
                                    <h4 className="">{current.name}</h4>
                                </div>
                            </div>
                        </div>
                )
            }
        ) : ''

        //console.log('render, titles', titles)        
        return (
            <div className="wrapper container">
                <h4 className="">Lasted Movies</h4>

                <Link to={'/add'} className="">add</Link>  
                <Link to={'/'} className="" >logout</Link>  

                <div id="">
                    { titles }
                </div>
                
            </div>
        )
    }
}

export default Products;
