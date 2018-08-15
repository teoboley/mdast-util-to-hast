import wrap from '../wrap'
import all from '../all'
import {Transformer, HASTNode} from '..'

/* Transform a block quote. */
export default function blockquote(h: Transformer, node: Blockquote): HASTNode {
  return h(node, 'blockquote', wrap(all(h, node), true))
}
