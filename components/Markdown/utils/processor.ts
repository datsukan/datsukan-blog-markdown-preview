import React from 'react'
import { unified } from 'unified'
import remarkParser from 'remark-parse'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkDirective from 'remark-directive'
import customDirective from './plugins/customDirective'
import remarkRehype from 'remark-rehype'
import rehypeCodeTitle from './plugins/rehypeCodeTitle'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeReact from 'rehype-react'
import print from './plugins/print'

import 'highlight.js/styles/atom-one-dark.css'

import {
  NormalMessage,
  InfoMessage,
  WarnMessage,
  AlertMessage,
} from '@components/Markdown/Message'
import { Link } from '@components/Markdown/Link'
import { Codeblock } from '@components/Markdown/Codeblock'
import { Image } from '@components/Markdown/Image'
import { Header } from '@components/Markdown/Header'
import { Checkbox } from '@components/Markdown/Checkbox'

const components: Record<string, any> = {
  normal: NormalMessage,
  info: InfoMessage,
  warn: WarnMessage,
  alert: AlertMessage,
  a: Link,
  pre: Codeblock,
  img: Image,
  input: Checkbox,
  h1: (props: any) => Header({ ...props, depth: 1 }),
  h2: (props: any) => Header({ ...props, depth: 2 }),
  h3: (props: any) => Header({ ...props, depth: 3 }),
  h4: (props: any) => Header({ ...props, depth: 4 }),
  h5: (props: any) => Header({ ...props, depth: 5 }),
  h6: (props: any) => Header({ ...props, depth: 6 }),
}

const processor = unified()
  .use(remarkParser)
  .use(remarkBreaks)
  .use(remarkGfm)
  .use(remarkDirective)
  .use(customDirective)
  .use(remarkRehype)
  .use(rehypeCodeTitle)
  .use(rehypeHighlight, { subset: false, ignoreMissing: true })
  .use(rehypeSlug)
  .use(rehypeReact, {
    Fragment: React.Fragment,
    createElement: React.createElement,
    components: components,
  })
// .use(print)

export default processor
