import { Element } from './../../ast-types/hast';
import { Heading } from './../../ast-types/mdast';
import all from '../all'
import {Transformer} from '..'

/* Transform a heading. */
export default function heading(h: Transformer, node: Heading): Element {
  return h(node, 'h' + node.depth, all(h, node))
}
