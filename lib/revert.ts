import { Element } from './../ast-types/hast';
import { LinkReference, ImageReference } from './../ast-types/mdast';
import * as u from 'unist-builder'
import all from './all'
import {Transformer} from '.'

/* Return the content of a reference without definition as markdown. */
export default function revert(h: Transformer, node: LinkReference | ImageReference): Element | Element {
  const subtype = node.referenceType
  let suffix = ']'
  let contents
  let head
  let tail

  if (subtype === 'collapsed') {
    suffix += '[]'
  } else if (subtype === 'full') {
    suffix += '[' + node.identifier + ']'
  }

  if (node.type === 'imageReference') {
    return u('text', '![' + node.alt + suffix)
  }

  contents = all(h, node)
  head = contents[0]

  if (head && head.type === 'text') {
    head.value = '[' + head.value
  } else {
    contents.unshift(u('text', '['))
  }

  tail = contents[contents.length - 1]

  if (tail && tail.type === 'text') {
    tail.value += suffix
  } else {
    contents.push(u('text', suffix))
  }

  return contents
}
