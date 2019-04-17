import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Tables extends Component { 

    render() {
    
        return (
            <Fragment>
                <table className='order-cart'>
                <thead>

                </thead>
                <tbody>
                    <tr className='user-table-row'>
                        <th className='order-cart-cell'>Items</th>
                        <th className='order-cart-cell'>Quantity</th>
                        <th className='order-cart-cell'>Price</th>
                        <th className='order-cart-cell'>Total</th>                       
                        <th className='order-cart-cell'></th>
                    </tr>
                    {
                        this.props.productsList.map((product, index) =>{
                            return (
                                <tr className='user-table-row'>
                                    <th className='user-table-cell'>{product.items}</th>
                                    <th className='user-table-cell'>{product.quantity}</th>
                                    <th className='user-table-cell'>{product.price}</th>
                                </tr>
                            )
                    })
                    }
                </tbody>
                </table>
            </Fragment>
        );
    }
}

Tables.propTypes = {
    productsList: PropTypes.func
}

export {
    Tables
}