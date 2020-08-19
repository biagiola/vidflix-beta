import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import './App.scss'

import Navbar from './components/navbar'
import Login from './components/login'
import Register from './components/register'
import Products from './components/products'
import AddProduct from './components/addProduct'
import Orders from './components/orders';
import Users from './components/users'

function App() {
  return (
    <div className="App wrapper">
      <BrowserRouter>
          <Navbar/>        
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/register" component={ Register } />
            <Route path="/products" component={ Products } />
            <Route path="/orders" component={ Orders } />
            <Route path="/add" component={ AddProduct } />
            <Route path="/users" component={ Users } />
            <Route path="*" component={ () => "404 not found" } />
          </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App

