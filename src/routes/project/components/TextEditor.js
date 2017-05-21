import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState, RichUtils, getVisibleSelectionRect } from 'draft-js'
import createCounterPlugin from 'draft-js-counter-plugin';

const counterPlugin = createCounterPlugin();
const { CharCounter, WordCounter, LineCounter, CustomCounter } = counterPlugin;
const plugins = [counterPlugin];

class StyleButton extends Component {
  constructor() {
    super();

    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'toolbarItem';
    if (this.props.active) {
      className += ' active';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const styleTypes = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Strikethrough', style: 'STRIKETHROUGH'}
];

const condensedStyleTypes = [
  {label: 'B', style: 'BOLD'},
  {label: 'I', style: 'ITALIC'},
  {label: 'U', style: 'UNDERLINE'},
  {label: 'S', style: 'STRIKETHROUGH'}
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="InlineStyleControls">
      {!props.condensed ?
        styleTypes.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )
      :
      condensedStyleTypes.map(type =>
      <StyleButton
        key={type.label}
        active={currentStyle.has(type.style)}
        label={type.label}
        onToggle={props.onToggle}
        style={type.style}
      />
    )
    }
    </div>
  );
};


export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      styles: { opacity: 0 }
    };

    this.focus = () => this.refs.editor.focus();

    this.onChange = (editorState) => {

      this.setState({ editorState });

      const getSelectedBlockElement = () => {
        var selection = window.getSelection()
        if (selection.rangeCount === 0) return null
        var node = selection.getRangeAt(0).startContainer
        do {
          if (node.getAttribute && node.getAttribute('data-block') === 'true')
            return node
          node = node.parentNode
        } while (node != null)
        return null
      };
      let selectedText = getVisibleSelectionRect();

      if (selectedText !== null) {
        if (selectedText.width > 2) {
          this.setState({
            styles: {
              top: selectedText.top,
              left: selectedText.left + selectedText.width*.5,
              opacity: 1
            }
          });
        } else {
          this.setState({
            styles: {
              top: selectedText.top,
              left: selectedText.left + selectedText.width*.5,
              opacity: 0
            }
          })
        }
      }
      console.log(selectedText);
    }

    this.toggleBlockType = (blockType) => {
      this.onChange(
        RichUtils.toggleBlockType(
          this.state.editorState,
          blockType
        )
      );
    }

    this.toggleInlineStyle = (inlineStyle) => {
      this.onChange(
        RichUtils.toggleInlineStyle(
          this.state.editorState,
          inlineStyle
        )
      );
    }

    this.handleKeyCommand = (command) => {
      const {editorState} = this.state;
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }
  }

  averageReadingTime(str) {
    const wordArray = str.match(/\S+/g);  // matches words according to whitespace
    return wordArray ? (new Date((wordArray.length/3) * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0] : "00:00:00"
  }

  render() {
    const { editorState, styles } = this.state;

    return (
      <div className='TextEditor'>
        <h1>Script</h1>
        <div className='content'>
          <div className="ContextualToolbar" style={styles}>
            <InlineStyleControls condensed
              editorState={editorState}
              onToggle={this.toggleInlineStyle}
            />
          </div>
          <div className='Editor' onClick={this.focus}>
            <Editor
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              placeholder="Start writing here..."
              plugins={plugins}
              ref="editor"
              spellCheck={true}
            />
          </div>
          <div className="Toolbar">
            <InlineStyleControls
              editorState={editorState}
              onToggle={this.toggleInlineStyle}
            />
            <div className="stats">
              <div><CharCounter /> characters</div>
              <div><WordCounter /> words</div>
              <div><LineCounter /> lines</div>
              <div>Reading time{" "}<CustomCounter countFunction={this.averageReadingTime} /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
