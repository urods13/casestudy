import React, {Component} from 'react';
import '../css/products.css';
import shoppingcart from '../images/shoppingcart.png';

class Products extends Component{
    render(){
        return(
            <div className='products'>
            <button type="button"><img src={shoppingcart} alt="Add to Cart"/><p id='addCart'>Add to Cart</p></button>
            </div>
        );
    }
}

export default Products;