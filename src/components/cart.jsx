import React, {Component} from 'react';
import Forms from './forms.jsx';
// import ListOfOrder from '../components/ListOfOrder';
import '../css/cart.css'
import Formscomponent from './formscomponent.jsx';
class Cart extends Component{

        
          render(){
        return(
        <div className="page">
            <h2 className='title'>Your Shopping Cart</h2>
            <div className='content'>
                 Item:
                 Price:
                 Total:
                <form>
                Quantity:<input type="integer" name="quantity" placeholder=""/><br/>
                <button>Delete</button>
                </form>  
                </div>
                <Formscomponent/>          
       </div>
        );
    }
}
export default Cart;