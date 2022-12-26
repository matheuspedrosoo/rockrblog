import { IModalProps } from '../../interfaces/IModal'
import styles from './Modal.module.scss'

export function Modal({ children }: IModalProps) {
  return <div className={styles.overlay}>{children}</div>
}
