import React, { useEffect, useState } from "react";
import axios from "axios";
import RowDetailsC from "../components/RowDetailsC";
import { Link } from "react-router-dom";

function Circuit() {
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);
  const [circuit, setCircuit] = useState([]);
  /* find all Monuments */
  useEffect(() => {
    const getCircuits = async () => {
      const { data } = await axios.get(
        "http://217.182.207.129:8000/api/v1/thematiques"
      );
      setCircuit(data);
    };
    getCircuits();
  });

  /* delete */
  const OnDelete = (id) => {
    if (window.confirm("are you sure to delete this circuit")) {
      axios
        .delete(`http://217.182.207.129:8000/api/v1/thematique/${id}`)
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
              <Link to="/AddCircuit">AddCircuit</Link>
            </button>

            <h1>List Circuit</h1>
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

          <div className=" table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">nom_thematique</th>
                  <th scope="col">description_thematique</th>
                  <th scope="col">categorie_thematique</th>
                  <th scope="col">nbr_etape</th>
                  <th scope="col">kilometrage</th>
                  <th scope="col">duree</th>
                  <th scope="col">depart_longitude_circuit</th>
                  <th scope="col">depart_latitude_circuit</th>
                  <th scope="col">image</th>
                  <th scope="col">video</th>
                  <th scope="col">createdAt </th>
                  <th scope="col">updatedAt </th>

                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {circuit.map(
                  ({
                    id,
                    nom_thematique,
                    description_thematique,
                    categorie_thematique,
                    nbr_etape,
                    kilometrage,
                    duree,
                    depart_longitude_circuit,
                    depart_latitude_circuit,
                    img,
                    video,
                    createdAt,
                    updatedAt,
                  }) => (
                    <RowDetailsC
                      id={id}
                      nom_thematique={nom_thematique}
                      description_thematique={description_thematique}
                      categorie_thematique={categorie_thematique}
                      nbr_etape={nbr_etape}
                      kilometrage={kilometrage}
                      duree={duree}
                      depart_longitude_circuit={depart_longitude_circuit}
                      depart_latitude_circuit={depart_latitude_circuit}
                      img={img}
                      video={video}
                      createdAt={createdAt}
                      updatedAt={updatedAt}
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

export default Circuit;
