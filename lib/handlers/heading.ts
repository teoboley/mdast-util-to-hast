import all from '../all'
import {Transformer, HASTNode} from '..'

/* Transform a heading. */
export default function heading(h: Transformer, node: Heading): HASTNode {
  return h(node, 'h' + node.depth, all(h, node))
}
