import React, { Component } from "react";
import { createFolder } from "adapters";
import { addProject } from "actions";
import { Button, Dialog, Heading, FormGroup, Input, Overlay, Paragraph } from "styled";

export default class ProjectForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      client: "",
      validationMessage: ""
    };
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    const { name } = this.state;
    this.setState({ validationMessage: "" });
    if (!this.validateForm()) {
      this.setState({
        validationMessage: `Sorry, "${name}" is already in use`
      });
      return;
    }
    createFolder(`/${this.state.name}`)
      .then(project => {
        const { path_display } = project;
        this.props.dispatch(addProject(project));
        this.props.router.push(`/project${path_display}`);
      })
      .catch(err => console.log(err));
  }
  validateForm() {
    if (this.props.getProjectByName(this.state.name)) {
      return false;
    }
    return true;
  }
  render() {
    const { validationMessage } = this.state;
    return (
      <Overlay>
        <Dialog>
          <FormGroup onSubmit={this.submit} stacked>
            <Heading mb={12}>Add New Project</Heading>
            <Input
              placeholder="Enter You Project Name"
              autoFocus={true}
              onChange={({ target }) => this.setState({ name: target.value })}
              mb={12}
            />
            <Input
              placeholder="Enter your client name"
              onChange={({ target }) => this.setState({ client: target.value })}
              mb={24}
            />
            {validationMessage
              ? <Paragraph className="ValidationErrorMessage">
                  {validationMessage}
                </Paragraph>
              : null}
            <Button icon="add">Add Project</Button>
          </FormGroup>
        </Dialog>
      </Overlay>
    );
  }
}
