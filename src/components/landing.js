import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="jumbotron jumbo-style">
        <div className="div-style">
          <div className="text-center">
              <h1 style={{fontSize: "30px"}}>I'm a Graphic / Web Designer based in Philippines</h1>
              <p><small>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </small> </p>
              <p><a className="btn btn-default btn-md" href="#">Hire Me</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
