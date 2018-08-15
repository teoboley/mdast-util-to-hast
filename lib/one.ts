import { Element } from './../ast-types/hast';
import { TextNode } from './../ast-types/mdast';
import { Node, Parent } from './../ast-types/unist';
import * as u from 'unist-builder'
import all from './all'
import {Transformer} from '.'

const own = {}.hasOwnProperty

/* Transform an unknown node. */
function unknown(h: Transformer, node: Node | Parent): Element {
  if (text(node)) {
    return h.augment(node, u('text', (node as TextNode).value))
  }

  return h(node, 'div', all(h, node))
}

/* Visit a node. */
export default function one(h: Transformer, node: Node, parent?: Node | Parent) {
  const type = node && node.type
  const fn = own.call(h.handlers, type) ? h.handlers[type] : null

  /* Fail on non-nodes. */
  if (!type) {
    throw new Error('Expected node, got `' + node + '`')
  }

  return (typeof fn === 'function' ? fn : unknown)(h, node, parent)
}

/* Check if the node should be renderered a text node. */
function text(node: Node) {
  const data = node.data || {}

  if (
    own.call(data, 'hName') ||
    own.call(data, 'hProperties') ||
    own.call(data, 'hChildren')
  ) {
    return false
  }

  return 'value' in node
}
