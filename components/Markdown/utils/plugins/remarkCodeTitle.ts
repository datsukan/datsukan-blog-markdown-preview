import type { Node } from 'unist'
import { visit } from 'unist-util-visit'

const delimiter = ':'

export default function customDirective() {
  return transformer

  function transformer(tree: Node) {
    visit(tree, 'code', visitor)

    function visitor(node: Node) {
      // console.log('remark', node)
      node.data = node.value
    }

    return tree
  }
}
