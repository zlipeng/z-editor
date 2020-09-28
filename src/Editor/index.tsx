import React, { FC } from 'react';
import { Editor, EditorState, DefaultDraftBlockRenderMap, RichUtils, Modifier, ContentBlock } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './index.scss';
import BlockStyleControls from './components/BlockStyleControls'
import { BlockRenderMap } from './utils/utils';
import { styleMap } from './utils/blockTypes';

interface ZEditorProps {}

const colorStyleMap = styleMap()

let editor: any;

const ZEditor: FC<ZEditorProps> = () => {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  const onFocus = () => {
    editor.focus();
  }

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(
      editorState,
      blockType
    ))
  }

  const toggleInlineType = (inlineType: string) => {
    setEditorState(RichUtils.toggleInlineStyle(
      editorState,
      inlineType
    ))
  }

  const toggleFont = (value: string) => {
    const selection = editorState.getSelection();

    // Let's just allow one color at a time. Turn off all active colors.
    const nextContentState = Object.keys(colorStyleMap)
      .reduce((contentState, color) => {
        return Modifier.removeInlineStyle(contentState, selection, color)
      }, editorState.getCurrentContent());

    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    );

    const currentStyle = editorState.getCurrentInlineStyle();

    // Unset style override for current color.
    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce((state: any, color: any) => {
        return RichUtils.toggleInlineStyle(state, color);
      }, nextEditorState);
    }

    // If the color is being toggled on, apply it.
    if (!currentStyle.has(value)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        value
      );
    }

    setEditorState(nextEditorState)
  }

  const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(BlockRenderMap());

  const extendBlockStyleFn = (contentBlock: ContentBlock) => {
    const type = contentBlock.getType();
    if (type === 'blockquote') {
      return 'z-blockQuote';
    }
    return ''
  }

  console.log(editorState.getCurrentInlineStyle())

  return (
    <div className="editor">
      <BlockStyleControls
        editorState={editorState}
        onToggleBlock={toggleBlockType}
        onToggleInline={toggleInlineType}
        onToggleFont={toggleFont}
      />
      <div onClick={onFocus}>
        <Editor
          placeholder="Write here"
          editorState={editorState}
          onChange={setEditorState}
          blockRenderMap={extendedBlockRenderMap}
          blockStyleFn={extendBlockStyleFn}
          customStyleMap={colorStyleMap}
          ref={(ref) => editor = ref}
        />
      </div>
    </div>
  );
}


export default ZEditor;
