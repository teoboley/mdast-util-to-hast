import * as collapse from 'collapse-white-space'
import * as u from 'unist-builder'
import {H} from '..'

/* Transform inline code. */
export default function inlineCode(h: H, node) {
  return h(node, 'code', [u('text', collapse(node.value))])
}
