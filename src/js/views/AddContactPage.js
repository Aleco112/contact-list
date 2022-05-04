import React from 'react'

const AddContactPage = () => {
  return (
    
    <form>
      <h1 className='title'>Add a new contact</h1>
      <section>
        <div>FullName</div>
        <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
      </section>
      <section>
        <div>email</div>
        <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
      </section>
      <section>
        <div>Phone</div>
        <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
      </section>
      <section className='bottom'>
        <div>address</div>
        <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
      </section>
      
      <button className="btn btn-primary m-2 col-12 m-auto" type="button">save</button>
      
    </form>
  
  )
}

export default AddContactPage