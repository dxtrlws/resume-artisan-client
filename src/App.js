import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';

import Home from './components/Home';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      idToken: '',
      profile: {}
    }
  }
  // set deault props for client and domain. This information came from Auth0
  static defaultProps = {
    clientId: 'Qz1N5zdr06_1MPpqCeg5thunm4-U2YpG',
    domain: 'dxtrlws.auth0.com'
  }
  // pass defaultl prop information from Auth0 to 'this.lock'
  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientId, this.props.domain)

    //on authentication
    this.lock.on('authenticated', (authResult) => {
      console.log(authResult);
      // gets user profile from Auth0
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if(error) {
          console.log(error);
          return;
        }
        this.setData(authResult.idToken, profile);
        console.log(profile);
      });
    });
    this.getData();
  }

// set token and profile information to local storage
setData(idToken, profile) {
  localStorage.setItem('idToken', idToken);
  localStorage.setItem('profile', JSON.stringify(profile));
  this.setState({
    idToken: localStorage.getItem('idToken'),
    profile: JSON.parse(localStorage.getItem('profile'))
  });
}

//check for token and get profile data
getData(){
  if(localStorage.getItem('idToken') != null){
    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    }, () => {
      console.log(this.state);
    });
  }
}

  // calls the module login popup from Auth0
  showLock(){
    this.lock.show();
  }
  logout() {
    this.setState({
      idToken: '',
      profile: ''
    }, ()=> {
      localStorage.removeItem('idToken');
      localStorage.removeItem('profile');
    });
  }
  render() {
    let page;
    if (this.state.idToken){
      page = <Dashboard 
      lock={this.lock}
      idToken={this.state.idToken}
      profile={this.state.profile} />
    } else {
      page = <Home />
    }
    return (
      <div className="App">
        <Header
          lock={this.lock}
          onLogoutClick={this.logout.bind(this)}
          onLoginClick={this.showLock.bind(this)}
          idToken={this.state.idToken}
          profile={this.state.profile}/>
        {page}
      </div>
    );
  }
}

export default App;
