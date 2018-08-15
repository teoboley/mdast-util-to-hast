import wrap from '../wrap'
import all from '../all'
import {H} from '..'

/* Transform a block quote. */
export default function blockquote(h: H, node) {
  return h(node, 'blockquote', wrap(all(h, node), true))
}
