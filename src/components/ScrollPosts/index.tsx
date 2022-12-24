import { IScrollPostProps } from '../../interfaces/IScrollPost'
import { DoubleCard } from '../DoubleCard'
import { Card } from '../Card'

export function ScrollPosts({ data, itemLeng }: IScrollPostProps) {
  const position = itemLeng === 0 ? true : false

  switch (itemLeng) {
    case 0:
    case 1:
      return <DoubleCard {...data} />
    case 2:
      return <Card {...data} position={!position} />
    case 3:
    case 4:
      return <DoubleCard {...data} />
      break
    case 5:
      return <Card {...data} position={position} />
    default:
      return <DoubleCard {...data} />
  }
}
