import { Header } from '../../components/Header/Header'
import { DoubleCard } from '../../components/DoubleCard'
import { Card } from '../../components/Card'

import styles from './Home.module.scss'

function Home() {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.containerDoubleCards}>
          <DoubleCard />
          <DoubleCard />
        </div>

        <Card />
      </div>
    </>
  )
}

export default Home
