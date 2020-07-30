import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

class addProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            price: null
        }
        this.changeName = this.changeName.bind(this)
        this.changePrice = this.changePrice.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    changePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const product = {
            name: this.state.name,
            price: this.state.price
        }
        console.log('onSubmit ', product)
        Axios.post('http://localhost:5000/products', product)
            .then( res => {
                this.props.history.push('/products')
            })
            .catch( err => {
                alert('Doest not work')
            })
    }
    
    render() {
        return (
            <div className="wrapper container">
                <h4>Add a movie</h4>
                <form onSubmit={ this.onSubmit } className="input-field">
                    <div className="col s12 l6">
                        <input 
                            id="form-name-add"
                            type="text" 
                            placeholder="Name..."
                            value={ this.state.name }
                            onChange={ this.changeName }/>
                        <br/>
                        <input 
                            id="form-password-add"
                            type="text" 
                            placeholder="Password..."
                            value={ this.state.price }
                            onChange={ this.changePrice }/>
                        <input type="submit" className="btn btn-red"/>
                        <Link 
                            to={'/products'} 
                            className="btn btn-red" 
                        >Cancel</Link>            
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default addProduct;
