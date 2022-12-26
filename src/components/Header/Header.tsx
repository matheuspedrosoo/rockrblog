import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { MenuDesk } from './MenuDesk'
import { MenuMobile } from './MenuMobile'
import { useCloseMenu } from '../../hooks/useCloseMenu'
import styles from './Header.module.scss'

export function Header() {
  const { openMenu, setOpenMenu, openModalContact, setOpenModalContact, openModalNewPost, setOpenModalNewPost } =
    useCloseMenu()

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link className="nav-link" to="/">
            <h1>Rockr Blog</h1>
          </Link>
        </div>

        <MenuDesk
          openModalContact={openModalContact}
          setOpenModalContact={setOpenModalContact}
          setOpenMenu={setOpenMenu}
          openModalNewPost={openModalNewPost}
          setOpenModalNewPost={setOpenModalNewPost}
        />

        <button className={styles.buttonMenuMobile} onClick={() => setOpenMenu(!openMenu)}>
          <FiMenu size={35} color="white" />
        </button>

        {openMenu ? (
          <MenuMobile
            openModalContact={openModalContact}
            setOpenModalContact={setOpenModalContact}
            setOpenMenu={setOpenMenu}
            openModalNewPost={openModalNewPost}
            setOpenModalNewPost={setOpenModalNewPost}
          />
        ) : null}
      </div>
    </div>
  )
}
