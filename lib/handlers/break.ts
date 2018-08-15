import * as u from 'unist-builder'
import {H} from '..'

/* Transform an inline break. */
export default function hardBreak(h: H, node) {
  return [h(node, 'br'), u('text', '\n')]
}
