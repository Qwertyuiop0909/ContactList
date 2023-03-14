import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './contactlistitem.module.css'

function ContactListItem({ contactinfo }) {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <NavLink key={contactinfo.id} onClick={() => setIsSelected((prev) => !prev)}>
      <div className={`card mt-2 ${isSelected ? styles.selected : ''}`}>
        <div className="card-body">
          {contactinfo}
        </div>
      </div>
    </NavLink>

  )
}

export default ContactListItem
