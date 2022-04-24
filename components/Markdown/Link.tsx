import { useState } from 'react'

import { SkeletonLinkCard } from '@components/Markdown/SkeletonLinkCard'

export type Props = {
  href: string
  title?: string
  children: any
  className?: string
}

export const Link = ({ href, title, children }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  if (children && children[0] && href === children[0]) {
    const baseUrl = process.env.NEXT_PUBLIC_LINK_CARD_API_BASE_URL

    return (
      <>
        {isLoading && <SkeletonLinkCard className="my-4 h-32 w-full" />}
        <iframe
          src={`${baseUrl}?url=${href}`}
          className="h-32 w-full"
          onLoad={() => setIsLoading(false)}
          hidden={isLoading}
        />
      </>
    )
  }

  return (
    <a href={href} title={title} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
