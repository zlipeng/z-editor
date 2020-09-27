import React, { FC, useState } from 'react';
import { Button, Select } from 'antd';
import { InfoCircleOutlined, UnorderedListOutlined, OrderedListOutlined } from '@ant-design/icons';
import './index.css';
import { HEADER_TYPES, BLOCK_TYPES } from '../../utils/blockTypes';

const { Option } = Select;

interface StyleButtonProps {
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

  let className = 'RichEditor-styleButton';
  if (active) {
    className += ' RichEditor-activeButton';
  }

  const getIcon = () => {
    switch (icon) {
      case 'InfoCircleOutlined':
        return <InfoCircleOutlined />;
      case 'UnorderedListOutlined':
        return <UnorderedListOutlined />;
      case 'OrderedListOutlined':
        return <OrderedListOutlined />;
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

const BlockStyleControls = (props: { onToggle?: any; editorState?: any; }) => {
  const [headMenuTitle, setHeadMenuTitle] = useState('正文');
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const onSelectChange = (value: any) => {
    props.onToggle(value)
    setHeadMenuTitle(value)
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

  return (
    <div className="RichEditor-controls">
      <div className="toolbar-area header-area">
        {headerMenus}
      </div>
      <div className="toolbar-area">
        {BLOCK_TYPES.map((type) =>
          <StyleButton
            key={type.label}
            active={type.style === blockType}
            onToggle={props.onToggle}
            {...type}
          />
        )}
      </div>
    </div>
  );
};

export default BlockStyleControls;
