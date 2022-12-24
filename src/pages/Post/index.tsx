import { Header } from '../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import { formatDate } from '../../utils/formatDate'

import styles from './Post.module.scss'

function Post() {
  const location = useLocation()
  const { title, author, image, content, createdAt } = location.state

  return (
    <>
      <Header />

      <div className={styles.container}>
        <div>
          <img src={image} alt="image" />
          <div className={styles.info}>
            <span>{formatDate(createdAt)}</span>
            <p className="text">{author?.name}</p>
            <h1 className="title">{title}</h1>
          </div>
        </div>
        <div className={styles.article}>
          <p className="text">{content}</p>
        </div>
      </div>
    </>
  )
}

export default Post
