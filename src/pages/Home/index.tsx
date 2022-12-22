import { Header } from '../../components/Header/Header'

import styles from './Home.module.scss'

function Home() {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <h1>Page Home</h1>
      </div>
    </>
  )
}

export default Home
