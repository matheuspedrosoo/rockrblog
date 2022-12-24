import { Dispatch, SetStateAction } from 'react'

export interface IModalToogleProps {
  openModalContact: boolean
  setOpenModalContact: Dispatch<SetStateAction<boolean>>
}
