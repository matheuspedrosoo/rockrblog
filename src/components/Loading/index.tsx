import { PuffLoader } from 'react-spinners'

import styles from './Loading.module.scss'

export function Loading() {
  return (
    <div className={styles.loader}>
      <PuffLoader color="#3afecc" />
    </div>
  )
}
