import all from '../all'
import {H} from '..'

/* Transform a paragraph. */
export default function paragraph(h: H, node: Paragraph) {
  return h(node, 'p', all(h, node))
}
