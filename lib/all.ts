import { Element } from './../ast-types/hast';
import { Node, Parent } from './../ast-types/unist';
import * as trim from 'trim'
import one from './one'
import {Transformer} from '.'

/* Transform the children of `parent`. */
export function all(h: Transformer, parent: Parent): Element[];
export default function all(h: Transformer, parent: Node | Parent): Element[] {
  const nodes = (parent as Parent).children || []
  const length = nodes.length
  let values = []
  let index = -1
  let result
  let head

  while (++index < length) {
    result = one(h, nodes[index], parent)

    if (result) {
      if (index && nodes[index - 1].type === 'break') {
        if (result.value) {
          result.value = trim.left(result.value)
        }

        head = result.children && result.children[0]

        if (head && head.value) {
          head.value = trim.left(head.value)
        }
      }

      values = values.concat(result)
    }
  }

  return values
}
