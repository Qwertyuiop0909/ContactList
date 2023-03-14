function ContactInfo({ key, contactinfo }) {
  return (
    <div id={key} className="card mb-3" style={{ 'max-width': '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="Contact" className="img-fluid rounded-start" alt="card" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{`${contactinfo.name} ${contactinfo.surname}`}</h5>
            <p className="card-text">{contactinfo.info}</p>
            <p className="card-text"><small className="text-muted">contactinfo.phonenumber</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
