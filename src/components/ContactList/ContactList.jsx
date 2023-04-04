import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import Api from '../../api'
import withQuery from '../../HOCs/withQuery'
import ContactListItem from '../ContactListItem/ContactListItem'
import { useContactHelpersContext } from '../ContextProvider/ContextProvider'
import styles from './contactlist.module.css'

export const CONTACTS_FROM_REQ = ['CONTACTS_FROM_REQ']

function ContactList() {
  const {
    data, isLoading, isError, error, refetch,
  } = useQuery({
    queryKey: CONTACTS_FROM_REQ,
    queryFn: Api.getAllContacts,
  })

  return (
    <ContactListWithQuery
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      refetch={refetch}
    />
  )
}

const ContactListData = ({ data }) => {
  const setContactList = useContactHelpersContext()
  useEffect(() => {
    setContactList(data)
  }, [])
  return (
    <div className={styles.list}>
      {!data?.length ? (
        <span>Contact list is empty...</span>
      ) : (
        data?.map((elem) => (
          <ContactListItem
            key={elem.id}
            number={elem.id}
            contactinfo={`${elem.firstName} ${elem.lastName}`}
            isFavourite={elem.favourite}
            ID={elem.id}
          />
        ))
      )}
    </div>
  )
}

const ContactListWithQuery = withQuery(ContactListData)

export default ContactList
