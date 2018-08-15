import { Element } from './../../ast-types/hast';
import { Emphasis } from './../../ast-types/mdast';
import all from '../all'
import {Transformer} from '..'

/* Transform emphasis. */
export default function emphasis(h: Transformer, node: Emphasis): Element {
  return h(node, 'em', all(h, node))
}
