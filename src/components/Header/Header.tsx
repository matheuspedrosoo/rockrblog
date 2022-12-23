import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'

import styles from './Header.module.scss'
import { useState } from 'react'
import ContactModal from '../../pages/ContactModal'

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openModalContact, setOpenModalContact] = useState(false)

  const handleToogleMenu = () => setOpenMenu(!openMenu)
  const handleToogleModal = () => setOpenModalContact(!openModalContact)

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link className="nav-link" to="/">
            <h1>Rockr Blog</h1>
          </Link>
        </div>

        <nav className={styles.menu}>
          <ul>
            <li>
              <Link className="nav-link" to="/post">
                Posts
              </Link>
            </li>
            <li>
              <button type="button" className="nav-link" onClick={handleToogleModal}>
                Contact
              </button>

              {openModalContact ? (
                <ContactModal setOpenModalContact={setOpenModalContact} openModalContact={openModalContact} />
              ) : null}
            </li>
          </ul>
        </nav>

        <button className={styles.buttonMenuMobile} onClick={handleToogleMenu}>
          <FiMenu size={35} color="white" />
        </button>

        {openMenu ? (
          <nav className={styles.menuMobile}>
            <ul>
              <li>
                <Link className="nav-link" to="/post">
                  Posts
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </div>
  )
}
