import all from '../all'
import {Transformer, HASTNode} from '..'

/* Transform importance. */
export default function strong(h: Transformer, node: Strong): HASTNode {
  return h(node, 'strong', all(h, node))
}
