import all from '../all'
import {H} from '..'

/* Transform deletions. */
export default function strikethrough(h: H, node) {
  return h(node, 'del', all(h, node))
}
