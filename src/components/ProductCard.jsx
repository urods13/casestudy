import React, {Component} from 'react';
import ProductItem from './ProductItem';
  
  class ProductCard extends Component{
  //   constructor(){
  //     super()
  //     this.state= {
  //         itemss:[]
  //     }
      
  // }


    render(){
      let productsList = this.props.productsList;
      return(
        <div className="product-card">
        {/* <img src={this.props.imgUrl} />
        {this.state.itemss.map((itemdata, key) =>
        <div>
          <span>{itemdata.item}</span>
          <span>{itemdata.description}</span>
          <span>{itemdata.price}</span>
        </div>
        )
        } */}
         
                    <ul className="user-list">
                        {productsList.map(user => {
                            return (
                                <li key={user.id}>
                                    <ProductItem key={user.id}
                                        item={user.item} 
                                        description={user.description}
                                        price={user.price}/>
                                </li>
                            )
                        })}
                    </ul>
        {/* <h3>{this.state.itemss.item}</h3>
        <p>{this.state.itemss.description}</p>
        <p>{this.state.itemss.price}</p> */}
       
        </div>
  //  constructor (props){
  //       super(props); 
  //       this.onDelete= this.onDelete.bind(this);
  //  }
  //  onDelete(){
  //   const{onDelete, name}= this.props;
  //   onDelete(name);
  //  }

  //     render(){
  //       const {name,price} = this.props; 
  //         return(
  //           <div>
  //           <span >{name}</span> 
  //           {' | '} 
  //            <span >{price}</span>
  //           {' | '}
  //           <button onClick={this.onDelete}>Delete</button>
  //           </div>
      
        );
    }
}

export default ProductCard;