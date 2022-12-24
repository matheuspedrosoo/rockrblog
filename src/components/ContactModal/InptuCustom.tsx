import { InputHTMLAttributes } from 'react'

import './ContactModal.module.scss'

interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  placeholder: string
  textArea?: boolean
}

export function InptuCustom({ label, placeholder, textArea, ...props }: InputCustomProps) {
  return (
    <label className="text">
      {label}
      {textArea ? <textarea placeholder={placeholder} /> : <input type="text" placeholder={placeholder} {...props} />}
    </label>
  )
}
