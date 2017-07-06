import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getAuthUrl, login, logoutSession } from "adapters";
import { addAuthToken, logout } from "actions";

import { Button, NavBar, Nav } from "styled";

class Navigation extends Component {
  componentDidMount() {
    const { dispatch, auth } = this.props;

    if (!window.sessionStorage) {
      return;
    }

    if (!auth.toJS().isAuthenticated) {
      login().then(
        token => {
          if (!token) {
            this.props.router.push("/");
            return;
          }
          dispatch(addAuthToken(token));
        },
        err => console.log(err)
      );
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
        <Button href={getAuthUrl()}>Sign in</Button>
      </Nav>
    );
    const userInfo = this.props.auth.toJS().userInfo;
    const firstInitial = userInfo ? userInfo.name.given_name[0] : "I";
    const lastInitial = userInfo ? userInfo.name.surname[0] : "C";

    const loggedInNav = (
      <Nav>
        <Button to="/dashboard">Projects</Button>
        <Button onClick={this.logout.bind(this)}>
          <span className="userInitials">
            {firstInitial + lastInitial}
          </span>
        </Button>
      </Nav>
    );
    return (
      <NavBar>
        <Button icon="logo" to="/" noBorder />
        {this.props.auth.toJS().isAuthenticated ? loggedInNav : login}
      </NavBar>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(withRouter(Navigation));
