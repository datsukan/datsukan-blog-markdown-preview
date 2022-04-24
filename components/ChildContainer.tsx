import { ReactNode } from 'react'

export type Props = {
  className?: string
  children: ReactNode
}

export const ChildContainer = ({ className = '', children }: Props) => {
  return (
    <div
      className={`overflow-auto rounded-lg bg-white p-10 shadow-md ${className}`}
    >
      {children}
    </div>
  )
}
