import { Element } from './../../ast-types/hast';
import {Transformer} from '..'
import { ThematicBreak } from '../../ast-types/mdast';

/* Transform a thematic break / horizontal rule. */
export default function thematicBreak(h: Transformer, node?: ThematicBreak): Element {
  return h(node, 'hr')
}
