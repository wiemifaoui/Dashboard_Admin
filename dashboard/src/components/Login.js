import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import UserService from "../Services/UserService";

const Login = () => {
  const navigate = useNavigate();
  const [email_utilisateur, setEmail_utilisateur] = useState("");
  const [password_utilisateur, setPassword_utilisateur] = useState("");

  const [errors, setErrors] = useState({
    email_utilisateur: "",
    password_utilisateur: "",
  });

  const formValidation = () => {
    let status = true;

    let localErrors = {
      email_utilisateur: "",
      password_utilisateur: "",
    };

    if (email_utilisateur === "") {
      localErrors.email_utilisateur = "Email required";
      status = false;
    }

    if (password_utilisateur === " " || password_utilisateur.length < 8) {
      localErrors.password_utilisateur =
        "Password required and min 8 caracteres";
      status = false;
    }

    setErrors(localErrors);
    //console.log(localErrors)
    return status;
  };

  const login = async (e) => {
    e.preventDefault(); //nesta3melha kif nesta3mil submit bch maya3mlch refresh
    console.log("form submited");
    if (formValidation()) {
      const data = {
        email_utilisateur: email_utilisateur,
        password_utilisateur: password_utilisateur,
      };

      try {
        const response = await UserService.login(data);
        console.log("response===>", response);
        //save user data localstorge

        toast.success(" User login !");

        setEmail_utilisateur("");
        setPassword_utilisateur("");

        navigate("/user");
      } catch (err) {
        console.log(err);
        toast.error(err.response.data.message);
      }
    } else {
      console.log("form invalid");
    }
  };

  return (
    <div className="register">
      <Toaster />
      <div className="register-cover"></div>
      <div className="register-content">
        <div>
          <h1>Dourbia</h1>
          <p>DourBia application </p>
        </div>

        <form onSubmit={login}>
          <div className="form-group">
            <label>email</label>
            <input
              className="input"
              type="email"
              value={email_utilisateur}
              onChange={(e) => setEmail_utilisateur(e.target.value)}
            />
            {errors.email_utilisateur !== " " ? (
              <div style={{ textAlign: "left", color: "orangered" }}>
                {errors.email_utilisateur}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="input"
              type="password"
              value={password_utilisateur}
              onChange={(e) => setPassword_utilisateur(e.target.value)}
            />
            {errors.password_utilisateur !== " " ? (
              <div style={{ textAlign: "left", color: "orangered" }}>
                {errors.password_utilisateur}
              </div>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            class="btn btn-block btn-danger"
            _msttexthash="74763"
            _msthash="172"
          >
            singnin
          </button>
          <Link to="/register">I don't have account</Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
