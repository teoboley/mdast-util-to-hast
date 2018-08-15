import all from '../all'
import {H} from '..'

/* Transform emphasis. */
export default function emphasis(h: H, node) {
  return h(node, 'em', all(h, node))
}
