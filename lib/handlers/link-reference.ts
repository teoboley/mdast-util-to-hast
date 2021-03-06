import { Element } from './../../ast-types/hast';
import { LinkReference } from './../../ast-types/mdast';
import * as normalize from 'mdurl/encode'
import revert from '../revert'
import all from '../all'
import {Transformer} from '..'

/* Transform a reference to a link. */
export default function linkReference(h: Transformer, node: LinkReference): Element {
  const def = h.definition(node.identifier)

  if (!def) {
    return revert(h, node)
  }

  const props: any = {href: normalize(def.url || '')}

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title
  }

  return h(node, 'a', props, all(h, node))
}
