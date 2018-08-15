import { Element } from './../../ast-types/hast';
import { ImageReference } from './../../ast-types/mdast';
import * as normalize from 'mdurl/encode'
import revert from '../revert'
import {Transformer} from '..'

/* Transform a reference to an image. */
export default function imageReference(h: Transformer, node: ImageReference): Element {
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
