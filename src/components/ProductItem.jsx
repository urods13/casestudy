import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProductItem extends Component {


 render() {
    return (
        <div className='user'>
            <img src={this.props.imgUrl} alt='product'/>
            <h2 className='user-name'>{this.props.item} </h2>
                <p>{this.props.description}</p>
                <p>{this.props.price}</p>
                <button onClick={this.props.handleAddCart}>Add to Cart</button>
        </div>
    );
}
}
ProductItem.propTypes = {
    item: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string
}

export default ProductItem;