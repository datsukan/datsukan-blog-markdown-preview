import processor from './utils/processor'

export type Props = {
  text: string
}

export const Markdown = ({ text }: Props) => {
  return (
    <div className="md-container">{processor.processSync(text).result}</div>
  )
}
