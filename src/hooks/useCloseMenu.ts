import { useEffect, useState } from 'react'

export function useCloseMenu() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openModalContact, setOpenModalContact] = useState(false)

  useEffect(() => {
    if (openModalContact) {
      setOpenMenu(false)
    }
  }, [openModalContact])

  return { openMenu, setOpenMenu, openModalContact, setOpenModalContact }
}
