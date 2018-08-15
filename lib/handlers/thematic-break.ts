import {H} from '..'

/* Transform a thematic break / horizontal rule. */
export default function thematicBreak(h: H, node?: ThematicBreak) {
  return h(node, 'hr')
}
