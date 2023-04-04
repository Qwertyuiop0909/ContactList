import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import useLike from '../../customhooks/useLike'
import styles from './contactlistitem.module.scss'

function ContactListItem({
  number, contactinfo, isFavourite, ID,
}) {
  const { mutate } = useLike()

  const likeHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(ID)
    mutate(ID)
  }
  return (
    <NavLink
      to={`/contacts/${number}`}
      id={ID}
      className={({ isActive }) => classNames({ [styles.selected]: isActive }, styles.navlnk)}
    >
      <div className={`card btn btn-primary ${styles.card_item}`}>
        <div className="card-body">
          <span>{contactinfo}</span>
          <button type="button" className={styles.heartButton} onClick={(e) => likeHandler(e)}>
            <i className={classNames('fa-solid', 'fa-heart', { [styles.icon]: isFavourite })} />
          </button>
        </div>
      </div>
    </NavLink>
  )
}

export default ContactListItem
