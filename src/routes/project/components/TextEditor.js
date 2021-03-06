import React, { Component } from 'react';
import classNames from 'classnames';

import {
  Container,
  Content,
  ContextualToolbar,
  EditorContainer,
  Heading,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
} from 'styled';

import Editor from 'draft-js-plugins-editor';
import {
  EditorState,
  RichUtils,
  getVisibleSelectionRect,
  convertToRaw,
  convertFromRaw,
} from 'draft-js';
import createCounterPlugin from 'draft-js-counter-plugin';

const counterPlugin = createCounterPlugin();
const { CharCounter, WordCounter, CustomCounter } = counterPlugin;
const plugins = [counterPlugin];

class StyleButton extends Component {
  onToggle = e => {
    e.preventDefault();
    this.props.onToggle(this.props.style);
  };

  render() {
    const toolbarItem = classNames({
      toolbarItem: true,
      active: this.props.active,
    });

    return (
      <ToolbarItem className={toolbarItem} onClick={this.onToggle}>
        {this.props.label}
      </ToolbarItem>
    );
  }
}

const styleTypes = [
  { initial: 'B', label: 'Bold', style: 'BOLD' },
  { initial: 'I', label: 'Italic', style: 'ITALIC' },
  { initial: 'U', label: 'Underline', style: 'UNDERLINE' },
  { initial: 'S', label: 'Strikethrough', style: 'STRIKETHROUGH' },
];

const InlineStyleControls = props => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  const { condensed } = props;

  return (
    <ToolbarGroup noBorder={condensed}>
      {styleTypes.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={condensed ? type.initial : type.label}
          onToggle={props.onToggle}
          style={type.style}
          noBorder
        />
      ))}
    </ToolbarGroup>
  );
};

export default class TextEditor extends Component {
  constructor(props) {
    super(props);

    const { content } = this.props;
    this.state = {
      editorState: content
        ? EditorState.createWithContent(convertFromRaw(content))
        : EditorState.createEmpty(),
    };
  }

  focus = () => this.refs.editor.focus();

  onChange = editorState => {
    this.setState({ editorState });
    // export data to a raw format and save to database
    const contentState = editorState.getCurrentContent();
    const editorContentRaw = convertToRaw(contentState);
    this.props.save({ editorContent: editorContentRaw });
  };

  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  toggleInlineStyle = inlineStyle => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  };

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  displayContextualMenu = () => {
    const selectedText = getVisibleSelectionRect(window);
    const toolbar = this.toolbar.getBoundingClientRect();
    const toolbarParent = this.toolbarParent.getBoundingClientRect();

    if (selectedText !== null && selectedText.width > 1) {
      this.setState({
        styles: {
          opacity: 1,
          left:
            selectedText.left -
            toolbarParent.left -
            toolbar['width'] / 2 +
            selectedText.width / 2,
          top: selectedText.top - toolbarParent.top - toolbar['height'] * 1.25,
          visibility: 'visible',
        },
      });
    } else {
      this.hideContextualMenu();
    }
  };

  hideContextualMenu = () => {
    this.setState({ styles: { opacity: 0, visibility: 'hidden' } });
  };

  averageReadingTime(str) {
    const wordArray = str.match(/\S+/g); // matches words according to whitespace
    return wordArray
      ? new Date((wordArray.length / 3) * 1000)
          .toUTCString()
          .match(/(\d\d:\d\d:\d\d)/)[0]
      : '00:00:00';
  }

  render() {
    const { editorState, styles } = this.state;

    return (
      <Container innerRef={ref => (this.toolbarParent = ref)}>
        <ContextualToolbar
          style={styles}
          innerRef={ref => (this.toolbar = ref)}
        >
          <InlineStyleControls
            condensed
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
        </ContextualToolbar>
        <Content
          project
          onMouseUp={this.displayContextualMenu}
          onClick={this.focus}
        >
          <Heading mb={16}>SCRIPT</Heading>
          <EditorContainer>
            <Editor
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              onClick={this.focus}
              placeholder="Start writing here..."
              plugins={plugins}
              ref="editor"
              spellCheck={true}
            />
          </EditorContainer>
        </Content>
        <Toolbar>
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
          <ToolbarGroup>
            <ToolbarItem>
              <CharCounter /> characters
            </ToolbarItem>
            <ToolbarItem>
              <WordCounter /> words
            </ToolbarItem>
            <ToolbarItem noBorder>
              Reading time{' '}
              <CustomCounter countFunction={this.averageReadingTime} />
            </ToolbarItem>
          </ToolbarGroup>
        </Toolbar>
      </Container>
    );
  }
}
