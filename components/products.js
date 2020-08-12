import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'
import Slider from './NetflixSlider'

const movies = [
    {
      id: 1,
      image: '/images/slide1.jpg',
      imageBg: '/images/slide1b.webp',
      title: '1983'
    },
    {
      id: 2,
      image: '/images/slide2.jpg',
      imageBg: '/images/slide2b.webp',
      title: 'Russian doll'
    },
    {
      id: 3,
      image: '/images/slide3.jpg',
      imageBg: '/images/slide3b.webp',
      title: 'The rain',
    },
    {
      id: 4,
      image: '/images/slide4.jpg',
      imageBg: '/images/slide4b.webp',
      title: 'Sex education'
    },
    {
      id: 5,
      image: '/images/slide5.jpg',
      imageBg: '/images/slide5b.webp',
      title: 'Elite'
    },
    {
      id: 6,
      image: '/images/slide6.jpg',
      imageBg: '/images/slide6b.webp',
      title: 'Black mirror'
    }
  ];

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
        //console.log('render, titles', titles)        
        return (
            <div className="wrapper">
                <div className="app">
                    <h4 className="title-slider">Lasted Movies</h4>
                    <Slider>
                        {movies.map(movie => (
                            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
                        ))}
                    </Slider>

                    <h4 className="title-slider">Coming soon</h4>
                    <Slider>
                        {movies.map(movie => (
                            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
                        ))}
                    </Slider>
                </div>
                
            </div>
        )
    }
}

export default Products;