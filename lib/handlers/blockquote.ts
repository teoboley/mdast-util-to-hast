import { Element } from './../../ast-types/hast';
import { Blockquote } from './../../ast-types/mdast';
import wrap from '../wrap'
import all from '../all'
import {Transformer} from '..'

/* Transform a block quote. */
export default function blockquote(h: Transformer, node: Blockquote): Element {
  return h(node, 'blockquote', wrap(all(h, node), true))
}
