import * as xtend from 'xtend'
import * as u from 'unist-builder'
import * as visit from 'unist-util-visit'
import * as position from 'unist-util-position'
import * as generated from 'unist-util-generated'
import * as definitions from 'mdast-util-definitions'
import one from './one'
import footer from './footer'
import * as handlers from './handlers'

export type HASTNode = any;

export type Transformer = {
  (node: Parent | Node | Position | null | undefined, tagName: string, props?, children?): HASTNode
  dangerous: boolean
  definition: (identifier: any) => any
  footnotes: any[]
  augment: (left, right) => any
  handlers: any
}

/* Factory to transform. */
function factory(tree, options): Transformer {
  const settings = options || {}
  const dangerous = settings.allowDangerousHTML

  const footnotes: Footnote[] = []

  visit(tree, 'footnoteDefinition', definition => {
    footnotes.push(definition)
  })

  return Object.assign(h, {
    dangerous,
    definition: definitions(tree, settings),
    footnotes,
    augment,
    handlers: xtend(handlers, settings.handlers || {})
  })

  /* Finalise the created `right`, a HAST node, from
   * `left`, an MDAST node.   */
  function augment(left: Node, right) {
    let data
    let ctx

    /* Handle `data.hName`, `data.hProperties, `hChildren`. */
    if (left && 'data' in left) {
      data = left.data

      if (right.type === 'element' && data.hName) {
        right.tagName = data.hName
      }

      if (right.type === 'element' && data.hProperties) {
        right.properties = xtend(right.properties, data.hProperties)
      }

      if (right.children && data.hChildren) {
        right.children = data.hChildren
      }
    }

    ctx = left && left.position ? left : {position: left}

    if (!generated(ctx)) {
      right.position = {
        start: position.start(ctx),
        end: position.end(ctx)
      }
    }

    return right
  }

  /* Create an element for a `node`. */
  function h(node: Parent | Node | Position | null | undefined, tagName: string, props?, children?: Node[]): HASTNode {
    if (
      (children === undefined || children === null) &&
      typeof props === 'object' &&
      'length' in props
    ) {
      children = props
      props = {}
    }

    return augment((node as Node), {
      type: 'element',
      tagName: tagName,
      properties: props || {},
      children: children || []
    })
  }
}

/* Transform `tree`, which is an MDAST node, to a HAST node. */
export default function toHAST(tree: Node, options): HASTNode {
  const h = factory(tree, options)
  const node = one(h, tree)
  const footnotes = footer(h)

  if (node && node.children && footnotes) {
    node.children = node.children.concat(u('text', '\n'), footnotes)
  }

  return node
}
