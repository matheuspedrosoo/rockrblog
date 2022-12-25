/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from 'react-dom'
import { Header } from '../Header/Header'
import { MdClose } from 'react-icons/md'
import { InptuCustom } from '../InputCustom'
import { INewPostProps } from '../../interfaces/INewPost'
import { useForm } from 'react-hook-form'
import { IFormProps } from '../../interfaces/IForm'
import pencil from '../../assets/pencil.svg'
import photo from '../../assets/photo.svg'
import { Modal } from '../Modal'
import { Form } from '../Form'
import { Button } from '../Button'

function NewPostModal({ setOpenModalNewPost, openModalNewPost }: INewPostProps) {
  const portalDiv = document.getElementById('modal-newPost') as HTMLElement
  const { register, handleSubmit } = useForm<IFormProps>({
    defaultValues: { title: '', author: '', image: '', post: '' },
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
          <MdClose
            size={42}
            style={{ alignSelf: 'end', cursor: 'pointer' }}
            onClick={() => setOpenModalNewPost(!openModalNewPost)}
          />

          <img src={photo} alt="photo" />

          <h1 className="title">New Post</h1>

          <InptuCustom label="Title" placeholder="Fill the title" register={register} name="title" />
          <InptuCustom label="Author" placeholder="Fill the author name" register={register} name="author" />
          <InptuCustom label="Image URL" placeholder="Fill the image URL" register={register} name="image" />
          <InptuCustom label="Post" placeholder="Post..." textArea register={register} name="post" />

          <Button type="submit" title="Create Post" src={pencil} alt="pencil icon" />
        </Form>
      </Modal>
    </>,
    portalDiv
  )
}

export default NewPostModal
