import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="container dashboard">
        <div className="row">
            <div className="col-md-9">
                <h1>My Resumes</h1>
            </div>
            <div className="col-md-3">
                <img src={this.props.profile.picture} role="presentation"/>
                <h3>{this.props.profile.nickname}</h3>
                <strong>{this.props.profile.email}</strong>
            </div>
        </div>    
      </div>
    );
  }
}

export default Dashboard;
