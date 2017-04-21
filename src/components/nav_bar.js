import React, { Component } from 'react';


class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed =!this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";
    const navrightStyle = {
      marginTop: "7px",
      marginBottom: "0"
    }
    return (
      <nav className="navbar breadcrumb navbar-fixed-top">
        <div className="container-custom">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#" className="navbar-brand">burn<span id="brand-red">studio</span></a>
          </div>
          <div className={"navbar-collapse" + navClass} id="bs-example-navbar-collapse-1">
            <ul className="breadcrumb navbar-right" style={navrightStyle}>
              <li className="active"><a href="#">portfolio</a></li>
              <li><a href="#">about me</a></li>
              <li><a href="#">contact me</a></li>
            </ul>
          </div>
        </div>
      </nav>
      );
    }
  }

export default NavBar;

// this.state.term = event.target.value //BAD!!!

// onInputChange(event) { //Handling User event
//   console.log(event.target.value);
// }

// const navStyle = {
//   borderBottom: "1px solid #e5e5e5"
// };
// const navrightStyle = {
//   marginTop: "7px",
//   marginBottom: "0",
//   color: "black"
// }
