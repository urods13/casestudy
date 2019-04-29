import React, {Component} from 'react';
import '../css/products.css';
import cellphone from '../images/cellphone.png';
import laptop from '../images/laptop.png';
import ps4 from '../images/ps4.png';
import speaker from '../images/speaker.png';
import smarttv from '../images/smarttv.png';
import camera from '../images/camera.png';
import { stringify } from 'querystring';
import ProductCard from './ProductCard';
// import {
//     getUserList
//   } from '../util/service-helper';
class Products extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            productsList:[],
            imgUrl:[cellphone,
                laptop,
               ps4,
                speaker,
                smarttv,
                camera
        ]
        }  
        this.handleClick= this.handleClick.bind(this) 
        this.handleClick2= this.handleClick2.bind(this)
    }
    componentDidMount(){
        fetch("http://localhost:8080/restsample01/rest/users")
        .then(response => response.json())
       .then(data => {
           this.setState({productsList:data})
        })
    }
    handleClick(){
        this.setState(prevState =>{
            return {
                count: prevState.count + 1
            }
        })

    }
    handleClick2(){
        this.setState(prevState =>{
            return {
                count: prevState.count - 1
            }
        })
        
    }

    render(){

        return(
            
            <section className='products'>
            <h2 className='title'>Products</h2>
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.handleClick}>+</button>
                <button onClick={this.handleClick2}>-</button>
                <div>Total: </div>
            </div>
            <div className='container'>
            <ProductCard
            imgUrl={this.state.imgUrl}
            productsList={this.state.productsList}
            />
            {/* <ProductCard 
            imgUrl={cellphone}
            item= 'Galaxy S8+'
            description='Galaxy S8+ has large display of 6.2 inches, high pixel count of 12 MP and,
             high speed processor of 2.35 GHz processor'
             price= '18,500'
            />
            <ProductCard 
            imgUrl={laptop}
            item= 'GalaxyHP ProBook 430 G6 Notebook PC'
            description='ull-featured, thin, and light, the HP ProBook 430 lets professionals stay productive 
            in the office and on the go. Stylish design plus optional quad-core performance.'
             price= '63,856'
            />
            <ProductCard 
            imgUrl={ps4}
            item= 'Sony PlayStation 4 Pro'
            description='The PS4 Pro can output 4K and HDR video, also it comes with a 1TB hard drive.'
             price= '23,490'
            />
            <ProductCard 
            imgUrl={speaker}
            item= 'JBL wireless bluetooth speaker'
            description='Full-featured waterproof portable speaker with high-capacity battery to charge your
            devices'
             price= '1,150'
            />
            <ProductCard 
            imgUrl={smarttv}
            item= 'Samsung 32" Smart HD'
            description='Enjoy truly Lifelike picture quality with the sound of a movie theater with Samsung 
            K series 32" TV'
             price= '79,250'
            />
            <ProductCard
            imgUrl={camera}
            item= 'Nikon D3300'
            description='Nikon has always brought premium DSLR cameras to Philippines. One of the favourites<b
            among professional photographers in The Philippines is the Nikon D3300.'
             price= '15,555'
            /> */}
            </div>
            </section>
            
        );
    }
}

export default Products;