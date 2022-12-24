import { Dispatch, SetStateAction } from 'react'

export interface IMenuMobileProps {
  openModalContact: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>
  setOpenModalContact: Dispatch<SetStateAction<boolean>>
}
