import React, { Component } from 'react';
import classNames from 'classnames';
import ContentEditable from 'react-contenteditable';
import { stripTags } from 'utils';
import { Button, ButtonGroup } from 'components/baseline';

export class TextArea extends Component {
  constructor(props) {
    super();
    this.state = {
      html: props.html,
      originalHTML: props.html
    }
  }

  handleChange(e) {
    this.setState({ html: e.target.value });
  }

  save = () => {
    const html = this.state.html;
    this.props.save({
      text: stripTags(html),
      html
    });
    this.setState({ originalHTML: html });
  }

  render() {
    let editing = stripTags(this.state.originalHTML) !== stripTags(this.state.html);
    console.log(editing)
    const saveButton =
    editing
    && <ButtonGroup>
        <Button onClick={this.save} icon="confirm" />
        <Button onClick={editing = !editing} icon="cancel" />
      </ButtonGroup>
    const {
      heading,
      subheading,
      center,
      className
    } = this.props;


    const styles = classNames({
      [className]: className,
      'TextArea': true,
      center,
      heading,
      subheading
    });

    return(
      <div className={styles}>
        <ContentEditable
          disabled={false}       // use true to disable editing
          html={this.state.html}
          onChange={this.handleChange.bind(this)}
        />
        {saveButton}
      </div>
    );
  }
}
