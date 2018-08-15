import * as u from 'unist-builder'
import * as trimLines from 'trim-lines'
import {Transformer, HASTNode} from '..'

/* Transform text. */
export default function text(h: Transformer, node: Text): HASTNode {
  return h.augment(node, u('text', trimLines(node.value)))
}
