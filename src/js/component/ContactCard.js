import React from 'react'

const ContactCard=(props) => {
  return (
      <>
    <div className="card mb-3" style={{maxWidth:" 540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img className='image' src={props.image}/>
    </div>
    <div className="col-md-5">
      <div className="card-body">
        <h5 className="card-title">{props.FullName}</h5>
        <div><i className="fa-regular fa-location-dot"></i>{props.address}</div> 
        <div><i className="fa-regular fa-circle-phone-flip"></i> {props.telephone}</div> 
        <div><i className="fa-regular fa-envelope"></i> {props.email}</div> 
        </div>
    </div>
        <div className='col-md-3'> 
            <div> 
            <i className="fa-regular fa-pencil fa-rg"></i>
            <i className="fa-regular fa-trash"></i>
            
            
            </div>
        </div>

  </div>
</div>
    </>
  )
}

export default ContactCard
