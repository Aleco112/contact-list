import React,{useContext} from 'react'
import {Context} from "../store/appContext"

const ContactCard=(props) => {
  const {store ,actions }=useContext(Context)
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
        <button 
        type="button" 
        className="btn btn-outline-primary"
        onClick={()=>{
          <>
          <Link to="/add"></Link>
    
          </>
        actions.editContact(props.id)
        }
          
        
        }

          
        

        >edit</button>
        <button 
        onClick={()=>
          actions.deleteContact(props.id)
        }
        type="button" className="btn btn-danger btn btn-outline-primary">delete</button>
            
            
           
        </div>

  </div>
</div>

    </>
  )
}

export default ContactCard
