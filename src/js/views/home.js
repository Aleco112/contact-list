import React, { useContext,useState} from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext.js"
import AddContactPage from "./AddContactPage";
import { ContactListpage } from "./ContactListpage";

export const Home = () => {
	const { name, setName}=useContext(Context)
	const[contact ,setConatct]=useState("")
	
	
	
	return(
		<>
	<AddContactPage />
	
	<ContactListpage/>

		</>
	
	);
};
