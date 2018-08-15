import thematicBreak from './handlers/thematic-break'
import list from './handlers/list'
import wrap from './wrap'
import {Transformer, HASTNode} from '.'

/* Transform all footnote definitions, if any. */
export default function generateFootnotes(h: Transformer): HASTNode {
  const footnotes = h.footnotes
  const length = footnotes.length
  let index = -1
  const listItems: ListItem[] = []
  let def

  if (!length) {
    return null
  }

  while (++index < length) {
    def = footnotes[index]

    listItems[index] = {
      type: 'listItem',
      data: {hProperties: {id: 'fn-' + def.identifier}},
      children: def.children.concat({
        type: 'link',
        url: '#fnref-' + def.identifier,
        data: {hProperties: {className: ['footnote-backref']}},
        children: [{type: 'text', value: '↩'}]
      }),
      position: def.position
    }
  }

  return h(
    null,
    'div',
    {className: ['footnotes']},
    wrap(
      [
        thematicBreak(h),
        list(h, {
          type: 'list',
          ordered: true,
          children: listItems
        })
      ],
      true
    )
  )
}
