import { Element } from './../../ast-types/hast';
import { Root } from './../../ast-types/mdast';
import * as u from 'unist-builder'
import wrap from '../wrap'
import all from '../all'
import {Transformer} from '..'

/* Transform a `root`. */
export default function root(h: Transformer, node: Root): Element {
  return h.augment(node, u('root', wrap(all(h, node))))
}
