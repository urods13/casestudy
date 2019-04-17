import React, {Component} from 'react';
//import '../css/header.css';
import PropTypes from 'prop-types';

class Cart extends Component {
    render(){
        return(
                    <Fragment>
                        <form>
                            <div>
                                
                            </div>
                            Name: <br/> <input type="text" name="name" placeholder="Name"/><br/>
                            Address: <br/> <input type="text" name="address" placeholder="Address"/><br/>
                            Type of Payment: <br/><input id="payment" name="grp1" type="radio" value="Card">Card</input><br/>
                                            <input id="payment" name="grp1" type="radio" value='Paypal'>Paypal</input><br/>
                            <br/>
                            <button type="button" onClick={this.props.handleAddUser}>Delete</button>
                        </form>
                    </Fragment>
                );
            }
        }
        
Cart.propTypes = {
    handleChangeInfo: PropTypes.func,
    handleAddUser: PropTypes.func
}
    
export {
     Forms
        }