import { Element } from './../../ast-types/hast';
import { Break } from './../../ast-types/mdast';
import * as u from 'unist-builder'
import {Transformer} from '..'

/* Transform an inline break. */
export default function hardBreak(h: Transformer, node: Break): Element[] {
  return [h(node, 'br'), u('text', '\n')]
}
