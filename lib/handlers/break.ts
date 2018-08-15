import * as u from 'unist-builder'
import {Transformer, HASTNode} from '..'

/* Transform an inline break. */
export default function hardBreak(h: Transformer, node: Break): HASTNode {
  return [h(node, 'br'), u('text', '\n')]
}
