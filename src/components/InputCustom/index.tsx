import { InputCustomProps } from '../../interfaces/InputCustom'
import './InputCustom.module.scss'

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
