import { Link } from 'react-router-dom'
import { IMenuProps } from '../../interfaces/IMenu'
import ContactModal from '../Contact'
import NewPostModal from '../NewPost'
import styles from './Header.module.scss'

export function MenuDesk({ openModalContact, setOpenModalContact, openModalNewPost, setOpenModalNewPost }: IMenuProps) {
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
          <button className={styles.buttonNewPost} onClick={() => setOpenModalNewPost(!openModalNewPost)}>
            New Post
          </button>

          {openModalNewPost ? (
            <NewPostModal setOpenModalNewPost={setOpenModalNewPost} openModalNewPost={openModalNewPost} />
          ) : null}
        </li>
      </ul>
    </nav>
  )
}
