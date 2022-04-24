/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

import { ImageModal } from '@components/Markdown/ImageModal'

export type Props = {
  src: string
  alt: string
  title?: string
}

export const Image = (props: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <ImageModal open={open} setOpen={setOpen} image={props} />
      <img
        {...props}
        onClick={() => setOpen(true)}
        className="cursor-zoom-in"
      />
    </>
  )
}
