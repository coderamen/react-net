import React, { Component } from 'react';

class About extends Component {
  render() {
    const aboutStyles = {
      background: "#e5e5e5",
      marginTop: "30px",
      paddingTop: "30px",
      paddingBottom: "30px"
    }
    const iconRSS ={
      paddingTop: "4px",
      paddingLeft: "7px",
      paddingRight: "5px",
      marginLeft: "10px"
    }

    return (
    <div style={aboutStyles}>
      <div className="container-custom">
        <div className="row">
          <div className="col-md-6">
            <h3>About Me</h3>
            <p style={{fontSize:"12px"}}>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            <p style={{fontSize:"12px"}}>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. </p>
            <br/>
              <div className="icons">
                <i className="fa fa-facebook fa-2x" style={{paddingLeft: "9px", marginRight: "10px"}}></i>
              </div>
              <div className="icons">
                <i className="fa fa-twitter fa-2x"></i>
              </div>
              <div className="icons2">
                <i className="fa fa-rss fa-2x" style={iconRSS}></i>
              </div>

          </div>
          <div className="col-md-6">
            <h3>What's New</h3>
            <div className="row">
              <div className="col-sm-3">
                <div className="card-image">
                  <img src={'http://placehold.it/85x60'}></img>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="new-content">
                  <p>This is Photoshop's version  of Lorem Ipsum.</p>
                </div>
                <ul className="new-list">
                  <li style={{float: "left"}}><a href="#">Web Design</a> - January 28, 2013 - <a href="#">Admin</a></li>
                </ul>
              </div>
            </div>
            <div className="row" style={{marginTop: "20px"}}>
              <div className="col-sm-3">
                <div className="card-image">
                  <img src={'http://placehold.it/85x60'}></img>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="new-content">
                  <p>This is Photoshop's version  of Lorem Ipsum.</p>
                </div>
                <ul className="new-list">
                  <li style={{float: "left"}}><a href="#">Web Design</a> - January 28, 2013 - <a href="#">Admin</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default About;
