export interface TypeProps {
  label: string;
  style: string;
  el?: string;
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
  { label: 'B', style: 'BOLD', el: 'strong' },
  { label: 'I', style: 'ITALIC', el: 'em' },
  { label: 'U', style: 'UNDERLINE', el: 'u' }
]

const BLOCK_TYPES: TypeProps[] = [
  {label: 'Blockquote', style: 'blockquote', el: 'blockquote', icon: 'InfoCircleOutlined' },
  {label: 'UL', style: 'unordered-list-item', el: 'ul', icon: 'UnorderedListOutlined' },
  {label: 'OL', style: 'ordered-list-item', el: 'ol', icon: 'OrderedListOutlined' }
];

const INLINE_TYPES: TypeProps[] = [
  { label: 'Bold', style: 'BOLD', el: 'strong', icon: 'BoldOutlined' },
  { label: 'Italic', style: 'ITALIC', el: 'em', icon: 'ItalicOutlined' },
  { label: 'Underline', style: 'UNDERLINE', el: 'u', icon: 'UnderlineOutlined' }
]

const fontSizeMap = [
  9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 32, 40, 48, 72
]

const COLORS_TYPES: TypeProps[] = [
  { label: 'Red', style: 'red'  },
  { label: 'Orange', style: 'orange' },
  { label: 'Yellow', style: 'yellow' },
  { label: 'Green', style: 'green' },
  { label: 'Blue', style: 'blue' },
  { label: 'Indigo', style: 'indigo' },
  { label: 'Violet', style: 'violet' },
  { label: 'font24', style: 'font24' }
]

const FONTS_TYPES = fontSizeMap

const styleMap = () => {
  let colorStyleMap: any = {
    red: {
      color: 'rgba(255, 0, 0, 1.0)',
    },
    orange: {
      color: 'rgba(255, 127, 0, 1.0)',
    },
    yellow: {
      color: 'rgba(180, 180, 0, 1.0)',
    },
    green: {
      color: 'rgba(0, 180, 0, 1.0)',
    },
    blue: {
      color: 'rgba(0, 0, 255, 1.0)',
    },
    indigo: {
      color: 'rgba(75, 0, 130, 1.0)',
    },
    violet: {
      color: 'rgba(127, 0, 255, 1.0)',
    }
  };
  fontSizeMap.forEach(font => {
    colorStyleMap[`font${font}`] = {
      fontSize: `${font}px`
    }
  })
  return colorStyleMap
}

export { HEADER_TYPES, BLOCK_TYPES, INLINE_TYPES, COLORS_TYPES, FONTS_TYPES, styleMap }
