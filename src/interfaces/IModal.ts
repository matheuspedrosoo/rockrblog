import { Dispatch, SetStateAction } from 'react'

export interface IModalProps {
  openModalContact: boolean
  setOpenModalContact: Dispatch<SetStateAction<boolean>>
}
