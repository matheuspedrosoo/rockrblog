import { Header } from '../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import { formatDate } from '../../utils/formatDate'
import { useAnimations } from '../../hooks/useAnimations'
import styles from './Post.module.scss'

function Post() {
  const location = useLocation()
  const { title, author, image, content, createdAt } = location.state
  useAnimations()

  return (
    <>
      <Header />

      <div className={styles.container}>
        <div>
          <img src={image} alt="image" data-aos="fade-left" data-aos-duration="2000" />
          <div className={styles.info} data-aos="fade-right" data-aos-duration="2000">
            <span>{formatDate(createdAt)}</span>
            <p className="text">{author?.name}</p>
            <h1 className="title">{title}</h1>
          </div>
        </div>
        <div className={styles.article}>
          <p className="text" data-aos="fade-up" data-aos-duration="2000">
            {content}
          </p>
        </div>
      </div>
    </>
  )
}

export default Post
