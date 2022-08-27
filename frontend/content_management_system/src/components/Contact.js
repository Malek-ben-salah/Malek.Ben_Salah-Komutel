import { useState } from "react";
import ListContacts from "./ListContacts";
export const apiUrl = "http://localhost:8080/api/contacts";
const Contact = () => {
  //tableau des pays pour la liste déroulante "select"
  const Pays = ["USA", "TUNISIA", "FRANCE", "SPAIN", "ENGLAND"];

  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [ville, setVille] = useState("");
  const [pays, setPays] = useState("");
  const [telephone, setTelephone] = useState(0);
  const [debutContrat, setDebutContrat] = useState("");
  const [refresh, setRefresh] = useState(0);
  const [submit, isSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  // ajout contact
  const addContact = (e) => {
    e.preventDefault();
    isSubmit(true);
    setFormErrors(validate());
    //teste des champs vide
    if (
      nom === "" ||
      adresse === "" ||
      ville === "" ||
      pays === "" ||
      telephone === 0 ||
      debutContrat === ""
    ) {
      alert(" il faut remplir tout les champs !! ");
    } else {
      isSubmit(false);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: nom,
          adress: adresse,
          ville: ville,
          pays: pays,
          telephone: parseInt(telephone),
          debut_de_contrat: new Date(debutContrat),
        }),
      };
      fetch(apiUrl, requestOptions)
        .then(
          (response) => response.json(),
          setRefresh(refresh + 1),
          setNom(""),
          setAdresse(""),
          setVille(""),
          setPays(""),
          setTelephone(0),
          setDebutContrat(""),
          alert("contact ajouté")
        )
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const validate = () => {
    const errors = {};
    if (nom === "") {
      errors.nom = "nom est obligatoire";
    }
    if (adresse === "") {
      errors.adresse = "adresse est obligatoire";
    }
    if (ville === "") {
      errors.ville = "ville est obligatoire";
    }
    if (pays === "") {
      errors.pays = "pays est obligatoire";
    }
    if (telephone === 0) {
      errors.telephone = "telephone est obligatoire";
    }
    if (debutContrat === "") {
      errors.debutContrat = "debut de contrat est obligatoire";
    }
    return errors;
  };

  const reset = () => {
    setNom("");
    setAdresse("");
    setVille("");
    setPays("");
    setTelephone(0);
    setDebutContrat("");
  };

  return (
    <form onSubmit={addContact}>
      <div>
        <h1>Contacts</h1>
        <div style={{ display: "flex" }}>
          <div align="left">
            <table>
              <tbody>
                <tr>
                  <td>Nom</td>
                  <td>
                    <input
                      type="text"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                    />
                    {submit && <p>{formErrors.nom}</p>}
                  </td>
                </tr>
                <tr>
                  <td>Adresse</td>
                  <td>
                    <input
                      type="text"
                      value={adresse}
                      onChange={(e) => setAdresse(e.target.value)}
                    />
                    {submit && <p>{formErrors.adresse}</p>}
                  </td>
                </tr>
                <tr>
                  <td>Ville</td>
                  <td>
                    <input
                      type="text"
                      value={ville}
                      onChange={(e) => setVille(e.target.value)}
                    />
                    {submit && <p>{formErrors.ville}</p>}
                  </td>
                </tr>
                <tr>
                  <td>Pays</td>
                  <td>
                    <select
                      value={pays}
                      onChange={(e) => setPays(e.target.value)}
                    >
                      {Pays.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    {submit && <p>{formErrors.pays}</p>}
                  </td>
                </tr>
                <tr>
                  <td>Téléphone</td>
                  <td>
                    <input
                      type="tel"
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                    />
                    {submit && <p>{formErrors.telephone}</p>}
                  </td>
                </tr>
                <tr>
                  <td>Début contrat</td>
                  <td>
                    <input
                      type="date"
                      value={debutContrat}
                      onChange={(e) => setDebutContrat(e.target.value)}
                    />
                    {submit && <p>{formErrors.debutContrat}</p>}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <button type="button" onClick={() => reset()}>
                      Annuler
                    </button>
                  </td>
                  <td>
                    <button type="submit">Confirmer</button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div align="right">
            <ListContacts refresh={refresh} />
          </div>
        </div>
      </div>
    </form>
  );
};
export default Contact;
