import { Link } from 'react-router-dom'

import img from '../../assets/img.svg'
import arrow from '../../assets/arrow.svg'

import styles from './Card.module.scss'

export function Card() {
  return (
    <div className={styles.card}>
      <img src={img} alt="image" />

      <div className={styles.description}>
        <div className={styles.content}>
          <p className="text">Kelsi Monahan </p>
          <h1 className="title">Repellat aliquam quo sit qui praesentium ut aliquid</h1>
          <p className="text p">
            Ea ut et labore quidem non sit in quidem. Provident est incidunt dignissimos enim qui consequatur numquam.
          </p>
        </div>

        <Link to="#">
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
    </div>
  )
}
