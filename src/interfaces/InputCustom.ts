/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from 'react'

export interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  placeholder: string
  textArea?: boolean
  register?: any
}
