import { useNavigate, useParams } from 'react-router-dom'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import Api from '../api'
import { CONTACTS_FROM_REQ } from '../components/ContactList/ContactList'
import { getCurrentUserQueryKey } from '../components/ContactHelper/ContactHelper'

const useEditUser = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { id } = useParams()
  const queryID = getCurrentUserQueryKey(id)

  const { mutate } = useMutation({
    mutationFn: (data) => Api.editContact(id, data),
    onMutate: async (newContact) => {
      await queryClient.cancelQueries({ queryKey: CONTACTS_FROM_REQ })

      const previousContact = queryClient.getQueriesData({ queryKey: queryID })

      queryClient.setQueryData(CONTACTS_FROM_REQ, (old) => old.map((elem) => {
        if (elem.id === id) return newContact
        return elem
      }))
      queryClient.setQueryData(queryID, (old) => ({
        ...old,
        ...newContact,
      }))

      return { previousContact }
    },
    onError: (err, newContact, context) => {
      queryClient.setQueryData(queryID, context.previousContact)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: CONTACTS_FROM_REQ })
      queryClient.invalidateQueries({ queryKey: queryID })
    },
    onSuccess: (data) => {
      navigate(`/contacts/${data.id}`)
    },
  })

  return {
    mutate,
    contact: queryClient.getQueryData({ queryKey: getCurrentUserQueryKey(id) }),
  }
}

export default useEditUser
