/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'
import { useAnimations } from '../../hooks/useAnimations'
import styles from './Form.module.scss'

interface IFormProps {
  children: ReactNode
  onSubmit: any
  handleSubmit: any
  onError: any
}

export function Form({ children, onSubmit, handleSubmit, onError }: IFormProps) {
  useAnimations()

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit, onError)}
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      {children}
    </form>
  )
}
