import { Link } from 'react-router-dom'
import { IPostProps } from '../../interfaces/IPost'
import arrow from '../../assets/arrow.svg'

import styles from './DoubleCard.module.scss'

export function DoubleCard({ author, title, content, image }: IPostProps) {
  return (
    <div className={styles.doubleCard}>
      <img src={image} alt="image" />

      <div className={styles.description}>
        <div className={styles.content}>
          <p className="text">{author?.name}</p>
          <h1 className="title">{title}</h1>
          <p className={`text ${styles.textContent}`}>{content}</p>
        </div>

        <Link to="#">
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
    </div>
  )
}
