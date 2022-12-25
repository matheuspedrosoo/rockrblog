import { IButtonProps } from '../../interfaces/IButton'
import styles from './Button.module.scss'

export function Button({ type, title, src, alt, ...props }: IButtonProps) {
  return (
    <button className={styles.button} type={type} {...props}>
      <img src={src} alt={alt} /> {title}
    </button>
  )
}
