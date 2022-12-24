export interface IPostProps {
  id: number
  author: IAuthor
  title: string
  content: string
  image: string
  createdAt: string
  position: boolean
}

export interface IAuthor {
  name: string
}
