import { InputHTMLAttributes } from 'react'

export interface IButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'reset' | 'submit' | undefined
  title: string
  src: string
  alt: string
}
