import React from "react";
import { Link } from "react-router-dom";
import ReadMore from "./ReadMore";

function RowDetailsC({
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
  OnDelete,
}) {
  return (
    <tr>
      <th>{id}</th>
      <th>{nom_thematique}</th>
      <th>
        <ReadMore text={description_thematique} />
      </th>
      <th>{categorie_thematique}</th>
      <th>{nbr_etape}</th>
      <th>{kilometrage}</th>
      <th>{duree}</th>
      <th>{depart_longitude_circuit}</th>
      <th>{depart_latitude_circuit}</th>
      <th>
        <img
          src={img}
          style={{
            height: 256,
            width: 256,
            borderRadius: 10,
          }}
          alt="img"
        />
      </th>
      <th>{video}</th>
      <th>{createdAt}</th>
      <th>{updatedAt}</th>
      <td class="gap__actions">
        <span class="badge bg-info">
          <Link to={`circuit/${id}`} className="text-white">
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

export default RowDetailsC;
