import React,{useContext,} from 'react'
import {Context} from "../store/appContext"
import {Link,useHistory,} from "react-router-dom"
const ContactCard=(props) => {
      let history=useHistory();
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
        <div>{props.address}</div> 
        <div> {props.telephone}</div> 
        <div>{props.email}</div> 
        
        
        
        </div>
    </div>
        <div className='col-md-3'> 
        <button 
        type="button" 
        className="btn btn-outline-primary"
        onClick={()=>{
          history.push(`/add/${props.id}`)
          
        
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
