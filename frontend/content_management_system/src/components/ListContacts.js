import { useState, useEffect } from "react";
import { apiUrl } from "./Contact";
const ListContacts = (props) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(apiUrl, requestOptions)
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((error) => {
        console.log(error);
      });
  }, [props.refresh]);

  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Adresse</th>
          <th>Ville</th>
          <th>Pays</th>
          <th>Téléphone</th>
          <th>Début contrat</th>
        </tr>
      </thead>
      <tbody>
        {contacts && contacts.map((c) => (
          <tr key={c.id}>
            <td> {c.nom} </td>
            <td> {c.adress} </td>
            <td> {c.ville} </td>
            <td> {c.pays} </td>
            <td> {c.telephone} </td>
            <td> {c.debut_de_contrat} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ListContacts;
