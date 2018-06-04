import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import './app.css';

class App extends Component {
  render() {
    return (
      <Router basename="websiteReact">
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skill" component={Skill} />
          <Route path="/portfolio" component={Portfolio} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
