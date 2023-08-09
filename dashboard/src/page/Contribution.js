import React, { useEffect, useState } from "react";
import axios from "axios";
import RowDetailsContribution from "../components/RowDetailsContribution";
import { Link } from "react-router-dom";

function Contribution() {
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);
  const [contribution, setContribution] = useState([]);
  /* find all Contribution */
  useEffect(() => {
    const getContributions = async () => {
      const { data } = await axios.get(
        "http://217.182.207.129:8000/api/v1/contributions "
      );
      setContribution(data);
    };
    getContributions();
  });

  /* delete */
  const OnDelete = (id) => {
    if (window.confirm("are you sure to delete this contribution")) {
      axios
        .delete(`http://217.182.207.129:8000/api/v1/contribution/${id}`)
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
              <Link to="/AddContribution">AddContribution</Link>
            </button>

            <h1>List Contribution</h1>
          </div>

          <div className=" table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">text_contribution</th>
                  <th scope="col">image_importe</th>
                  <th scope="col">image_capture</th>
                  <th scope="col">pdfFile</th>
                  <th scope="col">validation</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contribution.map(
                  ({
                    id,
                    text_contribution,
                    image_importe,
                    image_capture,
                    pdfFile,
                    validation,
                    UtilisateurId,
                  }) => (
                    <RowDetailsContribution
                      id={id}
                      text_contribution={text_contribution}
                      image_importe={image_importe}
                      image_capture={image_capture}
                      pdfFile={pdfFile}
                      validation={validation}
                      UtilisateurId={UtilisateurId}
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

export default Contribution;
