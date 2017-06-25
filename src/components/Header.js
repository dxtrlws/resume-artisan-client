import React, {Component} from 'react';


class Header extends Component {
  onLoginClick(){
    this.props.onLoginClick();
  }
  onLogoutClick(){
    this.props.onLogoutClick();
  }
  render() {
    let navItems;
    if (this.props.idToken) {
      navItems = <li><a className="sign-up" href="#" onClick={this.onLogoutClick.bind(this)}>Logout</a></li> 
    }else {
      navItems = <li><a className="sign-up" href="#" onClick={this.onLoginClick.bind(this)}>Login</a></li> 
    }
    return (
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">Resume Artisan</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                {navItems}
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Header;