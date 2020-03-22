import React, { Component } from 'react';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Product from './Product/Product';
// import './Product/Product.css';

class App extends Component {
  render(){
    return(
      <div className="App">
      <Product/>
      </div>
    );
  }
}



export default App;
