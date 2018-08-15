import * as u from 'unist-builder'
import wrap from '../wrap'
import all from '../all'
import {H} from '..'

/* Transform a list-item. */
export default function listItem(h: H, node: ListItem, parent: List) {
  const children = node.children
  const head = children[0]
  const props: {className?: any} = {}
  let single = false
  let result
  let container

  if (
    (!parent || !parent.loose) &&
    children.length === 1 &&
    head.type === 'paragraph'
  ) {
    single = true
  }

  result = all(h, single ? head : node)

  if (typeof node.checked === 'boolean') {
    if (!single && (!head || head.type !== 'paragraph')) {
      result.unshift(h(null, 'p', []))
    }

    container = single ? result : result[0].children

    if (container.length !== 0) {
      container.unshift(u('text', ' '))
    }

    container.unshift(
      h(null, 'input', {
        type: 'checkbox',
        checked: node.checked,
        disabled: true
      })
    )

    /* According to github-markdown-css, this class hides bullet. */
    props.className = ['task-list-item']
  }

  if (!single && result.length !== 0) {
    result = wrap(result, true)
  }

  return h(node, 'li', props, result)
}
