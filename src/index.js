import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Styles from '../style/style.css';
import NavBar from './components/nav_bar';
import Landing from './components/landing';
import Projects from './components/projects';
import About from './components/about';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Landing />
        <Projects />
        <About />
        <Footer />
      </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.app'));
