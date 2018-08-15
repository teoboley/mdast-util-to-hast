import { Element } from './../../ast-types/hast';
import { HTML } from './../../ast-types/mdast';
import * as u from 'unist-builder'
import {Transformer} from '..'

/* Return either a `raw` node, in dangerous mode, or
 * nothing. */
export default function html(h: Transformer, node: HTML): Element | null {
  return h.dangerous ? h.augment(node, u('raw', node.value)) : null
}
