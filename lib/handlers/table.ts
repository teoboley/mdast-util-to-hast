import * as position from 'unist-util-position'
import wrap from '../wrap'
import all from '../all'
import {H} from '..'

/* Transform a table. */
export default function table(h: H, node: Table) {
  const rows = node.children
  let index = rows.length
  const align = node.align
  const alignLength = align.length
  const result: any[] = []
  let pos
  let row
  let out
  let name
  let cell

  while (index--) {
    row = rows[index].children
    name = index === 0 ? 'th' : 'td'
    pos = alignLength
    out = []

    while (pos--) {
      cell = row[pos]
      out[pos] = h(cell, name, {align: align[pos]}, cell ? all(h, cell) : [])
    }

    result[index] = h(rows[index], 'tr', wrap(out, true))
  }

  return h(
    node,
    'table',
    wrap(
      [
        h(result[0].position, 'thead', wrap([result[0]], true)),
        h(
          {
            start: position.start(result[1]),
            end: position.end(result[result.length - 1])
          },
          'tbody',
          wrap(result.slice(1), true)
        )
      ],
      true
    )
  )
}
