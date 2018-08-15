import { Element } from './../../ast-types/hast';
import { Code } from './../../ast-types/mdast';
import * as detab from 'detab'
import * as u from 'unist-builder'
import {Transformer} from '..'

/* Transform a code block. */
export default function code(h: Transformer, node: Code): Element {
  const value = node.value ? detab(node.value + '\n') : ''
  const lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/)
  const props: any = {}

  if (lang) {
    props.className = ['language-' + lang]
  }

  return h(node.position, 'pre', [h(node, 'code', props, [u('text', value)])])
}
