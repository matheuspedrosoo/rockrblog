import { Link } from 'react-router-dom'
import ContactModal from '../ContactModal'
import { IMenuMobileProps } from '../../interfaces/IMenu'

import styles from './Header.module.scss'

export function MenuDesk({ openModalContact, setOpenModalContact }: IMenuMobileProps) {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Posts
          </Link>
        </li>
        <li>
          <button type="button" className="nav-link" onClick={() => setOpenModalContact(!openModalContact)}>
            Contact
          </button>

          {openModalContact ? (
            <ContactModal setOpenModalContact={setOpenModalContact} openModalContact={openModalContact} />
          ) : null}
        </li>
        <li>
          <button className={styles.buttonNewPost}>New Post</button>

          {/* {openModalContact ? (
            <ContactModal setOpenModalContact={setOpenModalContact} openModalContact={openModalContact} />
          ) : null} */}
        </li>
      </ul>
    </nav>
  )
}
