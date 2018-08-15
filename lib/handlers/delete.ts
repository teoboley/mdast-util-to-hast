import all from '../all'
import {H} from '..'

/* Transform deletions. */
export default function strikethrough(h: H, node: Delete) {
  return h(node, 'del', all(h, node))
}
