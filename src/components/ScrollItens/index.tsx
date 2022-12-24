import { IPostProps } from '../../interfaces/IPost'
import { Card } from '../Card'
import { DoubleCard } from '../DoubleCard'

interface ScrollItensProps {
  data: IPostProps
  itemLeng: number
}

export function ScrollItens({ data, itemLeng }: ScrollItensProps) {
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
      return <>Salve</>
  }
}
