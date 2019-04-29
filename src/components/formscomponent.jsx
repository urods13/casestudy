import React, {Component} from 'react';
import Form from './forms'
class Formscomponent extends Component{
    constructor(){
        super()
        this.state={
            firstname:"",
            address:"",
            payment:""
            
        }
        this.handleChange= this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({
            firstname: event.target.value
        })
    }
    render(){
        return(
           <Form
           handleChange={this.state.handleChange}
           data={this.state}
           />
        )
    }
}
export default Formscomponent;