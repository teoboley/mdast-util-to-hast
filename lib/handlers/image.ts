import { Element } from './../../ast-types/hast';
import { Image } from './../../ast-types/mdast';
import * as normalize from 'mdurl/encode'
import {Transformer} from '..'

/* Transform an image. */
export default function image(h: Transformer, node: Image): Element {
  const props: any = {src: normalize(node.url), alt: node.alt}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'img', props)
}
