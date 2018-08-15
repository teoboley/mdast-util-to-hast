import all from '../all'
import {H} from '..'

/* Transform emphasis. */
export default function emphasis(h: H, node: Emphasis) {
  return h(node, 'em', all(h, node))
}
