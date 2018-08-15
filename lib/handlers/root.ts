import * as u from 'unist-builder'
import wrap from '../wrap'
import all from '../all'
import {H} from '..'

/* Transform a `root`. */
export default function root(h: H, node: Root) {
  return h.augment(node, u('root', wrap(all(h, node))))
}
