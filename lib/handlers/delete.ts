import { Element } from './../../ast-types/hast';
import { Delete } from './../../ast-types/mdast';
import all from '../all'
import {Transformer} from '..'

/* Transform deletions. */
export default function strikethrough(h: Transformer, node: Delete): Element {
  return h(node, 'del', all(h, node))
}
