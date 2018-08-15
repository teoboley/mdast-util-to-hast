import all from '../all'
import {Transformer, HASTNode} from '..'

/* Transform a paragraph. */
export default function paragraph(h: Transformer, node: Paragraph): HASTNode {
  return h(node, 'p', all(h, node))
}
