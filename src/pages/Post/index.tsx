import { Header } from '../../components/Header/Header'

import styles from './Post.module.scss'

function Post() {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <h1>Page Post</h1>
      </div>
    </>
  )
}

export default Post
