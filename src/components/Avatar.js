import React, { Component } from "react";
import { Button, ContextualMenu } from "styled";
import Transition from "react-transition-group/Transition";

class _Avatar extends Component {
  state = {
    show: false,
  };

  handleContextualMenu = () => this.setState({ show: !this.state.show });

  render() {
    const { className, initial, onClick } = this.props;

    return (
      <div onClick={this.handleContextualMenu}>
        <div className={className} onClick={onClick}>
          <span>{initial}</span>
        </div>
        <Transition in={this.state.show} timeout={100} unmountOnExit>
          {state => (
            <ContextualMenu arrowOffset={12} className={state}>
              <Button link>Logout</Button>
            </ContextualMenu>
          )}
        </Transition>
      </div>
    );
  }
}

_Avatar.defaultProps = {
  children: null,
  href: null,
  Icons: null,
  to: null,
};

export default _Avatar;
