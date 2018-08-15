import all from '../all'
import {H} from '..'

/* Transform a heading. */
export default function heading(h: H, node) {
  return h(node, 'h' + node.depth, all(h, node))
}
