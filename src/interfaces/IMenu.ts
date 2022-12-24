import { Dispatch, SetStateAction } from 'react'

export interface IMenuProps {
  openModalContact: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>
  setOpenModalContact: Dispatch<SetStateAction<boolean>>
  openModalNewPost: boolean
  setOpenModalNewPost: Dispatch<SetStateAction<boolean>>
}
