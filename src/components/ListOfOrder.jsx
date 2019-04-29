import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListOfOrder extends Component { 
   
    render() {
    
        return (
           <div>
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
            {/* //         {
            //             this.props.productsList.map((product, index) =>{
            //                 return (
            //                     <tr className='order-table-row'>
            //                         <th className='order-table-cell'>{product.items}</th>
            //                         <th className='order-table-cell'>{product.quantity}</th>
            //                         <th className='order-table-cell'>{product.price}</th>
            //                     </tr>
            //                 )
            //         })
            //         } */}
                </tbody>
                </table>
           </div>
        );
    }
}
export default ListOfOrder