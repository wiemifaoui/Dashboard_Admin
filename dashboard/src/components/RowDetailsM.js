import React from "react";
import { Link } from "react-router-dom";
import ReadMore from "./ReadMore";

function RowDetailsM({
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
  OnDelete,
}) {
  return (
    <tr>
      <th>{id}</th>
      <th>
        <ReadMore text={geom} max={25} />
      </th>
      <th>{nom_monument}</th>
      <th>{latitude_monument}</th>
      <th>{longitude_monument}</th>
      <th>{statut_monument}</th>
      <th>{relief}</th>
      <th>{adresse_monument}</th>
      <th>{importance_monument}</th>
      <th>{accessibilite_monument}</th>
      <th>
        <ReadMore text={description_monument} />
      </th>
      <th>{horaire_ouverture_ete}</th>
      <th>{horaire_fermeture_ete}</th>
      <th>{horaire_ouverture_hiver}</th>
      <th>{horaire_fermeture_hiver}</th>
      <th>{epoque_dominante}</th>
      <th>{epoque_moins_visible}</th>
      <th>{troisieme_epoque}</th>
      <th>{fonction_monument}</th>
      <th>{image_panoramique}</th>
      <th>{etat_conservation}</th>
      <th>{priorite}</th>
      <th>{modele_obj}</th>

      <th>
        <img
          src={qr_code}
          style={{
            height: 256,
            width: 256,
            borderRadius: 10,
          }}
          alt="qr_code"
        />
      </th>
      <th>{enregistrement_audio}</th>

      <th>{duree_visite}</th>
      <th>{uri_video}</th>
      <th>{affect}</th>
      <td class="gap__actions">
        <span class="badge bg-info">
          <Link to={`monument/${id}`} className="text-white">
            <i class="fas fa-edit"></i>
          </Link>
        </span>

        <span class="badge bg-danger" onClick={() => OnDelete(id)}>
          <i class="fas fa-trash-alt"></i>
        </span>
      </td>
    </tr>
  );
}

export default RowDetailsM;
