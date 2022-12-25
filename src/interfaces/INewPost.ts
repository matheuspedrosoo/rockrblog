import { Dispatch, SetStateAction } from 'react'

export interface INewPostProps {
  openModalNewPost: boolean
  setOpenModalNewPost: Dispatch<SetStateAction<boolean>>
}
