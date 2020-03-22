import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Product.css';



const products= [
    {name: "Arm Chair", image: <img className='product-img' src='img/arm-chair.jpg'/>, ean:"978020137962", color:"Slate", weight:"34.9kg", description:"Dolor sit amet, consectetur adipisicing elit, sed do eiusmod temportion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor u fugiat nulla pariatur. Excepteur id est laborum.", quantity:"105", price: "$59.99", active:"yes", view:<Button variant="primary">view</Button> , edit: <Button variant="success">edit</Button>, delete: <Button variant="danger">delete</Button>},
    {name: "High Back Sofa", image:<img className='product-img' src='img/couch.jpg'/>, ean:"7039129931875", color:"Steel", weight:"96 kg", description:"consectetur a eiusmod tempor incididunt ut labore et dolore magna aliqua eprehenderit in voluptatet non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", quantity:"17", price: "$350", active:"yes", view:<Button variant="primary">view</Button>, edit: <Button variant="success">edit</Button>, delete: <Button variant="danger">delete</Button>},
    {name: "Coffee Table", image: <img className='product-img' src='img/table.jpg'/>, ean:"2487265706225", color:"Chesnut", weight:"5.6kg", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod uip lum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", quantity:"183", price: "$115", active:"yes", view:<Button variant="primary">view</Button>, edit: <Button variant="success">edit</Button>, delete: <Button variant="danger">delete</Button>},
    {name: "Mid-Century Bed", image: <img className='product-img' src='img/bed.jpg'/>, ean:"6522987727410", color:"Oak wood & Grey", weight:"111kg", description:"Sed do eiusmod aliquip ex ea reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", quantity:"73", price: "$490", active:"yes", view:<Button variant="primary">view</Button>, edit: <Button variant="success">edit</Button>, delete: <Button variant="danger">delete</Button>},
    {name: "Storage Drawer", image: <img className='product-img' src='img/drawer.jpg'/>, ean:"1733487891746", color:"Black", weight:"6kg", description:" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ", quantity:"105", price: "$45.99", active:"yes", view:<Button variant="primary">view</Button>, edit: <Button variant="success">edit</Button>, delete: <Button variant="danger">delete</Button>},
    {name: "Free Standing Wardrobe", image: <img className='product-img' src='img/wardrobe.jpg'/>, ean:"2557636734376", color:"Maple", weight:"136kg", description:"Adipisicing elit, sed do Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu int occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", quantity:"69", price: "$178.59", active:"yes", view:<Button variant="primary">view</Button>, edit: <Button variant="success">edit</Button>, delete: <Button variant="danger">delete</Button>},
    {name: "Work Desk", image: <img className='product-img' src='img/desk.jpg'/>, ean:"5945605581743", color:"Black & Beige", weight:"25kg", description:"Ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex .", quantity:"87", price: "$189", active:"yes", view:<Button variant="primary">view</Button>, edit: <Button variant="success">edit</Button>, delete: <Button variant="danger">delete</Button>},
  ]

const product = (props) => {
const renderProduct = (product, index ) => {

      return (

        <tr key={index}>
          <th>{product.name}</th>
          <th>{product.image}</th>
          <th>{product.ean}</th>
          <th>{product.color}</th>
          <th>{product.weight}</th>
          <th>{product.description}</th>
          <th>{product.quantity}</th>
          <th>{product.price}</th>
          <th>{product.active}</th>
          <th>{product.view}</th>
          <th>{product.edit}</th>
          <th>{product.delete}</th>
        </tr>

      )
    }
    // render() {
      return (
        <div className="App product-list">
          <h5></h5><br/>
        <h1> Product List </h1> <br/>
         <Button variant="info" className='new-product'>ADD NEW</Button>

        <ReactBootStrap.Table responsive className="product">
    <thead>
      <tr>
        <th>NAME</th>
        <th>IMAGE</th>
        <th>EAN</th>
        <th>COLOR</th>
        <th>WEIGHT</th>
        <th>DESCRIPTION</th>
        <th>QUANTITY</th>
        <th>PRICE</th>
        <th>ACTIVE</th>
        <th>VIEW</th>
        <th>EDIT</th>
        <th>DELETE</th>
      </tr>
    </thead>
    <tbody>
      {products.map(renderProduct)}
    </tbody>
  </ReactBootStrap.Table>


        </div>

      );
  }





export default product;
