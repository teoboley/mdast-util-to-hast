import * as collapse from 'collapse-white-space'
import * as u from 'unist-builder'
import {Transformer, HASTNode} from '..'

/* Transform inline code. */
export default function inlineCode(h: Transformer, node: InlineCode): HASTNode {
  return h(node, 'code', [u('text', collapse(node.value))])
}
