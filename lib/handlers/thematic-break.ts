import {Transformer, HASTNode} from '..'

/* Transform a thematic break / horizontal rule. */
export default function thematicBreak(h: Transformer, node?: ThematicBreak): HASTNode {
  return h(node, 'hr')
}
