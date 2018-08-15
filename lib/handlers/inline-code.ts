import { Element } from './../../ast-types/hast';
import { InlineCode } from './../../ast-types/mdast';
import * as collapse from 'collapse-white-space'
import * as u from 'unist-builder'
import {Transformer} from '..'

/* Transform inline code. */
export default function inlineCode(h: Transformer, node: InlineCode): Element {
  return h(node, 'code', [u('text', collapse(node.value))])
}
