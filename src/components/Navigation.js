import React, { Component } from "react";
import constants from "constants";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getAuthUrl, login, logoutSession } from "adapters";
import { addAuthToken, logout } from "actions";

import {
  Avatar,
  Button,
  NavBar,
  NavItem,
  NavItemGroup,
  OutlineIcon,
  Subheading
} from "styled";

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
      <NavItem right>
        <Button href={getAuthUrl()}>Sign in</Button>
      </NavItem>
    );
    const userInfo = this.props.auth.toJS().userInfo;
    const firstInitial = userInfo ? userInfo.name.given_name[0] : "I";

    const loggedInNav = (
      <NavItemGroup right>
        <NavItem>
          <Button to={`/edit/projects/${constants.project.newProject}`} stacked>
            <OutlineIcon name="add" />
            <Subheading mt={6} capitalize micro>Add Project</Subheading>
          </Button>
        </NavItem>
        <NavItem>
          <Button icon="notification" iconSize={32} noBorder />
          <Avatar initial={firstInitial} mr={16} onClick={this.logout.bind(this)} />
        </NavItem>
      </NavItemGroup>
    );
    return (
      <NavBar>
        <Button icon="logo" to="/dashboard" noBorder noHover />
        {this.props.auth.toJS().isAuthenticated ? loggedInNav : login}
      </NavBar>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(withRouter(Navigation));
