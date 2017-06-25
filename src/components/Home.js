import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className = "container">
        <div className="hero">
          <h1>Hero Banner</h1>
        </div>
        <div className="row feature">
          <div className="col-md-4">
            <i className="fa fa-user fa-3x" aria-hidden="true"></i>
            <h4>Personal Information</h4>
            <p>Tell prospective employeers how awesome you are!</p>
          </div>
          <div className="col-md-4">
            <i className="fa fa-briefcase fa-3x" aria-hidden="true"></i>
            <h4>Work History</h4>
            <p>List all your work history from the start of your career to your current job.</p>
          </div>
          <div className="col-md-4">
            <i className="fa fa-code fa-3x" aria-hidden="true"></i>
            <h4>Skills</h4>
            <p>Show off what you know by listing your skills. Does dog walking count? </p>
          </div>
        </div>
        <div className=" row feature">
          <div className="col-md-4">
            <i className="fa fa-graduation-cap fa-3x" aria-hidden="true"></i>
            <h4>Education</h4>
            <p>Graduated from a coding bootcamp, University or some type of certificate? Be sure to add it!</p>
          </div>
          <div className="col-md-4">
            <i className="fa fa-trophy fa-3x" aria-hidden="true"></i>
            <h4>Awards</h4>
            <p>Got something to be proud about? Go ahead, list those accomplishments!</p>
          </div>
          <div className="col-md-4">
            <i className="fa fa-users fa-3x" aria-hidden="true"></i>
            <h4>References</h4>
            <p>You've impressed some people and they can't stop talking about you? Now's your chance to share it!  </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
