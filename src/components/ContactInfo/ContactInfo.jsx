import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import useDeleteContact from '../../customhooks/useDeleteContact'
import useLike from '../../customhooks/useLike'
import styles from './contactinfo.module.scss'

function ContactInfo({ contactinfo }) {
  const navigate = useNavigate()
  const { mutate: deleteContact } = useDeleteContact()
  const { mutate: changeFavourite } = useLike()

  const isFavourite = contactinfo.favourite

  const {
    id, favourite, description, phoneNumber, avatar, ...dataDetails
  } = contactinfo

  return (
    <div style={{ margin: '2rem' }}>
      <div className={styles.maincard}>
        <div className={styles.cardimg}>
          <img src={contactinfo.avatar} className={styles.avatar} alt="card" />
          <button type="button" className={styles.homeButton} onClick={() => navigate('/')}>
            <i className={classNames('fa-solid', 'fa-house', { [styles.icon]: isFavourite })} />
          </button>
        </div>
        <div className={styles.maindetails}>
          <div className="card-body">
            <h5 className="card-title">
              {`${contactinfo.firstName} ${contactinfo.lastName}`}
              {' '}
              <span>
                <button
                  type="button"
                  onClick={() => changeFavourite(contactinfo.id)}
                  className={styles.likebutton}
                >
                  <i className={classNames('fa-solid', 'fa-heart', { [styles.icon]: isFavourite })} />
                </button>
              </span>
            </h5>
            <p>{contactinfo.description}</p>
            <p>{contactinfo.phoneNumber}</p>
          </div>
          <button type="button" className={classNames('btn', 'btn-danger', styles.delbutton)} onClick={() => deleteContact()}>Delete</button>
        </div>
      </div>
      <div className={styles.details}>
        {
            Object.keys(dataDetails).map((elem) => (
              <div key={contactinfo.elem}>
                <span>{elem}</span>
                :
                <span>
                  {' '}
                  {contactinfo[elem] ? contactinfo[elem] : 'empty'}
                </span>
              </div>
            ))
          }
        <button type="button" className="btn btn-primary" style={{ width: '100%' }} onClick={() => navigate('edit')}>Edit</button>
      </div>
    </div>
  )
}

export default ContactInfo
