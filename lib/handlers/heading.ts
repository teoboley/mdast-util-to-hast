import all from '../all'
import {H} from '..'

/* Transform a heading. */
export default function heading(h: H, node: Heading) {
  return h(node, 'h' + node.depth, all(h, node))
}
