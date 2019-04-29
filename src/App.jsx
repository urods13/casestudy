import React, {Component} from 'react';
import './css/App.css';
import shoppingcart from './images/shoppingcart.png';
import {
    Route,
    NavLink,
    HashRouter
   } from 'react-router-dom';
   import Cart from './components/Cart';
   import ListOfOrder from './components/ListOfOrder';
   import Products from './components/Products';
   import Home from './components/Home'
   import Footer from './components/footer'

class App extends Component { 
  onClick(){
    alert('Item Added to Cart');
}
  render() {
    return (
      <div>
            <HashRouter>
            <div className='header'>
            <header>Shop Online</header>
            <ul className="nav">
            
                <li><NavLink to="/Cart"> <img src={shoppingcart} alt="Shopping Cart"/></NavLink></li>
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/Products">Products</NavLink></li>
                <li><NavLink to="/ListOfOrder">List of Order</NavLink></li>
                <li><p onClick={this.onClick}>Add to Cart</p></li>  
            </ul>
            
            <div className='way'>
                <Route exact path={["/Home","/"]} component={Home}/>
                <Route path='/Cart' component={Cart}/>   
                <Route path='/Products' component={Products}/>
                <Route path='/ListOfOrder' component={ListOfOrder}/>
            </div>
        </div>
        <Footer/>
        </HashRouter>
        </div>
      
    );
  }
}
export default App;