import React from "react";
import { Link } from "react-router-dom";
import ReadMore from "./ReadMore";

function RowDetails({
  id,
  nom_utilisateur,
  prenom_utilisateur,
  email_utilisateur,
  password_utilisateur,
  pseudo,
  ville_utilisateur,
  OnDelete,
}) {
  return (
    <tr>
      <th>{id}</th>
      <th>{nom_utilisateur}</th>
      <td>{prenom_utilisateur}</td>
      <td>{email_utilisateur}</td>
      <td>
        {" "}
        <ReadMore text={password_utilisateur} maxx={5} />
      </td>
      <td>{pseudo}</td>
      <td>{ville_utilisateur}</td>

      <td className="gap__actions">
        <span className="badge bg-info">
          <Link to={`user/${id}`} className="text-white">
            <i className="fas fa-edit"></i>
          </Link>
        </span>
        <span className="badge bg-danger" onClick={() => OnDelete(id)}>
          <i className="fas fa-trash-alt" />
        </span>
      </td>
    </tr>
  );
}

export default RowDetails;
