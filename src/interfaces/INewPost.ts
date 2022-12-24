import { Dispatch, SetStateAction } from 'react'

export interface INewPostProps {
  title: string
  author: string
  image: string
  post: string
  openModalNewPost: boolean
  setOpenModalNewPost: Dispatch<SetStateAction<boolean>>
}
