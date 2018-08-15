import * as u from 'unist-builder'

/* Wrap `nodes` with newlines between each entry.
 * Optionally adds newlines at the start and end. */
export default function wrap(nodes, loose?) {
  const result: any[] = []
  let index = -1
  const length = nodes.length

  if (loose) {
    result.push(u('text', '\n'))
  }

  while (++index < length) {
    if (index) {
      result.push(u('text', '\n'))
    }

    result.push(nodes[index])
  }

  if (loose && nodes.length !== 0) {
    result.push(u('text', '\n'))
  }

  return result
}
