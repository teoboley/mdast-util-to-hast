import { Element } from './../../ast-types/hast';
import { List } from './../../ast-types/mdast';
import wrap from '../wrap'
import all from '../all'
import {Transformer} from '..'

/* Transform a list. */
export default function list(h: Transformer, node: List): Element {
  const props: any = {}
  const name = node.ordered ? 'ol' : 'ul'

  if (typeof node.start === 'number' && node.start !== 1) {
    props.start = node.start
  }

  return h(node, name, props, wrap(all(h, node), true))
}
