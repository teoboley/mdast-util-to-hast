import * as u from 'unist-builder'
import * as trimLines from 'trim-lines'
import {H} from '..'

/* Transform text. */
export default function text(h: H, node) {
  return h.augment(node, u('text', trimLines(node.value)))
}
