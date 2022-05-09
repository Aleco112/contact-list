import React,{useContext}from "react";
import ContactCard from "../component/ContactCard";
import {Context} from "../store/appContext"

export const ContactListPage = () => {
  const { store , actions}=useContext(Context)

  
  console.log
  return (
    <div>
      {store.contactList && store.contactList.map((contact,i)=>{
        return(
          <ContactCard
          image="https://st2.depositphotos.com/1531183/5770/v/950/depositphotos_57709697-stock-illustration-male-person-silhouette-profile-picture.jpg"
          FullName={contact.full_name}
          address={contact.address}
          telephone={contact.phone}
          email= {contact.email}
          key={i}
          />
          
        )
      })}
    </div>
  );
};
