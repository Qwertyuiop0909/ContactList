import ContactInfo from '../ContactInfo/ContactInfo'

function ContactHelper({ contact }) {
  // request for qurrent user by id
  return (
    <div>
      <ContactInfo key={contact.id} contactinfo={contact.data} />
    </div>
  )
}

export default ContactHelper
