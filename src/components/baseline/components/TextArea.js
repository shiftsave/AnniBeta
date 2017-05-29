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
      originalHTML: props.html,
      isFocused: false
    }
  }

  handleChange = (e) => {
    this.setState({ html: e.target.value });
  }

  focus = () => {
    this.setState({ isFocused: true });
  }

  save = () => {
    const html = this.state.html;
    this.props.save({
      text: stripTags(html),
      html
    });
    this.setState({ originalHTML: html, isFocused: false });
  }

  cancel = () => {
    this.setState({ html: this.props.html, isFocused: false });
  }

  render() {
    let editing = stripTags(this.state.originalHTML) !== stripTags(this.state.html);
    console.log(this.state.isFocused)

    const controls =
      editing &&
        <ButtonGroup>
          <Button onClick={this.save} icon="confirm" success />
          <Button onClick={this.cancel} icon="cancel" danger />
        </ButtonGroup>

    const {
      heading,
      subheading,
      center,
      className
    } = this.props;


    const styles = classNames({
      'TextArea': true,
      active: editing || this.state.isFocused,
      [className]: className,
      center,
      heading,
      subheading
    });

    return(
      <div className={styles}>
        <ContentEditable
          className="content"
          disabled={false}       // use true to disable editing
          html={this.state.html}
          // onBlur={this.cancel}
          onChange={this.handleChange}
          onFocus={this.focus}
        />
        {controls}
      </div>
    );
  }
}
