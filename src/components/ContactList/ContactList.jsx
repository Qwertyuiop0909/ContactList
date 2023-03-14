import ContactListItem from '../ContactListItem/ContactListItem'
import styles from './contactlist.module.css'

function ContactList({ list }) {
  // request for getting ContactList
  return (
    <div className={styles.list}>
      {
        (!list.length) ? <span>Contact list is empty...</span>
          : list.map((elem) => <ContactListItem key={elem.id} contactinfo={`${elem.data.name} ${elem.data.surname}`} />)
      }
    </div>
  )
}

export default ContactList
