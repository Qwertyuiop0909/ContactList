import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import Api from '../../api'
import withQuery from '../../HOCs/withQuery'
import ContactInfo from '../ContactInfo/ContactInfo'

export const getCurrentUserQueryKey = (userId) => [
  'CURRENT_USER_QUERY_KEY',
  userId,
]

export default function ContactHelper() {
  const { id } = useParams()

  const {
    data,
    isError,
    isLoading,
    isSuccess,
    error,
    refetch,
  } = useQuery({
    queryKey: getCurrentUserQueryKey(id),
    queryFn: () => Api.getContactById(id),
  })

  return (
    <ContactWithQuery
      key={data?.id}
      contactinfo={data}
      isLoading={isLoading}
      isError={isError}
      isSuccess={isSuccess}
      error={error}
      refetch={refetch}
    />
  )
}

const ContactWithQuery = withQuery(ContactInfo)
