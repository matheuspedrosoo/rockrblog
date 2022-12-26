import arrow from '../../assets/arrow.svg'
import { Link } from 'react-router-dom'
import { IPostProps } from '../../interfaces/IPost'
import { useAnimations } from '../../hooks/useAnimations'
import styles from './Card.module.scss'

export function Card({ id, author, title, content, image, position, createdAt }: IPostProps) {
  useAnimations()

  return (
    <div
      className={styles.card}
      style={position ? { marginLeft: 'auto' } : { marginLeft: 'unset' }}
      data-aos={position ? 'fade-left' : 'fade-right'}
      data-aos-duration="1000"
    >
      <img src={image} alt="image" />

      <div className={styles.description}>
        <div className={styles.content}>
          <p className="text">{author?.name}</p>
          <h1 className="title">{title}</h1>
          <p className={`text ${styles.textContentCard}`}>{content}</p>
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
