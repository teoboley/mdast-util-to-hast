import all from '../all'
import {H} from '..'

/* Transform importance. */
export default function strong(h: H, node) {
  return h(node, 'strong', all(h, node))
}
