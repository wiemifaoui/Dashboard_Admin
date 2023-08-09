import React from "react";
import { Link } from "react-router-dom";

function RowDetailsP({
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
  OnDelete,
}) {
  return (
    <tr>
      <th>{id}</th>
      <th>{nom_partenaire}</th>
      <th>{adresse_partenaire}</th>
      <th>{categorie_partenaire}</th>
      <th>{telephone_partenaire}</th>
      <th>{statut_partenaire}</th>
      <th>{heure_ete_partenaire}</th>
      <th>{heure_hiver_partenaire}</th>
      <th>{latitude_partenaire}</th>
      <th>{longitude_partenaire}</th>
      <th>{description_partenaire}</th>

      <td class="gap__actions">
        <span class="badge bg-info">
          <Link to={`partenaire/${id}`} className="text-white">
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

export default RowDetailsP;
