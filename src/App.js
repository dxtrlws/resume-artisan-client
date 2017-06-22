import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Home from './components/Home';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Grid>
        <Home />
      </Grid>
        
      </div>
    );
  }
}

export default App;
