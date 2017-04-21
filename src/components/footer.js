import React, { Component } from 'react';

class Footer extends Component {
  render() {
const containerCustom = {
      marginLeft: "auto",
      marginRight: "auto",
      width: "800px",
      listStyle: "none"
    }
    return (
      <footer className="breadcrumb" style={{background: "white"}}>
          <div className="container-custom">
            <div className="navbar-header" style={{marginTop: "5px"}}>
              <button type="button" className="navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="#" style={{fontWeight: "bold"}}>Copyright 2017 <span style={{color: "red"}}>Burnstudio</span></a>
            </div>
            <div className="navbar-collapse" id="bs-example-navbar-collapse-1">
              <ol className="breadcrumb navbar-right" style={{background: "white"}}>
                <li><a id="active-color" href="#">portfolio</a></li>
                <li><a href="#">about me</a></li>
                <li><a href="#">contact me</a></li>
              </ol>
            </div>
          </div>
      </footer>
    );
  }
}

export default Footer;
