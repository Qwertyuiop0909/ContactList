import ContactList from '../ContactList/ContactList'
import Form from '../Form/Form'
import styles from './aside.module.css'

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <Form />
      <button
        type="button"
        className={`btn btn-primary ${styles.addbutton}`}
      >
        Add
      </button>
      <hr />
      <ContactList />
    </aside>
  )
}
