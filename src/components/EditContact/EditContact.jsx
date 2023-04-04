import useEditUser from '../../customhooks/useEditContact'
import EditForm from '../EditForm/EditForm'

const EditContact = () => {
  const { mutate, contact } = useEditUser()
  console.log(contact)

  return (
    <EditForm mutate={mutate} data={contact} />
  )
}

export default EditContact
