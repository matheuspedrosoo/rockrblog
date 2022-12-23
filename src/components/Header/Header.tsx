import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'

import styles from './Header.module.scss'
import { useState } from 'react'

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleTootgleMenu = () => setOpenMenu(!openMenu)

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
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button className={styles.buttonMenuMobile} onClick={handleTootgleMenu}>
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
