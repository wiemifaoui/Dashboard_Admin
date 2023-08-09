import React, { useEffect, useState } from "react";
import axios from "axios";
import RowDetailsP from "../components/RowDetailsP";
import { Link } from "react-router-dom";

function Partenaire() {
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);
  const [partenaire, setPartenaire] = useState([]);
  /* find all Partenaires */
  useEffect(() => {
    const getPartenaires = async () => {
      const { data } = await axios.get(
        "http://217.182.207.129:8000/api/v1/partenaires"
      );
      setPartenaire(data);
    };
    getPartenaires();
  });

  /* delete */
  const OnDelete = (id) => {
    if (window.confirm("are you sure to delete this partenaire")) {
      axios
        .delete(`http://217.182.207.129:8000/api/v1/partenaire/${id}`)
        .then((res) => {
          setMessage(res.data.message);
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 4000);
        });
    }
  };
  return (
    <div>
      <div className=" container row p-4">
        <div className=" container col-12 col-lg-4">
          <div className="mt-4">
            <button type="button" class="btn btn-success">
              <Link to="/AddPartenaire">addPartenaire</Link>
            </button>

            <h1>List Partenaires</h1>
          </div>
          {/* <form>
            <InputGroup label="Geom" type="text" name="geom" />
            <InputGroup label="NameMonument" type="text" name="nom_monument" />
            <InputGroup label="Latitude" type="text" name="latitude_monument" />
            <InputGroup
              label="longitude"
              type="text"
              name="longitude_monument"
            />
            <InputGroup label="status" type="text" name="statut_monument" />
            <InputGroup
              label="Importance"
              type="text"
              name="importance_monument"
            />
            <InputGroup
              label="Accessibilité"
              type="text"
              name="accessibilite_monument"
            />
            <InputGroup label="Adresse" type="text" name="adresse_monument" />
            <InputGroup label="Relief" type="text" name="relief" />
            <InputGroup
              label="Description"
              type="text"
              name="description_monument"
            />
            <InputGroup label="Durée visite" type="text" name="duree_visite" />
            <InputGroup label="Telephone " type="text" name="telephone_site" />
            <InputGroup label="Uri_Video" type="text" name="uri_video" />
            <InputGroup
              label="Horaire ouverture éte"
              type="date"
              name="horaire_ouverture_ete"
            />
            <InputGroup
              label="Horaire fermeture éte"
              type="date"
              name="horaire_fermeture_ete"
            />
            <InputGroup
              label="Horaire ouverture hiver"
              type="date"
              name="horaire_ouverture_hiver"
            />
            <InputGroup
              label="Horaire fermeture hiver"
              type="date"
              name="horaire_fermeture_hiver"
            />
            <InputGroup
              label="Epoque_Dominante"
              type="text"
              name="epoque_dominante"
            />
            <InputGroup
              label="epoque_moins_visible"
              type="text"
              name="epoque_moins_visible"
            />
            <InputGroup
              label="Troisieme_epoque"
              type="text"
              name="troisieme_epoque"
            />
            <InputGroup
              label="Fonction_monument"
              type="text"
              name="fonction_monument"
            />
            <InputGroup
              label="image_panoramique"
              type="text"
              name="image_panoramique  "
            />
            <button className="btn btn-primary">Add Monument</button>
          </form> */}

          <div className=" table-responsive ">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">nom_partenaire</th>
                  <th scope="col">adresse_partenaire</th>
                  <th scope="col">categorie_partenaire</th>
                  <th scope="col">telephone_partenaire</th>
                  <th scope="col">statut_partenaire</th>

                  <th scope="col">heure_ete_partenaire</th>
                  <th scope="col">heure_hiver_partenaire</th>
                  <th scope="col">latitude_partenaire</th>
                  <th scope="col">longitude_partenaire</th>
                  <th scope="col">description_partenaire</th>

                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {partenaire.map(
                  ({
                    id,
                    nom_partenaire,
                    adresse_partenaire,
                    categorie_partenaire,
                    telephone_partenaire,
                    statut_partenaire,
                    heure_ete_partenaire,
                    heure_hiver_partenaire,
                    latitude_partenaire,
                    longitude_partenaire,
                    description_partenaire,
                  }) => (
                    <RowDetailsP
                      id={id}
                      nom_partenaire={nom_partenaire}
                      adresse_partenaire={adresse_partenaire}
                      categorie_partenaire={categorie_partenaire}
                      telephone_partenaire={telephone_partenaire}
                      statut_partenaire={statut_partenaire}
                      heure_ete_partenaire={heure_ete_partenaire}
                      heure_hiver_partenaire={heure_hiver_partenaire}
                      latitude_partenaire={latitude_partenaire}
                      longitude_partenaire={longitude_partenaire}
                      description_partenaire={description_partenaire}
                      OnDelete={OnDelete}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Partenaire;
