import { Link } from 'react-router-dom'
import { IMenuMobileProps } from '../../interfaces/IMenuProps'
import ContactModal from '../ContactModal'

import styles from './Header.module.scss'

export function MenuMobile({ openModalContact, setOpenModalContact }: IMenuMobileProps) {
  return (
    <nav className={styles.menuMobile}>
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Posts
          </Link>
          <button type="button" className="nav-link" onClick={() => setOpenModalContact(!openModalContact)}>
            Contact
          </button>

          {openModalContact ? (
            <ContactModal setOpenModalContact={setOpenModalContact} openModalContact={openModalContact} />
          ) : null}
        </li>
      </ul>
    </nav>
  )
}
