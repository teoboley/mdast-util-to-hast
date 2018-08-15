import { Element } from './../../ast-types/hast';
import { Strong } from './../../ast-types/mdast';
import all from '../all'
import {Transformer} from '..'

/* Transform importance. */
export default function strong(h: Transformer, node: Strong): Element {
  return h(node, 'strong', all(h, node))
}
