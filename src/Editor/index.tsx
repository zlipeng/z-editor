import React, { FC } from 'react';
import { Editor, EditorState, DefaultDraftBlockRenderMap, RichUtils, getDefaultKeyBinding } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './index.css';
import BlockStyleControls from './components/BlockStyleControls'
import { BlockRenderMap } from './utils/utils';

interface ZEditorProps {}

const ZEditor: FC<ZEditorProps> = () => {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(
      editorState,
      blockType
    ))
  }

  const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(BlockRenderMap());

  console.log(editorState)

  return (
    <div className="editor">
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <Editor editorState={editorState} onChange={setEditorState} blockRenderMap={extendedBlockRenderMap} />
    </div>
  );
}


export default ZEditor;
