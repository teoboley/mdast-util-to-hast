import { Element } from './../../ast-types/hast';
import { Paragraph } from './../../ast-types/mdast';
import all from '../all'
import {Transformer} from '..'

/* Transform a paragraph. */
export default function paragraph(h: Transformer, node: Paragraph): Element {
  return h(node, 'p', all(h, node))
}
