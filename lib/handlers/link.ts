import * as normalize from 'mdurl/encode'
import all from '../all'
import {H} from '..'

/* Transform a link. */
export default function link(h: H, node) {
  const props: any = {href: normalize(node.url)}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'a', props, all(h, node))
}
