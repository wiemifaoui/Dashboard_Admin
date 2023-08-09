import React, { useEffect, useState } from "react";
import axios from "axios";
import InputGroup from "../components/InputGroup";
import { useNavigate, useParams } from "react-router-dom";

function Details() {
  const [form, setForm] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  /* add new user */
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://217.182.207.129:8000/api/v1/user/${id}`, form)
      .then((res) => {
        navigate("/user");
      })
      .catch((err) => setErrors(err.response.data));
  };

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(
        `http://217.182.207.129:8000/api/v1/user/${id}`
      );
      setForm(data);
    };
    getUsers();
  }, []);

  return (
    <div className=" container col-12 col-lg-4">
      <form onSubmit={onSubmitHandler}>
        <h1>Modify user</h1>
        <InputGroup
          label="FirstName"
          type="text"
          name="nom_utilisateur"
          onChangeHandler={onChangeHandler}
          errors={errors.nom_utilisateur}
          value={form.nom_utilisateur}
        />
        <InputGroup
          label="LastName"
          type="text"
          name="prenom_utilisateur"
          onChangeHandler={onChangeHandler}
          errors={errors.prenom_utilisateur}
          value={form.prenom_utilisateur}
        />
        <InputGroup
          label="Email"
          type="email"
          name="email_utilisateur"
          onChangeHandler={onChangeHandler}
          errors={errors.email_utilisateur}
          value={form.email_utilisateur}
        />
        <InputGroup
          label="Password"
          type="password"
          name="password_utilisateur"
          onChangeHandler={onChangeHandler}
          errors={errors.password_utilisateur}
          value={form.password_utilisateur}
        />
        <InputGroup
          label="Paye"
          type="text"
          name="pseudo"
          onChangeHandler={onChangeHandler}
          errors={errors.pseudo}
          value={form.pseudo}
        />
        <InputGroup
          label="Region"
          type="text"
          name="ville_utilisateur"
          onChangeHandler={onChangeHandler}
          errors={errors.ville_utilisateur}
          value={form.ville_utilisateur}
        />
        <button className="btn btn-primary" type="submit">
          Modifier user
        </button>
      </form>
    </div>
  );
}

export default Details;
