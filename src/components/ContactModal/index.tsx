/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from 'react-dom'
import { Header } from '../Header/Header'
import { MdClose } from 'react-icons/md'
import { InptuCustom } from './InptuCustom'
import { IModalProps } from '../../interfaces/IModal'
import { useForm } from 'react-hook-form'
import { IFormProps } from '../../interfaces/IForm'
import send from '../../assets/send.svg'

import styles from './ContactModal.module.scss'

function ContactModal({ setOpenModalContact, openModalContact }: IModalProps) {
  const portalDiv = document.getElementById('modal') as HTMLElement

  const { register, handleSubmit } = useForm<IFormProps>({
    defaultValues: { name: '', email: '', phone: '', post: '' },
  })

  const onSubmit = (data: IFormProps) => {
    console.log(data)
  }

  const onError = (errors: any) => {
    console.log(errors)
  }

  return ReactDOM.createPortal(
    <>
      <Header />

      <div className={styles.overlay}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <MdClose className={styles.icon} size={42} onClick={() => setOpenModalContact(!openModalContact)} />

          <h1 className="title">Contact</h1>

          <InptuCustom label="Name" placeholder="Fill your full name" register={register} name="name" />
          <InptuCustom label="Email" placeholder="Fill your e-mail" register={register} name="email" />
          <InptuCustom label="Phone" placeholder="Fill your phone" register={register} name="phone" />
          <InptuCustom label="Post" placeholder="Hello..." textArea register={register} name="post" />

          <button className={styles.buttonSubmit}>
            <img src={send} alt="send icon" />
            Submit
          </button>
        </form>
      </div>
    </>,
    portalDiv
  )
}

export default ContactModal
