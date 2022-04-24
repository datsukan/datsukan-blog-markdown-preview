import Link from 'next/link'
import { LinkIcon } from '@heroicons/react/solid'

export type Props = {
  id: string
  className: string
}

export const HeaderAnchorLink = ({ className = '', id }: Props) => {
  return (
    <div className={className}>
      <Link href={`#${id}`} passHref>
        <LinkIcon className="block h-5 w-5 cursor-pointer text-secondary" />
      </Link>
    </div>
  )
}
