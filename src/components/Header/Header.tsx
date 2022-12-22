import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link className="nav-link" to="/">
            <h1>Rockr Blog</h1>
          </Link>
        </div>

        <nav>
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
      </div>
    </div>
  )
}
