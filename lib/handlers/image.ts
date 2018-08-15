import * as normalize from 'mdurl/encode'
import {Transformer, HASTNode} from '..'

/* Transform an image. */
export default function image(h: Transformer, node: Image): HASTNode {
  const props: any = {src: normalize(node.url), alt: node.alt}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'img', props)
}
