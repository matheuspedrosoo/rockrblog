/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from 'react-dom'
import { Header } from '../Header/Header'
import { MdClose } from 'react-icons/md'
import { InptuCustom } from '../InputCustom'
import { IModalToogleProps } from '../../interfaces/IModalToogle'
import { useForm } from 'react-hook-form'
import { IFormProps } from '../../interfaces/IForm'
import send from '../../assets/send.svg'
import { useAnimations } from '../../hooks/useAnimations'

import styles from './ContactModal.module.scss'
import { Modal } from '../Modal'
import { Form } from '../Form'

function ContactModal({ setOpenModalContact, openModalContact }: IModalToogleProps) {
  const portalDiv = document.getElementById('modal') as HTMLElement
  useAnimations()

  const { register, handleSubmit } = useForm<IFormProps>({
    defaultValues: { name: '', email: '', phone: '', post: '' },
  })

  const onSubmit = (data: IFormProps) => {
    alert(JSON.stringify(data))
  }

  const onError = (errors: any) => {
    console.log(errors)
  }

  return ReactDOM.createPortal(
    <>
      <Header />

      <Modal>
        <Form onSubmit={onSubmit} handleSubmit={handleSubmit} onError={onError}>
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
        </Form>
      </Modal>
    </>,
    portalDiv
  )
}

export default ContactModal
