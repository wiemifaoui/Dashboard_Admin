import React, { useEffect, useState } from "react";
import axios from "axios";
import Toaster from "react-hot-toast";
import toast from "react-hot-toast";

import InputGroup from "../components/InputGroup";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ModifierCiruit() {
  const [form, setForm] = useState({});
  const [circuit, setCircuit] = useState([]);
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);

  const [nom_thematique, setnom_thematique] = useState("");
  const [description_thematique, setdescription_thematique] = useState("");
  const [categorie_thematique, setcategorie_thematique] = useState("");
  const [nbr_etape, setnbr_etape] = useState("");
  const [kilometrage, setkilometrage] = useState("");
  const [duree, setduree] = useState("");
  const [depart_longitude_circuit, setdepart_longitude_circuit] = useState("");
  const [depart_latitude_circuit, setdepart_latitude_circuit] = useState("");
  const [img, setimg] = useState("");
  const [video, setvideo] = useState("");

  const [errors, setErrors] = useState({
    nom_thematique: "",
    description_thematique: "",
    categorie_thematique: "",
    nbr_etape: "",
    kilometrage: "",
    duree: "",
    depart_longitude_circuit: "",
    depart_latitude_circuit: "",
    img: "",
    video: "",
  });

  const { id } = useParams();

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
      nom_thematique,
      description_thematique,
      categorie_thematique,
      nbr_etape,
      kilometrage,
      duree,
      depart_longitude_circuit,
      depart_latitude_circuit,
      img,
      video
    );

    try {
      const response = axios
        .put(`http://217.182.207.129:8000/api/v1/thematique/${id}`, form)
        .then((res) => {
          console.log("response===>", response);

          toast.success(" Circuit created Successfully !");

          navigate("/circuit");
        });
    } catch (err) {
      console.log(err);
      toast.error("Failed while Circuit !");
    }
  };

  useEffect(() => {
    const getCircuits = async () => {
      const { data } = await axios.get(
        `http://217.182.207.129:8000/api/v1/thematique/${id}`
      );
      setForm(data);
    };
    getCircuits();
  }, []);

  return (
    <div className=" container col-12 col-lg-4">
      <Toaster />
      <form onSubmit={onSubmitHandler}>
        <h1>Modify circuit</h1>
        <InputGroup
          label="nom_thematique"
          type="text"
          name="nom_thematique"
          errors={errors.nom_thematique}
          onChangeHandler={onChangeHandler}
          value={circuit.nom_thematique}
        />
        <InputGroup
          label="description_thematique"
          type="text"
          name="description_thematique"
          errors={errors.description_thematique}
          onChangeHandler={onChangeHandler}
          value={circuit.description_thematique}
        />
        <InputGroup
          label="categorie_thematique"
          type="text"
          name="categorie_thematique"
          errors={errors.categorie_thematique}
          onChangeHandler={onChangeHandler}
          value={circuit.categorie_thematique}
        />
        <InputGroup
          tGroup
          label="nbr_etape"
          type="text"
          name="nbr_etape"
          errors={errors.nbr_etape}
          onChangeHandler={onChangeHandler}
          value={circuit.nbr_etape}
        />
        <InputGroup
          label="kilometrage"
          type="text"
          name="kilometrage"
          errors={errors.kilometrage}
          value={circuit.kilometrage}
        />
        <InputGroup
          label="duree"
          type="text"
          name="duree"
          errors={errors.duree}
          value={circuit.duree}
        />
        <InputGroup
          label="depart_longitude_circuit"
          type="text"
          name="depart_longitude_circuit"
          errors={errors.depart_longitude_circuit}
          value={circuit.depart_longitude_circuit}
        />
        <InputGroup
          label="depart_latitude_circuit"
          type="text"
          name="depart_latitude_circuit"
          errors={errors.depart_latitude_circuit}
          onChangeHandler={onChangeHandler}
          value={circuit.depart_latitude_circuit}
        />
        <InputGroup
          label="img"
          type="text"
          name="img"
          errors={errors.img}
          onChangeHandler={onChangeHandler}
          value={circuit.img}
        />
        <InputGroup
          label="video"
          type="text"
          name="video,"
          errors={errors.video}
          onChangeHandler={onChangeHandler}
          value={circuit.video}
        />

        <button className="btn btn-primary">Modifier Circuit</button>
      </form>
    </div>
  );
}

export default ModifierCiruit;
