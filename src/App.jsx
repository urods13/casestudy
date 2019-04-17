import React, { Component } from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Body from './components/body.jsx';
import Products from './components/products.jsx';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
        <Products/>
        <Footer/>
      </div>
    );
  }
}

export default App;
