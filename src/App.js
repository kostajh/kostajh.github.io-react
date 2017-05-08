import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Articles from './components/Articles.js';
import Post from './components/Post.js';
import About from './components/About.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App fl w-100 pa2">
          <Header />
          <Switch>
            <Route exact path='/' component={Articles} />
            <Route exact path='/about' component={About} />
            <Route path='/post/:slug' component={Post} />
            <Route render={function () {
                     return <p>Not Found</p>
                   }} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
