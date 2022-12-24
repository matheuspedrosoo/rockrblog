/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from 'react-dom'
import { Header } from '../Header/Header'
import { MdClose } from 'react-icons/md'
import { InptuCustom } from '../InputCustom'
import { INewPostProps } from '../../interfaces/INewPost'
import { useForm } from 'react-hook-form'
import { IFormProps } from '../../interfaces/IForm'
import { useAnimations } from '../../hooks/useAnimations'
import pencil from '../../assets/pencil.svg'

import styles from './NewPostModal.module.scss'

function NewPostModal({ setOpenModalNewPost, openModalNewPost }: INewPostProps) {
  const portalDiv = document.getElementById('modal-newPost') as HTMLElement
  useAnimations()

  const { register, handleSubmit } = useForm<IFormProps>({
    defaultValues: { title: '', author: '', image: '', post: '' },
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
        <form onSubmit={handleSubmit(onSubmit, onError)} data-aos="fade-down" data-aos-duration="2000">
          <MdClose className={styles.icon} size={42} onClick={() => setOpenModalNewPost(!openModalNewPost)} />

          <h1 className="title">New Post</h1>

          <InptuCustom label="Title" placeholder="Fill the title" register={register} name="title" />
          <InptuCustom label="Author" placeholder="Fill the author name" register={register} name="author" />
          <InptuCustom label="Image URL" placeholder="Fill the image URL" register={register} name="image" />
          <InptuCustom label="Post" placeholder="Post..." textArea register={register} name="post" />

          <button className={styles.buttonSubmit}>
            <img src={pencil} alt="pencil icon" />
            Create Post
          </button>
        </form>
      </div>
    </>,
    portalDiv
  )
}

export default NewPostModal
