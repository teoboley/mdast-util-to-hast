import all from '../all'
import {Transformer, HASTNode} from '..'

/* Transform deletions. */
export default function strikethrough(h: Transformer, node: Delete): HASTNode {
  return h(node, 'del', all(h, node))
}
