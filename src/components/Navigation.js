import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { login, logoutSession, getAccountInfo } from "adapters";
import { addAuthToken, logout, addUserInfo } from "actions";
import CreateForm from "components/CreateForm";

import { Avatar, Button, Content, NavBar, NavItem, NavItemGroup } from "styled";

class Navigation extends Component {
  state = { showNewProjectForm: false };

  componentDidMount() {
    const { dispatch, auth } = this.props;

    if (!window.sessionStorage) {
      return;
    }

    // referencing window.location breaks HMR for some reason..
    // const unAuthenticatedRoutes = ['/patterns'];
    // const routeNeedsAuthentication = !unAuthenticatedRoutes.find(r => r === window.location.pathname);
    if (!auth.toJS().isAuthenticated) {
      login().then(
        token => {
          if (!token) {
            this.props.router.push("/");
            return;
          }
          dispatch(addAuthToken(token));
          getAccountInfo().then(info => {
            this.props.dispatch(addUserInfo(info));
            this.props.router.push("/dashboard");
          });
        },
        err => {
          if (err) console.log(err);
        }
      );
    }
  }

  handleLogout = () => {
    logoutSession();
    this.props.dispatch(logout());
    this.props.router.push("/");
  }

  handleNewProjectForm = () => this.setState({ showNewProjectForm: true });

  render() {
    const userInfo = this.props.auth.toJS().userInfo;
    const firstInitial = userInfo ? userInfo.name.given_name[0] : null;
    const showNewProjectForm = this.state;
    /*
      We need to replace this when we switch to RR4
    */
    const currentPath = this.context.location.pathname;

    if (this.props.auth.toJS().isAuthenticated) {
      if (currentPath === "/dashboard") {
        return (
          <Content full>
            <NavBar>
              <Button icon="logo" to="/dashboard" noBorder noHover />

              <NavItemGroup right>
                <NavItem>
                  <Button
                    icon="more"
                    iconSize={28}
                    onClick={this.handleNewProjectForm}
                    stacked
                  >
                    Add Project
                  </Button>
                </NavItem>
                <NavItem>
                  <Button icon="notification" fill iconSize={32} noBorder />
                  <Avatar
                    initial={firstInitial}
                    mr={16}
                    onClick={this.handleLogout}
                  />
                </NavItem>
              </NavItemGroup>
            </NavBar>

            {/*
              Create New Project Form
            */}

            {showNewProjectForm
              ? <CreateForm
                  show={this.state.showNewProjectForm}
                  onClose={() => {
                    this.setState({
                      showNewProjectForm: false
                    });
                  }}
                />
              : null}
          </Content>
        );
      } else {
        return (
          <NavBar>
            <Button icon="logo" to="/dashboard" noBorder noHover />
            <NavItemGroup right>
              <NavItem>
                <Button icon="todo" iconSize={28} fill stacked>
                  Tasks
                </Button>
              </NavItem>
              <NavItem>
                <Button icon="notification" fill iconSize={32} noBorder />
                <Avatar
                  initial={firstInitial}
                  mr={16}
                  onClick={this.handleLogout}
                />
              </NavItem>
            </NavItemGroup>
          </NavBar>
        );
      }
    } else {
      return <Content>{login}</Content>;
    }
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
});

/*
  We need to replace this when we switch to RR4
*/

Navigation.contextTypes = {
  router: PropTypes.object,
  location: PropTypes.object
};

export default connect(mapStateToProps)(withRouter(Navigation));
