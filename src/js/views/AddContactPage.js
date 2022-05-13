import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import ContactCard from "../component/ContactCard";
const AddContactPage = () => {
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({
    full_name: "",
    address: "",
    phone: "",
    email: "",
    agenda_slug:"aleco_agenda",
  });
  console.log(store.contactList);

  return (
    <form>
      <h1 className="title">Add a new contact</h1>
      <section>
        <div>FullName</div>
        <input

          type="text"
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={(event)=>{
            setContact({...contact,full_name:event.target.value})
          }}
          
        ></input>
      </section>
      <section>
        <div>email</div>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={(event)=>{
            setContact({...contact,email:event.target.value})
          }}
    
          
        ></input>
      </section>
      <section>
        <div>Phone</div>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={(event)=>{
            setContact({...contact,phone:event.target.value})
          }}
        
        ></input>
      </section>
      <section className="bottom">
        <div>address</div>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={(event)=>{
            setContact({...contact,address:event.target.value})
          }}
         
        ></input>
      </section>

      <button 
      onClick={()=>{
        if(contact!=="") {
          actions.addContact(contact)
           }
           <Link to="/"></Link>
         

      }}
      className="btn btn-primary m-2 col-12 m-auto" type="button">
        save
      </button>
    </form>
  );
};

export default AddContactPage;
