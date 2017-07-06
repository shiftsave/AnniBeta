import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { getAuthUrl, login, logoutSession } from 'adapters';
import { addAuthToken, logout } from 'actions';

import { NavBar, Nav, Logo } from 'styled';

class Navigation extends Component {
  componentDidMount() {
    const { dispatch, auth } = this.props;

    if (!window.sessionStorage) {
      return;
    }

    if (!auth.toJS().isAuthenticated) {
      login().then(token => {
        if (!token) {
          this.props.router.push("/");
          return;
        }
        dispatch(addAuthToken(token));
      }, (err) => console.log(err) );
    }
  }

  logout() {
    logoutSession();
    this.props.dispatch(logout());
    this.props.router.push("/");
  }

  render() {
    const login = (
      <Nav>
        <Link href={getAuthUrl()}>Sign in</Link>
      </Nav>);
    const userInfo = this.props.auth.toJS().userInfo;
    const firstInitial = userInfo ? userInfo.name.given_name[0] : "I";
    const lastInitial = userInfo ? userInfo.name.surname[0] : "C";

    const loggedInNav = (
      <Nav>
        <Link to="/dashboard">Projects</Link>
        {/* <Button to="/activity" link>Activity</Button> */}
        <button onClick={this.logout.bind(this)}>
          <span className="userInitials">
            {firstInitial + lastInitial}
          </span>
        </button>
      </Nav>
    );
    return (
      <NavBar>
        <Link to="/">
          <Logo />
        </Link>
        {(this.props.auth.toJS().isAuthenticated ? loggedInNav : login)}
      </NavBar>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(withRouter(Navigation));
