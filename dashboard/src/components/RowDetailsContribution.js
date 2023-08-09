import React from "react";
import { Link } from "react-router-dom";

function RowDetailsContribution({
  id,
  text_contribution,
  image_importe,
  image_capture,
  pdfFile,
  validation,

  OnDelete,
}) {
  return (
    <tr>
      <th>{id}</th>
      <th>{text_contribution}</th>
      <th>{image_importe}</th>
      <th>{image_capture}</th>
      <th>{pdfFile}</th>
      <th>{validation}</th>

      <td class="gap__actions">
        <span class="badge bg-info"></span>

        <span class="badge bg-danger" onClick={() => OnDelete(id)}>
          <i class="fas fa-trash-alt"></i>
        </span>
      </td>
    </tr>
  );
}

export default RowDetailsContribution;
