import { useState } from 'react'
import type { NextPage } from 'next'

import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic from 'next/dynamic'

import { Header } from '@components/Header'
import { MainContainer } from '@components/MainContainer'
import { ContentContainer } from '@components/ContentContainer'
import { ChildContainer } from '@components/ChildContainer'
import { SideContainer } from '@components/SideContainer'
import { TOC } from '@components/Markdown/TOC'
import { Markdown } from '@components/Markdown'
import { Footer } from '@components/Footer'

const Home: NextPage = () => {
  const [text, setText] = useState('')

  return (
    <div className="flex min-h-screen flex-col gap-8 bg-gray-100 lg:h-screen lg:max-h-screen">
      <Header />
      <MainContainer>
        <ContentContainer>
          <ChildContainer>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              className="h-full w-full resize-none align-bottom outline-none"
            />
          </ChildContainer>
          <ChildContainer>
            <Markdown text={text} />
          </ChildContainer>
        </ContentContainer>
        <SideContainer>
          <TOC markdown={text} className="max-h-full" />
        </SideContainer>
      </MainContainer>
      <Footer />
    </div>
  )
}

export default Home
