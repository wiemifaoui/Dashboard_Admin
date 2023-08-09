import React, { useEffect, useState } from "react";
import axios from "axios";
import RowDetailsM from "../components/RowDetailsM";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Monument() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);
  const [monuments, setMonuments] = useState([]);

  /* find all Monuments */
  useEffect(() => {
    const getMonuments = async () => {
      const { data } = await axios.get(
        "http://217.182.207.129:8000/api/v1/monuments"
      );
      setMonuments(data);
      console.log("wwwwww");
    };
    getMonuments();
  }, []);

  /* delete */
  const OnDelete = (id) => {
    if (window.confirm("are you sure to delete this monument")) {
      axios
        .delete(`http://217.182.207.129:8000/api/v1/monument/${id}`)
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
        <div
          className="  container 
        col-12 col-lg-4"
        >
          <div className="mt-4">
            <button type="button" class="btn btn-success">
              <Link to="/AddMonument">AddMonument</Link>
            </button>

            <h1>List monuments</h1>
          </div>
          <div className=" table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Geom</th>
                  <th scope="col">Nom_monument</th>
                  <th scope="col">Latitude_monument</th>
                  <th scope="col">Longitude_monument</th>
                  <th scope="col">statut_monument</th>
                  <th scope="col">relief</th>
                  <th scope="col">adresse_monument</th>
                  <th scope="col">Importance_monument</th>
                  <th scope="col">Accessibilite_monument</th>
                  <th scope="col">Description_monument </th>
                  <th scope="col">Horaire_ouverture_ete</th>
                  <th scope="col">Horaire_fermeture_ete </th>
                  <th scope="col">Horaire_ouverture_hiver </th>
                  <th scope="col">horaire_fermeture_hiver</th>
                  <th scope="col">Epoque_dominante</th>
                  <th scope="col">Epoque_moins_visible</th>
                  <th scope="col">Troisieme_epoque</th>
                  <th scope="col">Fonction_monument</th>
                  <th scope="col">Image_panoramique</th>
                  <th scope="col">etat_conservation</th>
                  <th scope="col">priorite</th>
                  <th scope="col">modele_obj</th>
                  <th scope="col">Image</th>
                  <th scope="col">enregistrement_audio</th>

                  <th scope="col">duree_visite</th>
                  <th scope="col">uri_video</th>
                  <th scope="col">affect</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {monuments.map(
                  ({
                    id,
                    geom,
                    nom_monument,
                    latitude_monument,
                    longitude_monument,
                    statut_monument,
                    relief,
                    adresse_monument,
                    importance_monument,
                    accessibilite_monument,
                    description_monument,
                    horaire_ouverture_ete,
                    horaire_fermeture_ete,
                    horaire_ouverture_hiver,
                    horaire_fermeture_hiver,
                    epoque_dominante,
                    epoque_moins_visible,
                    troisieme_epoque,
                    fonction_monument,
                    image_panoramique,
                    etat_conservation,
                    priorite,
                    modele_obj,
                    qr_code,
                    enregistrement_audio,
                    duree_visite,
                    uri_video,
                    affect,
                  }) => (
                    <RowDetailsM
                      id={id}
                      geom={geom}
                      nom_monument={nom_monument}
                      latitude_monument={latitude_monument}
                      longitude_monument={longitude_monument}
                      statut_monument={statut_monument}
                      relief={relief}
                      adresse_monument={adresse_monument}
                      importance_monument={importance_monument}
                      accessibilite_monument={accessibilite_monument}
                      description_monument={description_monument}
                      horaire_ouverture_ete={horaire_ouverture_ete}
                      horaire_fermeture_ete={horaire_fermeture_ete}
                      horaire_ouverture_hiver={horaire_ouverture_hiver}
                      horaire_fermeture_hiver={horaire_fermeture_hiver}
                      epoque_dominante={epoque_dominante}
                      epoque_moins_visible={epoque_moins_visible}
                      troisieme_epoque={troisieme_epoque}
                      fonction_monument={fonction_monument}
                      image_panoramique={image_panoramique}
                      etat_conservation={etat_conservation}
                      priorite={priorite}
                      modele_obj={modele_obj}
                      qr_code={qr_code}
                      enregistrement_audio={enregistrement_audio}
                      duree_visite={duree_visite}
                      uri_video={uri_video}
                      affect={affect}
                      OnDelete={OnDelete}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
        {""}
      </div>
    </div>
  );
}

export default Monument;
