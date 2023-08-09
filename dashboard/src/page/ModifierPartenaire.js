import React, { useEffect, useState } from "react";
import axios from "axios";
import Toaster from "react-hot-toast";
import toast from "react-hot-toast";

import InputGroup from "../components/InputGroup";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ModifierPartenaire() {
  const [form, setForm] = useState({});
  const [partenaire, setPartenaire] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);

  const [nom_partenaire, setnom_partenaire] = useState("");
  const [adresse_partenaire, setadresse_partenaire] = useState("");
  const [categorie_partenaire, setcategorie_partenaire] = useState("");
  const [telephone_partenaire, settelephone_partenaire] = useState("");
  const [statut_partenaire, setstatut_partenaire] = useState("");
  const [heure_ete_partenaire, setheure_ete_partenaire] = useState("");
  const [heure_hiver_partenaire, setheure_hiver_partenaire] = useState("");
  const [latitude_partenaire, setlatitude_partenaire] = useState("");
  const [longitude_partenaire, setlongitude_partenaire] = useState("");
  const [description_partenaire, setdescription_partenairee] = useState("");

  const [errors, setErrors] = useState({
    nom_partenaire: "",
    adresse_partenaire: "",
    categorie_partenaire: "",
    telephone_partenaire: "",
    statut_partenaire: "",
    heure_ete_partenaire: "",
    heure_hiver_partenaire: "",
    latitude_partenaire: "",
    longitude_partenaire: "",
    description_partenaire: "",
  });

  const formValidation = () => {
    let status = true;

    let localErrors = {
      nom_partenaire: "",
      adresse_partenaire: "",
      categorie_partenaire: "",
      telephone_partenaire: "",
      statut_partenaire: "",
      heure_ete_partenaire: "",
      heure_hiver_partenaire: "",
      latitude_partenaire: "",
      longitude_partenaire: "",
      description_partenaire: "",
    };
    if (message === "") {
      localErrors.nom_partenaire = "nom_partenaire required";
      status = false;
    }
    if (adresse_partenaire === "") {
      localErrors.adresse_partenaire = "adresse_partenaire required";
      status = false;
    }

    if (telephone_partenaire === "") {
      localErrors.telephone_partenaire = "telephone_partenaire required";
      status = false;
    }
    if (statut_partenaire === "") {
      localErrors.statut_partenaire = "statut_partenaire required";
      status = false;
    }
    if (heure_ete_partenaire === "") {
      localErrors.heure_ete_partenaire = "heure_ete_partenaire required";
      status = false;
    }
    if (heure_hiver_partenaire === "") {
      localErrors.heure_hiver_partenaire = "heure_hiver_partenaire required";
      status = false;
    }
    if (categorie_partenaire === "") {
      localErrors.categorie_partenaire = "categorie_partenaire required";
      status = false;
    }
    if (latitude_partenaire === "") {
      localErrors.latitude_partenaire = "latitude_partenaire required";
      status = false;
    }
    if (longitude_partenaire === "") {
      localErrors.longitude_partenaire = "longitude_partenaire required";
      status = false;
    }
    if (description_partenaire === "") {
      localErrors.description_partenaire = "description_partenaire required";
      status = false;
    }

    setErrors(localErrors);
    //console.log(localErrors)
    return status;
  };

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("form submited");
    console.log(
      "form data",

      nom_partenaire,
      adresse_partenaire,
      categorie_partenaire,
      telephone_partenaire,
      statut_partenaire,
      heure_ete_partenaire,
      heure_hiver_partenaire,
      latitude_partenaire,
      longitude_partenaire,
      description_partenaire
    );
    if (formValidation()) {
      //form valid
      const data = {
        nom_partenaire: nom_partenaire,
        adresse_partenaire: adresse_partenaire,
        categorie_partenaire: categorie_partenaire,
        telephone_partenaire: telephone_partenaire,
        statut_partenaire: statut_partenaire,
        heure_ete_partenaire: heure_ete_partenaire,
        heure_hiver_partenaire: heure_hiver_partenaire,
        latitude_partenaire: latitude_partenaire,
        longitude_partenaire: longitude_partenaire,
        description_partenaire: description_partenaire,
      };

      try {
        const response = axios
          .put(`http://217.182.207.129:8000/api/v1/partenaire/${id}`, form)
          .then((res) => {
            console.log("response===>", response);

            toast.success(" Partenaire created Successfully !");
            nom_partenaire("");
            adresse_partenaire("");
            categorie_partenaire("");
            telephone_partenaire("");
            statut_partenaire("");
            heure_ete_partenaire("");
            heure_hiver_partenaire("");
            latitude_partenaire("");
            longitude_partenaire("");
            description_partenaire("");

            navigate("/partenaire");

            /* hide  after save */
            setForm({});
            /* hide  after save */
            setForm({});

            /* hide errors after save */
            setErrors({});
            setShow(true);
            setTimeout(() => {
              setShow(false);
            }, 4000);
            navigate("/partenaire");
          });
      } catch (err) {
        console.log(err);
        toast.error("Failed while partenaire !");
      }
    } else {
      console.log("form invalid");
    }
  };

  useEffect(() => {
    const getPartenaire = async () => {
      const { data } = await axios.get(
        `http://217.182.207.129:8000/api/v1/partenaire/${id}`
      );
      setForm(data);
    };
    getPartenaire();
  }, []);

  return (
    <div className=" container col-12 col-lg-4">
      <form onSubmit={onSubmitHandler}>
        <h1>Modify partenaire</h1>

        <InputGroup
          label="nom_partenaire"
          type="text"
          name="nom_partenaire"
          errors={errors.nom_partenaire}
          onChangeHandler={onChangeHandler}
          value={partenaire.nom_partenaire}
        />
        <InputGroup
          label="adresse_partenaire"
          type="text"
          name="adresse_partenaire"
          errors={errors.adresse_partenaire}
          onChangeHandler={onChangeHandler}
          value={partenaire.adresse_partenaire}
        />
        <InputGroup
          label="categorie_partenaire"
          type="text"
          name="categorie_partenaire"
          errors={errors.categorie_partenaire}
          onChangeHandler={onChangeHandler}
          value={partenaire.categorie_partenaire}
        />
        <InputGroup
          tGroup
          label="telephone_partenaire"
          type="text"
          name="telephone_partenaire"
          errors={errors.telephone_partenaire}
          onChangeHandler={onChangeHandler}
          value={partenaire.telephone_partenaire}
        />
        <InputGroup
          tGroup
          label="statut_partenaire"
          type="text"
          name="statut_partenaire"
          errors={errors.statut_partenaire}
          onChangeHandler={onChangeHandler}
          value={partenaire.statut_partenaire}
        />
        <InputGroup
          tGroup
          label="heure_ete_partenaire"
          type="text"
          name="heure_ete_partenaire"
          errors={errors.heure_ete_partenaire}
          onChangeHandler={onChangeHandler}
          value={partenaire.heure_ete_partenaire}
        />
        <InputGroup
          tGroup
          label="heure_hiver_partenaire"
          type="text"
          name="heure_hiver_partenaire"
          errors={errors.heure_hiver_partenaire}
          onChangeHandler={onChangeHandler}
          value={partenaire.heure_hiver_partenaire}
        />
        <InputGroup
          tGroup
          label="latitude_partenaire"
          type="text"
          name="latitude_partenaire"
          errors={errors.latitude_partenaire}
          onChangeHandler={onChangeHandler}
          value={partenaire.latitude_partenaire}
        />
        <InputGroup
          tGroup
          label="longitude_partenaire"
          type="text"
          name="longitude_partenaire"
          errors={errors.longitude_partenaire}
          onChangeHandler={onChangeHandler}
          value={partenaire.longitude_partenaire}
        />
        <InputGroup
          tGroup
          label="description_partenaire"
          type="text"
          name="description_partenaire"
          errors={errors.description_partenaire}
          onChangeHandler={onChangeHandler}
          value={partenaire.description_partenaire}
        />

        <button className="btn btn-primary">Modifier Partenaire</button>
      </form>
    </div>
  );
}

export default ModifierPartenaire;
