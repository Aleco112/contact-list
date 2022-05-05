const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactList: [],
    },
    actions: {
      getContactList: () => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch(
          "https://assets.breatheco.de/apis/fake/contact/agenda/aleco_agenda",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => setStore({ contactList: result }))
          .catch((error) => console.log("error", error));
      },
      addContact: (contact) => {      
        fetch("https://assets.breatheco.de/apis/fake/contact/", {
			method: "POST",
			headers: { 
				"Content-Type": "application/json"
			},
			body: JSON.stringify(contact),
			redirect: "follow",
		  })
          .then((response) => response.status===200? getActions().getContactList():"")
          .catch((error) => console.log("error", error));
      },
    },
  };
};

export default getState;
