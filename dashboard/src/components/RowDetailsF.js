import React from "react";
import { Link } from "react-router-dom";

function RowDetailsF({
  id,
  message,
  emojie_reaction,
  photoOrVideo,
  utilisateursId,
  OnDelete,
}) {
  return (
    <tr>
      <th>{id}</th>
      <th>{message}</th>
      <th>{emojie_reaction}</th>
      <th>{photoOrVideo}</th>
      <th>{utilisateursId}</th>

      <td class="gap__actions">
        <span class="badge bg-info"></span>
        <span class="badge bg-danger" onClick={() => OnDelete(id)}>
          <i class="fas fa-trash-alt"></i>
        </span>
      </td>
    </tr>
  );
}

export default RowDetailsF;
