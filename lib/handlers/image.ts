import * as normalize from 'mdurl/encode'
import {H} from '..'

/* Transform an image. */
export default function image(h: H, node) {
  const props: any = {src: normalize(node.url), alt: node.alt}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'img', props)
}
