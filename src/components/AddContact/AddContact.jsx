import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../../api'
import AddForm from '../AddForm/AddForm'
import Modal from '../Modal/Modal'

const AddContact = () => {
  const queryClient = useQueryClient()
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: (data) => Api.addContact(data),
    onMutate: async (newContact) => {
      await queryClient.cancelQueries({ queryKey: ['CONTACTS_FROM_REQ'] })

      const previousList = queryClient.getQueryData(['CONTACTS_FROM_REQ'])

      queryClient.setQueryData(['CONTACTS_FROM_REQ'], (old) => [newContact, ...old])
      setIsOpen(false)

      return { previousList }
    },
    onError: (err, newContact, context) => {
      queryClient.setQueryData(['CONTACTS_FROM_REQ'], context.previousList)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['CONTACTS_FROM_REQ'] })
    },
    onSuccess: (data) => {
      navigate(`contacts/${data.id}`)
    },
  })

  return (
    <>
      <button type="button" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setIsOpen(true)}>
        Add
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <AddForm mutate={mutate} />
      </Modal>
    </>
  )
}

export default AddContact
