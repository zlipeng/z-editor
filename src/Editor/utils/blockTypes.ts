export interface TypeProps {
  label: string;
  style: string;
  el: string;
  icon?: any;
}

const HEADER_TYPES: TypeProps[] = [
  {label: '正文', style: 'section', el: 'section'},
  {label: 'H1', style: 'header-one', el: 'h1'},
  {label: 'H2', style: 'header-two', el: 'h2'},
  {label: 'H3', style: 'header-three', el: 'h3'},
  {label: 'H4', style: 'header-four', el: 'h4'},
  {label: 'H5', style: 'header-five', el: 'h5'},
  {label: 'H6', style: 'header-six', el: 'h6'},
]

const BLOCK_TYPES: TypeProps[] = [
  {label: 'Blockquote', style: 'blockquote', el: 'blockquote', icon: 'InfoCircleOutlined' },
  {label: 'UL', style: 'unordered-list-item', el: 'ul', icon: 'UnorderedListOutlined' },
  {label: 'OL', style: 'ordered-list-item', el: 'ol', icon: 'OrderedListOutlined' }
];

export { HEADER_TYPES, BLOCK_TYPES }
