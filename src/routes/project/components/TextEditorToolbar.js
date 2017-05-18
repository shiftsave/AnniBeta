import { getDefaultKeyBinding, RichUtils } from 'draft-js';

const EditorToolbar = {
  keyBindingFn(event) {
    return getDefaultKeyBinding(event);
  },
  handleKeyCommand(command, { getEditorState, setEditorState }) {
    const editorState = getEditorState();
    const newEditorState = RichUtils.handleKeyCommand(
      editorState, command
    )
    if (newEditorState) {
      setEditorState(newEditorState);
      return 'handled';
    }
    return 'not-handled';
  }
}

export default EditorToolbar;
