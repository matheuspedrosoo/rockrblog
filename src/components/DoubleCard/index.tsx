import { Link } from 'react-router-dom'
import { IPostProps } from '../../interfaces/IPost'
import arrow from '../../assets/arrow.svg'
import { useAnimations } from '../../hooks/useAnimations'
import styles from './DoubleCard.module.scss'

export function DoubleCard({ id, author, title, content, image, createdAt }: IPostProps) {
  useAnimations()

  return (
    <div className={styles.doubleCard} data-aos="fade-right" data-aos-duration="1000">
      <img src={image} alt="image" />
      <div className={styles.description}>
        <div className={styles.content}>
          <p className="text">{author?.name}</p>
          <h1 className="title">{title}</h1>
          <p className={`text ${styles.textContent}`}>{content}</p>
        </div>
        <Link
          to={`/post/${id}`}
          state={{ title: title, author: author, image: image, content: content, createdAt: createdAt }}
        >
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
    </div>
  )
}
