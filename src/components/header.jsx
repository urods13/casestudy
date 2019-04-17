import React, {Component} from 'react';
import '../css/header.css';
//import serveimage from '../images/serveimage.png';
import shoppingcart from '../images/shoppingcart.png';

class Header extends Component {
    render(){
        return(
            <div className='header'>
            <header>Shop Online</header>
            <ul className="nav">
                <li><a href="#Cart"> <img src={shoppingcart} alt="Shopping Cart"/></a></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#listofOrder">List of Order</a></li>  
            </ul>
        </div>
        );
    }
}
export default Header; 