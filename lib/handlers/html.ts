import * as u from 'unist-builder'
import {Transformer, HASTNode} from '..'

/* Return either a `raw` node, in dangerous mode, or
 * nothing. */
export default function html(h: Transformer, node: HTML): HASTNode {
  return h.dangerous ? h.augment(node, u('raw', node.value)) : null
}
