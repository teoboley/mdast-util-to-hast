import { Element } from './../../ast-types/hast';
import { FootnoteReference } from './../../ast-types/mdast';
import * as u from 'unist-builder'
import {Transformer} from '..'

/* Transform a reference to a footnote. */
export default function footnoteReference(h: Transformer, node: FootnoteReference): Element {
  const identifier = node.identifier

  return h(node.position, 'sup', {id: 'fnref-' + identifier}, [
    h(node, 'a', {href: '#fn-' + identifier, className: ['footnote-ref']}, [
      u('text', identifier)
    ])
  ])
}
