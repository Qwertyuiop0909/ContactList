import { useMutation, useQueryClient } from '@tanstack/react-query'
import Api from '../api'
import { getCurrentUserQueryKey } from '../components/ContactHelper/ContactHelper'
import { CONTACTS_FROM_REQ } from '../components/ContactList/ContactList'

const useLike = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (id) => Api.like(id),
    onMutate: (contactId) => {
      const queryID = getCurrentUserQueryKey(contactId)
      if (queryClient.getQueryState({ queryKey: queryID })) {
        queryClient
          .setQueryData(queryID, (old) => ({
            ...old,
            favourite: !old.favourite,
          }))
      }
      queryClient
        .setQueryData(CONTACTS_FROM_REQ, (old) => old.map((elem) => {
          if (elem.id === contactId) return { ...elem, favourite: !elem.favourite }
          return elem
        }))
      return { contactId, queryID }
    },

    onError: (err, newCont, context) => {
      queryClient
        .setQueryData(context.queryID, (old) => ({
          ...old,
          favourite: !old.favourite,
        }))
      queryClient
        .setQueryData(CONTACTS_FROM_REQ, (old) => old.map((elem) => {
          if (elem.id === context.contactId) return { ...elem, favourite: !elem.favourite }
          return elem
        }))
    },
  })

  return {
    mutate,
  }
}

export default useLike
