import all from '../all'
import {Transformer, HASTNode} from '..'

/* Transform emphasis. */
export default function emphasis(h: Transformer, node: Emphasis): HASTNode {
  return h(node, 'em', all(h, node))
}
