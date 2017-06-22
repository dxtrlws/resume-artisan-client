import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    Resume Artisan
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem><a href="#">Login</a></NavItem>
                <NavItem><a href="#">Sign Up</a></NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
