import * as u from 'unist-builder'
import {H} from '..'

/* Return either a `raw` node, in dangerous mode, or
 * nothing. */
export default function html(h: H, node) {
  return h.dangerous ? h.augment(node, u('raw', node.value)) : null
}
