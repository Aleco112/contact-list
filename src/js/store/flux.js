const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactList: [],
    },
    actions: {
      getContactList: () => {
        fetch(
          "https://assets.breatheco.de/apis/fake/contact/agenda/aleco_agenda"
        )
          .then((response) => response.json())
          .then((result) => setStore({ contactList: result }))
          .catch((error) => console.log("error", error));
      },

      addContact: (contact) => {
        fetch("https://assets.breatheco.de/apis/fake/contact/", {
          method :'POST',
					redirect:'follow',
					headers: {
						"content-type": "application/json"
					},
					body:JSON.stringify(contact)

        })
        .then(response=>response.status ===200 ? getActions().getContactList():"")
          .catch((error) => console.log("error", error));
      },

      deleteContact: (contact_id) => {
        console.log("ok")
        fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`, {
          method:"DELETE",
          redirect: "follow",
        })
          .then((response) => {
            response.status === 200 ? getActions().getContactList() : "";
          })

          .catch((error) => console.log("error", error));
      },

      editContact: (contact_id) => {
        fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`, {
          method:"PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact_id),
          redirect: "follow",
        })
        .then((response) => {
          response.status === 200 ? getActions().getContactList() : "";
        })

        .catch((error) => console.log("error", error));
      },
    },
  };
};

export default getState;
