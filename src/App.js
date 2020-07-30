import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Login from './components/login';
import Products from './components/products';
import Product from './components/product';
import AddProduct from './components/addProduct';
import Orders from './components/orders';
import Users from './components/users';
import Register from './components/register';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

function App() {
  return (
    <div className="App wrapper">
      <BrowserRouter>
        <Navbar/>        
        <Route render={ ({ location }) => (
          <TransitionGroup>
            <CSSTransition
              in={ true }
              appear={ true }
              key={ location.key } 
              timeout={ 800 }
              classNames="fade"
            >
              <Switch >
                <Route exact path="/" component={ Login } />
                <Route path="/add" component={ AddProduct } />
                <Route path="/products" component={ Products } />
                <Route path="/:productId" component={ Product } />
                <Route path="/orders" component={ Orders } />
                <Route path="/users" component={ Users } />
                <Route path="/register" component={ Register } />
                <Route path="/logout" component={ () => <h1>Tschuss</h1> } />
                <Route path="*" component={ () => "404 not found" } />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}/>
      </BrowserRouter> 
    </div>
  );
}

export default App;

