import { ReactNode } from 'react'

export type Props = {
  className?: string
  children: ReactNode
}

export const MainContainer = ({ className = '', children }: Props) => {
  return (
    <div
      className={`flex min-h-0 flex-1 flex-col-reverse gap-8 lg:flex-row lg:gap-0 ${className}`}
    >
      {children}
    </div>
  )
}
