import { useState, useEffect } from "react";

import "./styles.css";

import Form from "./Form";
import List from "./List";

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Ali",
            phone_number: "123123",
        },
        {
            fullname: "Ayşe",
            phone_number : "456456",
        },
        {
            fullname: "Zeynep",
            phone_number : "789789",
        }
    ]);

    useEffect(()=>{
        console.log(contacts);
    },[contacts]);

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContacts={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;



