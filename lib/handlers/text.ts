import { Element } from './../../ast-types/hast';
import { Text } from './../../ast-types/unist';
import * as u from 'unist-builder'
import * as trimLines from 'trim-lines'
import {Transformer} from '..'

/* Transform text. */
export default function text(h: Transformer, node: Text): Element {
  return h.augment(node, u('text', trimLines(node.value)))
}
