import * as normalize from 'mdurl/encode'
import revert from '../revert'
import {H} from '..'

/* Transform a reference to an image. */
export default function imageReference(h: H, node: ImageReference) {
  const def = h.definition(node.identifier)
  let props

  if (!def) {
    return revert(h, node)
  }

  props = {src: normalize(def.url || ''), alt: node.alt}

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title
  }

  return h(node, 'img', props)
}
