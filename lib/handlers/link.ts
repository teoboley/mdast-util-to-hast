import { Element } from './../../ast-types/hast';
import { Link } from './../../ast-types/mdast';
import * as normalize from 'mdurl/encode'
import all from '../all'
import {Transformer} from '..'

/* Transform a link. */
export default function link(h: Transformer, node: Link): Element {
  const props: any = {href: normalize(node.url)}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'a', props, all(h, node))
}
