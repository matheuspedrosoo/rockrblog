/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from 'react'

import './ContactModal.module.scss'

interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  placeholder: string
  textArea?: boolean
  register?: any
  errors?: any
  error?: any
}

export function InptuCustom({ label, placeholder, textArea, register, name, ...props }: InputCustomProps) {
  return (
    <label className="text">
      {label}
      {textArea ? (
        <>
          <textarea required placeholder={placeholder} {...register(name)} />
        </>
      ) : (
        <input type="text" required placeholder={placeholder} {...props} {...register(name)} />
      )}
    </label>
  )
}
