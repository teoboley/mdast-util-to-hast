import * as u from 'unist-builder'
import wrap from '../wrap'
import all from '../all'
import {Transformer, HASTNode} from '..'

/* Transform a `root`. */
export default function root(h: Transformer, node: Root): HASTNode {
  return h.augment(node, u('root', wrap(all(h, node))))
}
