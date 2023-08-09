import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ForgetPsw() {
  const [email, setEmail] = useState("");
  const [timer, setTimer] = useState(false);
  const [message, setmessage] = useState("");
  const { id } = useParams();

  // const { email } = user;

  const ForgotPsw = (e) => {
    e.preventDefault();
    console.log("/****forgot*****/");
    if (email === "") {
      setmessage("Saisire Votre Email ");
      setTimer(true);
      setTimeout(() => {
        setTimer(false);
      }, 3000);
    } else {
      axios
        .put(`http://217.182.207.129:8000/api/v1/user/updatePasse/${id}`, {
          email,
        })
        .then((response) => {
          console.log("reponse api : " + response.data.message);
          setmessage(response.data.message);
          setTimer(true);
          setTimeout(() => {
            setTimer(false);
          }, 3000);
          // // alert(err.response.data.message); setTime
          // navigate("/home");
        })
        .catch((err) => {
          console.log(err.response?.data?.message || err.message);
          setmessage(err.response?.data?.message || "contacter admin");
          setTimer(true);
          setTimeout(() => {
            setTimer(false);
          }, 3000);
        });
    }
  };

  return (
    <div className=" container row p-4">
      <section className="login-page" style={{ display: "block" }}>
        <div
          className="warp"
          style={{
            maxWidth: "1540px",
            marginLeft: "auto",
            marginLight: " 50px",
            paddingLeft: "40px",
            paddingLight: "20px",
            marginRight: "13rem",
          }}
        >
          <div
            className="intro"
            style={{
              paddingTop: "8rem",
              paddingRight: " 50px",
              paddingBottom: "50px",
              paddingLeft: "0.1rem",
            }}
          >
            <h1>Mot de passe réinitialisé</h1>
          </div>
          {message && timer && (
            <div class="alert alert-outline-success " role="alert">
              <p>{message}</p>
            </div>
          )}
          <div className="panels cfx" style={{ width: " 100%" }}>
            <div
              className="panel"
              style={{ width: "50%", float: "left", paddingRight: " 10px" }}
            >
              <div
                className="panel__inr"
                style={{
                  backgroundColor: "white",
                  padding: "40px",
                }}
              >
                <form onSubmit={ForgotPsw}>
                  <label className="form-label">E-mail</label>
                  <span className="req-star"> *</span>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <br />
                  <button type="submit" className="btn btn-primary">
                    Réinitialiser le mot de passe
                  </button>{" "}
                  <br />
                </form>{" "}
              </div>
            </div>

            <div className="panel" style={{ width: "50%", float: " left" }}>
              <div
                className="panel__inr"
                style={{ backgroundColor: "white", padding: "40px" }}
              >
                <h3 style={{ color: "#ff7900" }}> Mot de passe réinitialisé</h3>
                <p>
                  Veuillez saisir votre adresse e-mail et nous vous enverrons
                  des instructions pour réinitialiser votre mot de passe.{" "}
                </p>
                <p style={{ color: "#ff7900" }}>Première visite ?</p>
                <p>
                  Veuillez compléter un court formulaire d'inscription pour
                  créer un compte et obtenir l'accès à ce site.{" "}
                </p>

                <Link to="/register" type="button" className="btn btn-secondary">
                  S'inscrire
                </Link>
              </div>
            </div>
          </div>
        </div>
        <nav aria-label="Back to top" className="back-to-top">
          <a
            href="#top"
            className="back-to-top-link btn btn-icon btn-secondary"
            title="Back to top"
          >
            <span className="visually-hidden">Back to top</span>
          </a>
        </nav>
      </section>
    </div>
  );
}
