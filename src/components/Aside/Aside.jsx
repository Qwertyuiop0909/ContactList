import SearchBar from '../SearchBar/SearchBar'
import styles from './aside.module.css'
import ContactList from '../ContactList/ContactList'
import AddContact from '../AddContact/AddContact'

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <div className={styles.interface}>
        <SearchBar />
        <AddContact />
      </div>
      <hr />
      <ContactList />
    </aside>
  )
}
