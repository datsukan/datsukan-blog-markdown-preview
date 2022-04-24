import { ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

export const ContentContainer = ({ children }: Props) => {
  return (
    <div className="grid flex-1 grid-cols-1 gap-6 px-4 md:grid-cols-2">
      {children}
    </div>
  )
}
