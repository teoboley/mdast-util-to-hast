import {H} from '..'

/* Transform a thematic break / horizontal rule. */
export default function thematicBreak(h: H, node?) {
  return h(node, 'hr')
}
