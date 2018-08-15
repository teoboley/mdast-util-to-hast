import wrap from '../wrap'
import all from '../all'
import {H} from '..'

/* Transform a list. */
export default function list(h: H, node: List) {
  const props: any = {}
  const name = node.ordered ? 'ol' : 'ul'

  if (typeof node.start === 'number' && node.start !== 1) {
    props.start = node.start
  }

  return h(node, name, props, wrap(all(h, node), true))
}
