import React, { Component } from 'react';

class Projects extends Component {
  render() {
    const containerCustom = {
        marginLeft: "auto",
        marginRight: "auto",
        width: "800px"
      }
    return (
      <div className="container-custom">
        <h3 style={{marginBottom: "30px"}}>Latest Project</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-image">
                <img className="img-responsive" src={'http://placehold.it/798x410'}></img>
              </div>
                <div className="card-content text-center">
                  <h5>1WD.TV Project</h5>
                  <p>Web Design, Freelance</p>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-image">
                <img className="img-responsive" src={'http://placehold.it/798x410'}></img>
              </div>
                <div className="card-content text-center">
                  <h5>1WD.TV Project</h5>
                  <p>Web Design, Freelance</p>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-image">
                <img className="img-responsive" src={'http://placehold.it/798x410'}></img>
              </div>
                <div className="card-content text-center">
                  <h5>1WD.TV Project</h5>
                  <p>Web Design, Freelance</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
