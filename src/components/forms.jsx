import React, {Component, Fragment} from 'react';
//import '../css/header.css';
import PropTypes from 'prop-types';
import '../css/forms.css';

// class Forms extends Component {
//     render(){
//         return(
                    // <Fragment>
                    //     <form>
                    //         <div>
                                
                    //         </div>
                    //         Name: <br/> <input type="text" name="name" placeholder="Name" onChange={this.props.handleChangeInfo}/><br/>
                    //         Address: <br/> <input type="text" name="address" placeholder="Address"/><br/>
                    //         Type of Payment: <br/><input id="payment" name="grp1" type="radio" value="Card">Card</input><br/>
                    //                         <input id="payment" name="grp1" type="radio" value='Paypal'>Paypal</input><br/>
                    //         <br/>
                    //         <button type="button" onClick={this.props.handleAddItems}>Add</button>
                    //     </form>
                    // </Fragment>
                    class Forms extends Component { 
                
                        render() {
                        
                            return (
                                <div className='page1'>                                    
                                     <h2 className='title1'>Your Information</h2>
                                    <form className='content1'>
                                        Name: <br/> <input type="text" name="firstname" placeholder=""
                                                    value={this.props.data.firstname}
                                                onChange={this.props.handleChange}/><br/>
                                        Address: <br/> <input type="text" name="address" placeholder="" 
                                                value={this.props.data.address}
                                                onChange={this.props.handleChange} /><br/>
                                        Type of Payment: <select>
                                                        value={this.props.paymentType}
                                                        onChange={this.props.handleChange}
                                                        name = "payment"
                                                        <option value="">Type of Payment</option>
                                                        <option value="card">Card</option>
                                                        <option Value="paypal">Pay-pal</option>
                                        </select>
                                        <button type="button">Checkout</button>
                                    </form>
                                    <h2>Your Info!</h2>
                                    <p>Name: {this.props.data.firstname}</p>
                                    <p>Address: {this.props.data.address}</p>
                                    <p>Type of Payment:{this.props.data.payment}</p>
                                    </div>
                            );
                        }
                    }
                    
                    Forms.propTypes = {
                        handleChange: PropTypes.func,
                        handleAddUser: PropTypes.func,
                    }
                    
export default Forms
                    