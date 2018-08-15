import footnoteReference from './footnote-reference'
import {H} from '..'

/* Transform an inline footnote. */
export default function footnote(h: H, node) {
  const identifiers: any[] = []
  let identifier: any = 1
  const footnotes = h.footnotes
  const length = footnotes.length
  let index = -1

  while (++index < length) {
    identifiers[index] = footnotes[index].identifier
  }

  while (identifiers.indexOf(String(identifier)) !== -1) {
    identifier++
  }

  identifier = String(identifier)

  footnotes.push({
    type: 'footnoteDefinition',
    identifier: identifier,
    children: [{type: 'paragraph', children: node.children}],
    position: node.position
  })

  return footnoteReference(h, {
    type: 'footnoteReference',
    identifier: identifier,
    position: node.position
  })
}
