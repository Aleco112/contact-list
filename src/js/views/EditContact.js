import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();
  console.log(id);
  const { store, actions } = useContext(Context);
  const myContact = store.contactList && store.contactList.filter((contact) => contact.id === id)[0]
  const [contact, setContact] = useState({
    full_name: "",
    address: "",
    phone: "",
    email: "",
    agenda_slug: "aleco_agenda",
  });
  useEffect(() => {
    if (myContact) {
      setContact(myContact);
    }
  }, [myContact]);

  console.log(contact);
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
          onChange={(event) => {
            setContact({ ...contact, full_name: event.target.value });
          }}
          value={contact.full_name}
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
          onChange={(event) => {
            setContact({ ...contact, email: event.target.value });
          }}
          value={contact.email}
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
          onChange={(event) => {
            setContact({ ...contact, phone: event.target.value });
          }}
          value={contact.phone}
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
          onChange={(event) => {
            setContact({ ...contact, address: event.target.value });
          }}
          value={contact.address}
        ></input>
      </section>

      <button
        onClick={(e) => {
          e.preventDefault();
          actions.editContact(contact);
          history.push(`/`);
        }}
        className="btn btn-primary m-2 col-12 m-auto"
        type="button"
      >
        save
      </button>
      <div>
        <Link to="/" href="#" className="mx-2 link-primary">
          or get back to contacts{" "}
        </Link>
      </div>
    </form>
  );
};