import Immutable from 'immutable';
import { TypeProps, HEADER_TYPES, INLINE_TYPES } from './blockTypes';

const GeneratorRenderMap = (types: TypeProps[]) => {
  let result: any = {};

  types.forEach(type => {
    result[type.style] = {
      element: type.el
    }
  })
  return result;
}

const MergeTypes = () => {
  const temp: TypeProps[] = [];
  return temp.concat(
    HEADER_TYPES,
    INLINE_TYPES
  )
}

const BlockRenderMap = () => {
  const result = GeneratorRenderMap(MergeTypes());
  return Immutable.Map(result);
}



export { GeneratorRenderMap, BlockRenderMap };
