import ReactDOM from 'react-dom'
import { Header } from '../Header/Header'
import { MdClose } from 'react-icons/md'
import { InptuCustom } from './InptuCustom'
import { IModalProps } from '../../interfaces/IModal'
import send from '../../assets/send.svg'

import styles from './ContactModal.module.scss'

function ContactModal({ setOpenModalContact, openModalContact }: IModalProps) {
  const portalDiv = document.getElementById('modal') as HTMLElement

  return ReactDOM.createPortal(
    <>
      <Header />

      <div className={styles.overlay}>
        <form>
          <MdClose className={styles.icon} size={42} onClick={() => setOpenModalContact(!openModalContact)} />

          <h1 className="title">Contact</h1>

          <InptuCustom label="Name" placeholder="Fill your full name" />
          <InptuCustom label="Email" placeholder="Fill a valid  e-mail" />
          <InptuCustom label="Phone" placeholder="Fill your phone" />
          <InptuCustom label="Post" placeholder="Hello..." textArea />

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
