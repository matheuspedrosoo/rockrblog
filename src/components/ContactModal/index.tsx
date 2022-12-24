import { Header } from '../Header/Header'
import ReactDOM from 'react-dom'
import { MdClose } from 'react-icons/md'

import send from '../../assets/send.svg'

import styles from './ContactModal.module.scss'
import { Dispatch, SetStateAction } from 'react'

interface IModalProps {
  openModalContact: boolean
  setOpenModalContact: Dispatch<SetStateAction<boolean>>
}

function ContactModal({ setOpenModalContact, openModalContact }: IModalProps) {
  const portalDiv = document.getElementById('modal') as HTMLElement

  return ReactDOM.createPortal(
    <>
      <Header />

      <div className={styles.overlay}>
        <form>
          <MdClose className={styles.icon} size={42} onClick={() => setOpenModalContact(!openModalContact)} />

          <h1 className="title">Contact</h1>

          <label className="text">
            Name
            <input type="text" placeholder="Fill your full name" />
          </label>

          <label className="text">
            E-mail
            <input type="text" placeholder="Fill a valid  e-mail" />
          </label>

          <label className="text">
            Phone
            <input type="text" placeholder="Fill a valid  e-mail" />
          </label>

          <label className="text">
            Post
            <textarea placeholder="Fill a valid  e-mail" />
          </label>

          <button className={styles.buttonSubmit}>
            {' '}
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
