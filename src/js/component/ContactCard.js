import React from 'react'

const ContactCard=(props) => {
  return (
      <>
    <div className="card mb-3" style={{maxWidth:" 540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.iamge}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.FullName}</h5>
        <div><i className="fa-solid fa-location-dot"></i>{props.address}</div> 
        <div><i className="fa-solid fa-circle-phone-flip"></i> {props.telephone}</div> 
        <div><i className="fa-solid fa-envelope"></i> {props.email}</div> 
        </div>
        <div className='update'> 
            <div> 
            <i className="fa-solid fa-pencil"></i>
            <i className="fa-solid fa-trash"></i>
            
            </div>
        </div>

    </div>
  </div>
</div>
    </>
  )
}

export default ContactCard
