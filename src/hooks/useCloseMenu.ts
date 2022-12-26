import { useEffect, useState } from 'react'

export function useCloseMenu() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openModalContact, setOpenModalContact] = useState(false)
  const [openModalNewPost, setOpenModalNewPost] = useState(false)

  useEffect(() => {
    if (openModalContact || openModalNewPost) {
      setOpenMenu(false)
    }
  }, [openModalContact, openModalNewPost])

  return { openMenu, setOpenMenu, openModalContact, setOpenModalContact, openModalNewPost, setOpenModalNewPost }
}
