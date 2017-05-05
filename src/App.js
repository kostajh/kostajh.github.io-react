import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Articles from './components/Articles.js';

class App extends Component {
  render() {
    return (
      <div className="App fl w-100 pa2">
        <Header />
        <Articles />
        <Footer />
      </div>
    );
  }
}

export default App;
