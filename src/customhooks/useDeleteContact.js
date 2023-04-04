import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import Api from '../api'
import { CONTACTS_FROM_REQ } from '../components/ContactList/ContactList'

const useDeleteUser = () => {
  const queryClient = useQueryClient()
  const { id } = useParams()
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: () => Api.deleteContact(id),
    onMutate: async (contactId) => {
      await queryClient.cancelQueries({ queryKey: CONTACTS_FROM_REQ })

      const previousContacts = queryClient.getQueryData(CONTACTS_FROM_REQ)

      queryClient
        .setQueryData(CONTACTS_FROM_REQ, (old) => old.filter((elem) => elem.id !== contactId))

      return { previousContacts }
    },

    onError: (err, deletedContact, context) => {
      queryClient.setQueryData(CONTACTS_FROM_REQ, context.previousTodos)
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: CONTACTS_FROM_REQ })
      navigate('/')
    },
  })

  return {
    mutate,
  }
}

export default useDeleteUser
