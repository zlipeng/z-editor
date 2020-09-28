import React, { FC, useState } from 'react';
import { Button, Select } from 'antd';
import {
  InfoCircleOutlined,
  UnorderedListOutlined,
  OrderedListOutlined,
  ItalicOutlined,
  BoldOutlined,
  UnderlineOutlined
} from '@ant-design/icons';
import './index.css';
import {
  HEADER_TYPES,
  BLOCK_TYPES,
  TypeProps,
  INLINE_TYPES,
  COLORS_TYPES,
  FONTS_TYPES
} from '../../utils/blockTypes';

const { Option } = Select;

interface StyleButtonProps extends TypeProps {
  onToggle: (e: string) => void;
  style: string;
  active: boolean;
  label: string;
}

const StyleButton: FC<StyleButtonProps> = props => {
  const { onToggle, style, active, label, icon } = props;
  const onToggleClick = (e: any) => {
    e.preventDefault();
    onToggle(style);
  };

  let className = '';
  if (active) {
    className += 'z-activeButton';
  }

  const getIcon = () => {
    switch (icon) {
      case 'InfoCircleOutlined':
        return <InfoCircleOutlined />;
      case 'UnorderedListOutlined':
        return <UnorderedListOutlined />;
      case 'OrderedListOutlined':
        return <OrderedListOutlined />;
      case 'BoldOutlined':
        return <BoldOutlined />;
      case 'ItalicOutlined':
        return <ItalicOutlined />;
      case 'UnderlineOutlined':
        return <UnderlineOutlined />;
      default:
        break;
    }
  }

  return (
    <Button className={className} onMouseDown={onToggleClick} type='text'>
      {icon ? getIcon() : label}
    </Button>
  )
}

interface BlockControlsProps {
  onToggleInline: (e: any) => void;
  onToggleBlock: (e: any) => void;
  onToggleFont: (e: any) => void;
  editorState: any;
}

const BlockStyleControls = (props: BlockControlsProps) => {
  const { onToggleBlock, onToggleInline, onToggleFont } = props;
  const [headMenuTitle, setHeadMenuTitle] = useState('正文');
  const [fontSize, setFontSize] = useState(12);
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const currentStyle = editorState.getCurrentInlineStyle();

  console.log(currentStyle)

  const onSelectChange = (value: any) => {
    onToggleBlock(value)
    setHeadMenuTitle(value)
  }

  const onFontChange = (value: number) => {
    onToggleFont(`font${value}`)
    setFontSize(value)
  }

  const headerMenus = (
    <Select onChange={onSelectChange} value={headMenuTitle} bordered={false}>
      {HEADER_TYPES.map(type => (
        <Option value={type.style} key={type.style}>
          {type.label}
        </Option>
    ))}
    </Select>
  )

  const fontMenus = (
    <Select onChange={onFontChange} value={fontSize} bordered={false}>
      {FONTS_TYPES.map((type) =>
        <Option value={type} key={type}>
          {type}px
        </Option>
      )}
    </Select>
  )

  return (
    <div className="RichEditor-controls">
      <div className="toolbar-area header-area">
        {headerMenus}
        {fontMenus}
      </div>
      <div className="toolbar-area">
        {BLOCK_TYPES.map((type) =>
          <StyleButton
            key={type.label}
            active={type.style === blockType}
            onToggle={onToggleBlock}
            {...type}
          />
        )}
      </div>
      <div className="toolbar-area">
        {INLINE_TYPES.map((type) =>
          <StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            onToggle={onToggleInline}
            {...type}
          />
        )}
      </div>
      {/* <div className="toolbar-area">
        {COLORS_TYPES.map((type) =>
          <StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            onToggle={onToggleFont}
            {...type}
          />
        )}
      </div> */}
    </div>
  );
};

export default BlockStyleControls;
