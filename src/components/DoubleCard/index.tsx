import { Link } from 'react-router-dom'

import img from '../../assets/img.svg'
import arrow from '../../assets/arrow.svg'

import styles from './DoubleCard.module.scss'

export function DoubleCard() {
  return (
    <div className={styles.doubleCard}>
      <img src={img} alt="image" />

      <div className={styles.description}>
        <div className={styles.content}>
          <p className="text">Kelsi Monahan </p>
          <h1 className="title">Qui occaecati vero et quibusdam non </h1>
          <p className="text p">
            Saepe quia culpa vero. Velit numquam corporis nihil sint enim exercitationem. Rem nulla illum sint et id
            dolore voluptas{' '}
          </p>
        </div>

        <Link to="#">
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
    </div>
  )
}
