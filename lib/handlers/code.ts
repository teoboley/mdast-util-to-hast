import * as detab from 'detab'
import * as u from 'unist-builder'
import {H} from '..'

/* Transform a code block. */
export default function code(h: H, node) {
  const value = node.value ? detab(node.value + '\n') : ''
  const lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/)
  const props: any = {}

  if (lang) {
    props.className = ['language-' + lang]
  }

  return h(node.position, 'pre', [h(node, 'code', props, [u('text', value)])])
}
