import { ReactNode } from 'react'

export type Props = {
  className?: string
  children: ReactNode
}

export const SideContainer = ({ className = '', children }: Props) => {
  return (
    <div className={`h-full w-full px-4 lg:w-80 ${className}`}>{children}</div>
  )
}
