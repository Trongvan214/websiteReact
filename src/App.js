import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Home from './pages/home';
import About from './pages/about';
import Skill from './pages/skill';
import Portfolio from './pages/portfolio';
import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/websiteReact/" component={Home} />
          <Route path="/websiteReact/about" component={About} />
          <Route path="/websiteReact/skill" component={Skill} />
          <Route path="/websiteReact/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;
