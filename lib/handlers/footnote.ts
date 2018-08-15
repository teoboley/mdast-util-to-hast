import footnoteReference from './footnote-reference'
import {Transformer, HASTNode} from '..'

/* Transform an inline footnote. */
export default function footnote(h: Transformer, node: Footnote): HASTNode {
  const identifiers: string[] = []
  let identifier = '1';
  const footnotes = h.footnotes
  const length = footnotes.length
  let index = -1

  while (++index < length) {
    identifiers[index] = footnotes[index].identifier
  }

  while (identifiers.indexOf(String(identifier)) !== -1) {
    (identifier as any)++
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
