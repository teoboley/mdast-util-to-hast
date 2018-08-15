import * as trim from 'trim'
import one from './one'
import {H} from '.'

/* Transform the children of `parent`. */
export default function all(h: H, parent: Node | Parent) {
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
