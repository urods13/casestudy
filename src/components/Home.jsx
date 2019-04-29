import React, {Component} from 'react';
//import serveimage from '../images/serveimage.png';
import shoppingcart from '../images/shoppingcart.png';
import '../css/home.css';
// import {
//     Route,
//     NavLink,
//     HashRouter
//    } from 'react-router-dom';
//    import Cart from '../components/Cart';
//    import ListOfOrder from '../components/ListOfOrder';
//    import Products from '../components/Products';

class Home extends Component {
   
    render(){
        return(
            <div className='page'>
                <h2 className='title'>Welcome to Shop Tech!</h2>
                <div className='content'>
                <p>WE are offering a brand new and quality products that are very affordable.</p>
                <p>See it now from products and choose anything you want. </p>
            </div>
            </div>
        );
    }
}
export default Home; 