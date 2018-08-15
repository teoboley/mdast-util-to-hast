import * as u from 'unist-builder'
import {H} from '..'

/* Transform a reference to a footnote. */
export default function footnoteReference(h: H, node) {
  const identifier = node.identifier

  return h(node.position, 'sup', {id: 'fnref-' + identifier}, [
    h(node, 'a', {href: '#fn-' + identifier, className: ['footnote-ref']}, [
      u('text', identifier)
    ])
  ])
}
