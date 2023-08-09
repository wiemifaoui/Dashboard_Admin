import toast, { Toaster } from "react-hot-toast";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserService from "../Services/UserService";
import { Link } from "react-router-dom";

const options = [
  {
    label: "Afghanistan",
    value: "Afghanistan",
  },
  {
    label: "Afrique du Sud",
    value: "Afrique du Sud",
  },
  {
    label: "Albanie",
    value: "Albanie",
  },
  {
    label: "Algérie",
    value: "Algérie",
  },

  {
    label: "Allemagne",
    value: "Allemagne",
  },
  {
    label: "Ancienne République yougoslave de Macédoine",
    value: "Ancienne République yougoslave de Macédoine",
  },
  {
    label: "Andorre",
    value: "Andorre",
  },
  {
    label: "Angola",
    value: "Angola",
  },
  {
    label: "Anguilla",
    value: "Anguilla",
  },
  {
    label: "Antarctique",
    value: "Antarctique",
  },
  {
    label: "Antigua-et-Barbuda",
    value: "Antigua-et-Barbuda",
  },
  {
    label: "Antilles néerlandaises",
    value: "Antilles néerlandaises",
  },
  {
    label: "Arabie saoudite",
    value: "Arabie saoudite",
  },
  {
    label: "Argentine",
    value: "Argentine",
  },
  {
    label: "Arménie",
    value: "Arménie",
  },
  {
    label: "Aruba",
    value: "Aruba",
  },
  {
    label: "Australie",
    value: "Australie",
  },
  {
    label: "Autriche",
    value: "Autriche",
  },
  {
    label: "Azerbaïdjan",
    value: "Azerbaïdjan",
  },
  {
    label: "Bahamas",
    value: "Bahamas",
  },
  {
    label: "Bahreïn",
    value: "Bahreïn",
  },
  {
    label: "Bangladesh",
    value: "Bangladesh",
  },
  {
    label: "Barbade",
    value: "Barbade",
  },
  {
    label: "Belgique",
    value: "Belgique",
  },
  {
    label: "Belize",
    value: "Belize",
  },
  {
    label: "Bénin",
    value: "Bénin",
  },
  {
    label: "Bermudes",
    value: "Bermudes",
  },
  {
    label: "Bhoutan",
    value: "Bhoutan",
  },
  {
    label: "Biélorussie",
    value: "Biélorussie",
  },
  {
    label: "Bolivie",
    value: "Bolivie",
  },
  {
    label: "Bosnie-et-Herzégovine",
    value: "Bosnie-et-Herzégovine",
  },
  {
    label: "Botswana",
    value: "Botswana",
  },
  {
    label: "Brésil",
    value: "Brésil",
  },
  {
    label: "Brunei Darussalam",
    value: "Brunei Darussalam",
  },
  {
    label: "Bulgarie",
    value: "Bulgarie",
  },
  {
    label: "Burkina Faso",
    value: "Burkina Faso",
  },
  {
    label: "Burundi",
    value: "Burundi",
  },
  {
    label: "Cambodge",
    value: "Cambodge",
  },
  {
    label: "Cameroun",
    value: "Cameroun",
  },
  {
    label: "Canada",
    value: "Canada",
  },
  {
    label: "Cap-Vert",
    value: "Cap-Vert",
  },
  {
    label: "Chili",
    value: "Chili",
  },
  {
    label: "Chine",
    value: "Chine",
  },
  {
    label: "Chypre",
    value: "Chypre",
  },
  {
    label: "Colombie",
    value: "Colombie",
  },
  {
    label: "Comores",
    value: "Comores",
  },
  {
    label: "Congo",
    value: "Congo",
  },
  {
    label: "Costa Rica",
    value: "Costa Rica",
  },
  {
    label: "Côte d'Ivoire",
    value: "Côte d'Ivoire",
  },
  {
    label: "Croatie",
    value: "Croatie",
  },
  {
    label: "Cuba",
    value: "Cuba",
  },
  {
    label: "Danemark",
    value: "Danemark",
  },
  {
    label: "Djibouti",
    value: "Djibouti",
  },
  {
    label: "Dominique",
    value: "Dominique",
  },
  {
    label: "Égypte",
    value: "Égypte",
  },
  {
    label: "El Salvador",
    value: "El Salvador",
  },
  {
    label: "Émirats arabes unis",
    value: "Émirats arabes unis",
  },
  {
    label: "Équateur",
    value: "Équateur",
  },
  {
    label: "Érythrée",
    value: "Érythrée",
  },
  {
    label: "Espagne",
    value: "Espagne",
  },
  {
    label: "Estonie",
    value: "Estonie",
  },
  {
    label: "États fédérés de Micronésie",
    value: "États fédérés de Micronésie",
  },
  {
    label: "États-Unis",
    value: "États-Unis",
  },
  {
    label: "Éthiopie",
    value: "Éthiopie",
  },
  {
    label: "Fidji",
    value: "Fidji",
  },
  {
    label: "Finlande",
    value: "Finlande",
  },
  {
    label: "France",
    value: "France",
  },
  {
    label: "Gabon",
    value: "Gabon",
  },
  {
    label: "Bénin",
    value: "Bénin",
  },
  {
    label: "Gambie",
    value: "Gambie",
  },
  {
    label: "Géorgie",
    value: "Géorgie",
  },
  {
    label: "Ghana",
    value: "Ghana",
  },
  {
    label: "Gibraltar",
    value: "Gibraltar",
  },
  {
    label: "Grèce",
    value: "Grèce",
  },
  {
    label: "Grenade",
    value: "Grenade",
  },
  {
    label: "Groenland",
    value: "Groenland",
  },
  {
    label: "Guadeloupe",
    value: "Guadeloupe",
  },
  {
    label: "Guam",
    value: "Guam",
  },
  {
    label: "Guatemala",
    value: "Guatemala",
  },
  {
    label: "Guinée",
    value: "Guinée",
  },
  {
    label: "Guinée équatoriale",
    value: "Guinée équatoriale",
  },
  {
    label: "Guinée-Bissau",
    value: "Guinée-Bissau",
  },
  {
    label: "Guyane",
    value: "Guyane",
  },
  {
    label: "Guyane française",
    value: "Guyane française",
  },
  {
    label: "Haïti",
    value: "Haïti",
  },
  {
    label: "Honduras",
    value: "Honduras",
  },
  {
    label: "Hong Kong",
    value: "Hong Kong",
  },

  {
    label: "Hongrie",
    value: "Hongrie",
  },
  {
    label: "Ile Bouvet",
    value: "Ile Bouvet",
  },
  {
    label: "Ile Christmas",
    value: "Ile Christmas",
  },
  {
    label: "Île Norfolk",
    value: "Île Norfolk",
  },
  {
    label: "Île Pitcairn",
    value: "Île Pitcairn",
  },
  {
    label: "Iles Aland",
    value: "Iles Aland",
  },
  {
    label: "Iles Cayman",
    value: "Iles Cayman",
  },
  {
    label: "Iles Cocos (Keeling)",
    value: "Iles Cocos (Keeling)",
  },
  {
    label: "Iles Cook",
    value: "Iles Cook",
  },
  {
    label: "Îles Féroé",
    value: "Îles Féroé",
  },
  {
    label: "Îles Heard-et-MacDonald",
    value: "Îles Heard-et-MacDonald",
  },
  {
    label: "Îles Malouines",
    value: "Îles Malouines",
  },
  {
    label: "Îles Mariannes du Nord",
    value: "Îles Mariannes du Nord",
  },
  {
    label: "Îles Marshall",
    value: "Îles Marshall",
  },
  {
    label: "Îles mineures éloignées des États-Unis",
    value: "Îles mineures éloignées des États-Unis",
  },
  {
    label: "Îles Salomon",
    value: "Îles Salomon",
  },
  {
    label: "Îles Turques-et-Caïques",
    value: "Îles Turques-et-Caïques",
  },
  {
    label: "Îles Vierges britanniques",
    value: "Îles Vierges britanniques",
  },
  {
    label: "Îles Vierges des États-Unis",
    value: "Îles Vierges des États-Unis",
  },
  {
    label: "Inde",
    value: "Inde",
  },
  {
    label: "Indonésie",
    value: "Indonésie",
  },
  {
    label: "Iraq",
    value: "Iraq",
  },
  {
    label: "Irlande",
    value: "Irlande",
  },
  {
    label: "Islande",
    value: "Islande",
  },
  {
    label: "Italie",
    value: "Italie",
  },
  {
    label: "Jamahiriya arabe libyenne",
    value: "Jamahiriya arabe libyenne",
  },
  {
    label: "Jamaïque",
    value: "Jamaïque",
  },
  {
    label: "Japon",
    value: "Japon",
  },
  {
    label: "Jordanie",
    value: "Jordanie",
  },
  {
    label: "Kazakhstan",
    value: "Kazakhstan",
  },
  {
    label: "Kenya",
    value: "Kenya",
  },
  {
    label: "Kirghizistan",
    value: "Kirghizistan",
  },
  {
    label: "Kiribati",
    value: "Kiribati",
  },
  {
    label: "Koweït",
    value: "Koweït",
  },
  {
    label: "Lesotho",
    value: "Lesotho",
  },
  {
    label: "Lettonie",
    value: "Lettonie",
  },
  {
    label: "Liban",
    value: "Liban",
  },
  {
    label: "Libéria",
    value: "Libéria",
  },
  {
    label: "Liechtenstein",
    value: "Liechtenstein",
  },
  {
    label: "Lituanie",
    value: "Lituanie",
  },
  {
    label: "Luxembourg",
    value: "Luxembourg",
  },
  {
    label: "Macao",
    value: "Macao",
  },
  {
    label: "Madagascar",
    value: "Madagascar",
  },
  {
    label: "Malaisie",
    value: "Malaisie",
  },
  {
    label: "Malawi",
    value: "Malawi",
  },

  {
    label: "Maldives",
    value: "Maldives",
  },
  {
    label: "Mali",
    value: "Mali",
  },
  {
    label: "Malte",
    value: "Malte",
  },
  {
    label: "Maroc",
    value: "Maroc",
  },
  {
    label: "Martinique",
    value: "Martinique",
  },

  {
    label: "Maurice",
    value: "Maurice",
  },
  {
    label: "Mauritanie",
    value: "Mauritanie",
  },
  {
    label: "Mayotte",
    value: "Mayotte",
  },
  {
    label: "Mexique",
    value: "Mexique",
  },
  {
    label: "Monaco",
    value: "Monaco",
  },
  {
    label: "Mongolie",
    value: "Mongolie",
  },
  {
    label: "Montserrat",
    value: "Montserrat",
  },
  {
    label: "Mozambique",
    value: "Mozambique",
  },
  {
    label: "Myanmar",
    value: "Myanmar",
  },
  {
    label: "Namibie",
    value: "Namibie",
  },
  {
    label: "Nauru",
    value: "Nauru",
  },
  {
    label: "Népal",
    value: "Népal",
  },
  {
    label: "Nicaragua",
    value: "Nicaragua",
  },
  {
    label: "Niger",
    value: "Niger",
  },
  {
    label: "Nigéria",
    value: "Nigéria",
  },
  {
    label: "Niué",
    value: "Niué",
  },
  {
    label: "Norvège",
    value: "Norvège",
  },
  {
    label: "Nouvelle-Calédonie",
    value: "Nouvelle-Calédonie",
  },
  {
    label: "Nouvelle-Zélande",
    value: "Nouvelle-Zélande",
  },
  {
    label: "Oman",
    value: "Oman",
  },
  {
    label: "Ouganda",
    value: "Ouganda",
  },
  {
    label: "Ouzbékistan",
    value: "Ouzbékistan",
  },
  {
    label: "Pakistan",
    value: "Pakistan",
  },
  {
    label: "Palaos",
    value: "Palaos",
  },
  {
    label: "Panama",
    value: "Panama",
  },
  {
    label: "Papouasie-Nouvelle-Guinée",
    value: "Papouasie-Nouvelle-Guinée",
  },
  {
    label: "Paraguay",
    value: "Paraguay",
  },
  {
    label: "Pays-Bas",
    value: "Pays-Bas",
  },
  {
    label: "Pérou",
    value: "Pérou",
  },
  {
    label: "Philippines",
    value: "Philippines",
  },

  {
    label: "Pologne",
    value: "Pologne",
  },
  {
    label: "Polynésie française",
    value: "Polynésie française",
  },
  {
    label: "Porto Rico",
    value: "Porto Rico",
  },
  {
    label: "Portugal",
    value: "Portugal",
  },
  {
    label: "Province chinoise de Taiwan",
    value: "Province chinoise de Taiwan",
  },

  {
    label: "qatar",
    value: "qatar",
  },
  {
    label: "République arabe syrienne",
    value: "République arabe syrienne",
  },
  {
    label: "République centrafricaine",
    value: "République centrafricaine",
  },
  {
    label: "République de Corée",
    value: "République de Corée",
  },

  {
    label: "République de Moldavie",
    value: "République de Moldavie",
  },
  {
    label: "République démocratique du Congo",
    value: "République démocratique du Congo",
  },
  {
    label: "République dominicaine",
    value: "République dominicaine",
  },
  {
    label: "République islamique d'Iran",
    value: "République islamique d'Iran",
  },
  {
    label: "République populaire démocratique de Corée",
    value: "République populaire démocratique de Corée",
  },

  {
    label: "République Populaire du Laos",
    value: "République Populaire du Laos",
  },
  {
    label: "République tchèque",
    value: "République tchèque",
  },
  {
    label: "République-Unie de Tanzanie",
    value: "République-Unie de Tanzanie",
  },
  {
    label: "Réunion",
    value: "Réunion",
  },
  {
    label: "Roumanie",
    value: "Roumanie",
  },
  {
    label: "Royaume-Uni",
    value: "Royaume-Uni",
  },

  {
    label: "Russie",
    value: "Russie",
  },
  {
    label: "Rwanda",
    value: "Rwanda",
  },
  {
    label: "Sahara occidental",
    value: "Sahara occidental",
  },
  {
    label: "Saint-christophe-et-nieves",
    value: "Saint-christophe-et-nieves",
  },
  {
    label: "Saint-Marin",
    value: "Saint-Marin",
  },
  {
    label: "Saint-Pierre-et-Miquelon",
    value: "Saint-Pierre-et-Miquelon",
  },
  {
    label: "Saint-Siège (Cité du Vatican)",
    value: "Saint-Siège (Cité du Vatican)",
  },
  {
    label: "Saint-Vincent-et-les Grenadines",
    value: "Saint-Vincent-et-les Grenadines",
  },

  {
    label: "Sainte-Hélène",
    value: "Sainte-Hélène",
  },
  {
    label: "Sainte-Lucie",
    value: "Sainte-Lucie",
  },
  {
    label: "Samoa",
    value: "Samoa",
  },
  {
    label: "Samoa américaines",
    value: "Samoa américaines",
  },
  {
    label: "Sao Tomé-et-Principe",
    value: "Sao Tomé-et-Principe",
  },
  {
    label: "Sénégal",
    value: "Sénégal",
  },
  {
    label: "Serbie-et-Monténégro",
    value: "Serbie-et-Monténégro",
  },
  {
    label: "Sierra Leone",
    value: "Sierra Leone",
  },
  {
    label: "Singapour",
    value: "Singapour",
  },
  {
    label: "Slovaquie",
    value: "Slovaquie",
  },
  {
    label: "Slovénie",
    value: "Slovénie",
  },
  {
    label: "Somalie",
    value: "Somalie",
  },

  {
    label: "Soudan",
    value: "Soudan",
  },
  {
    label: "Sri Lanka",
    value: "Sri Lanka",
  },

  {
    label: "Suède",
    value: "Suède",
  },

  {
    label: "Suisse",
    value: "Suisse",
  },

  {
    label: "Suriname",
    value: "Suriname",
  },

  {
    label: "Svalbard et Jan Mayen",
    value: "Svalbard et Jan Mayen",
  },

  {
    label: "Swaziland",
    value: "Swaziland",
  },

  {
    label: "Tadjikistan",
    value: "Tadjikistan",
  },

  {
    label: "Tchad",
    value: "Tchad",
  },

  {
    label: "Territoire britannique de l'océan Indien",
    value: "Territoire britannique de l'océan Indien",
  },

  {
    label: "Territoire Francais du Sud",
    value: "Territoire Francais du Sud",
  },

  {
    label: "Territoires palestiniens occupés",
    value: "Territoires palestiniens occupés",
  },

  {
    label: "Thaïlande",
    value: "Thaïlande",
  },

  {
    label: "Timor oriental",
    value: "Timor oriental",
  },

  {
    label: "Togo",
    value: "Togo",
  },

  {
    label: "Tokelau",
    value: "Tokelau",
  },

  {
    label: "Tonga",
    value: "Tonga",
  },

  {
    label: "Trinité-et-Tobago",
    value: "Trinité-et-Tobago",
  },
  {
    label: "Tunisie",
    value: "Tunisie",
  },

  {
    label: "Turkménistan",
    value: "Turkménistan",
  },

  {
    label: "Turquie",
    value: "Turquie",
  },

  {
    label: "Tuvalu",
    value: "Tuvalu",
  },
  {
    label: "Ukraine",
    value: "Ukraine",
  },

  {
    label: "Uruguay",
    value: "Uruguay",
  },

  {
    label: "Vanuatu",
    value: "Vanuatu",
  },

  {
    label: "Vénézuéla",
    value: "Vénézuéla",
  },

  {
    label: "Vietnam",
    value: "Vietnam",
  },

  {
    label: "Wallis-et-Futuna",
    value: "Wallis-et-Futuna",
  },

  {
    label: "Yémen",
    value: "Yémen",
  },

  {
    label: "Zambie",
    value: "Zambie",
  },

  {
    label: "Zimbabwe",
    value: "Zimbabwe",
  },

  {
    label: "Vénézuéla",
    value: "Vénézuéla",
  },

  {
    label: "Vietnam",
    value: "Vietnam",
  },

  {
    label: "Wallis-et-Futuna",
    value: "Wallis-et-Futuna",
  },
];

function Register() {
  const navigate = useNavigate();

  const [nom_utilisateur, setNom_utilisateur] = useState("");
  const [prenom_utilisateur, setPrenon_utilisateur] = useState("");
  const [email_utilisateur, setEmail_utilisateur] = useState("");
  const [password_utilisateur, setPassword_utilisateur] = useState("");
  const [ville_utilisateur, SetVille_utilisateur] = useState("");
  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const lowercaseRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
  const minLengthRegExp = /.{8,}/;
  const passwordLength = password_utilisateur.length;
  const uppercasePassword = uppercaseRegExp.test(password_utilisateur);
  const lowercasePassword = lowercaseRegExp.test(password_utilisateur);
  const digitsPassword = digitsRegExp.test(password_utilisateur);
  const specialCharPassword = specialCharRegExp.test(password_utilisateur);
  const minLengthPassword = minLengthRegExp.test(password_utilisateur);
  const [errors, setErrors] = useState({
    nom_utilisateur: "",
    prenom_utilisateur: "",
    email_utilisateur: "",
    password_utilisateur: "",
    pseudo: "",
    ville_utilisateur: "",
  });

  const formValidation = () => {
    let status = true;

    let localErrors = {
      nom_utilisateur: "",
      prenom_utilisateur: "",
      email_utilisateur: "",
      password_utilisateur: "",
      pseudo: "",
      ville_utilisateur: "",
    };
    if (nom_utilisateur === "") {
      localErrors.nom_utilisateur = "First name required";
      status = false;
    }
    if (prenom_utilisateur === "") {
      localErrors.prenom_utilisateur = "Last name required";
      status = false;
    }

    if (email_utilisateur === "") {
      localErrors.email_utilisateur = "Email required";
      status = false;
    }

    if (passwordLength === 0) {
      localErrors.password_utilisateur = "Password is empty";
      status = false;
    } else if (!uppercasePassword) {
      localErrors.password_utilisateur = "At least one Uppercase";
      status = false;
    } else if (!lowercasePassword) {
      localErrors.password_utilisateur = "At least one Lowercase";
      status = false;
    } else if (!digitsPassword) {
      localErrors.password_utilisateur = "At least one digit";
      status = false;
    } else if (!specialCharPassword) {
      localErrors.password_utilisateur = "At least one Special Characters";
      status = false;
    } else if (!minLengthPassword) {
      localErrors.password_utilisateur = "At least minumum 8 characters";
      status = false;
    } else if (
      password_utilisateur === " " ||
      password_utilisateur.length < 8
    ) {
      localErrors.password_utilisateur =
        "Password required and min  caracteres";
      status = false;
    }

    setErrors(localErrors);
    //console.log(localErrors)
    return status;
  };

  const [pseudo, setPseudo] = useState("Tunisie");
  const handleChange = (event) => {
    console.log("Fruit Selected!!");
    //   this.setState({fruit: event.target.value }); //hedhy fi west l classe
    setPseudo(event.target.value); //hedhy fi west lfunction
  };
  //lfonction hedhy kif nenzel 3al boutton yet3ada lil fonction hedhy
  const register = async (e) => {
    e.preventDefault(); //nesta3melha kif nesta3mil submit bch maya3mlch refresh
    console.log("form submited");
    console.log(
      "form data",
      nom_utilisateur,
      prenom_utilisateur,
      email_utilisateur,
      password_utilisateur,
      pseudo,
      ville_utilisateur
    );

    if (formValidation()) {
      //form valid
      const data = {
        nom_utilisateur: nom_utilisateur,
        prenom_utilisateur: prenom_utilisateur,
        email_utilisateur: email_utilisateur,
        password_utilisateur: password_utilisateur,
        pseudo: pseudo,
        ville_utilisateur: ville_utilisateur,
      };

      try {
        const response = await UserService.register(data);
        console.log("response===>", response);
        toast.success(" User created Successfully !");
        setNom_utilisateur("");
        setPrenon_utilisateur("");
        setEmail_utilisateur("");
        setPassword_utilisateur("");
        SetVille_utilisateur("");
        setPseudo("");

        navigate("/login");
      } catch (err) {
        console.log(err);
        toast.error("Failed while signup !");
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
          <h1> Dourbia</h1>
          <p>DourBia application </p>
        </div>
        <form onSubmit={register}>
          <div className="form-group">
            <label>First name</label>
            <input
              className="input"
              type="text"
              value={nom_utilisateur} //houni narbet fil input b esm ili samitou fi state
              onChange={
                (e) => setNom_utilisateur(e.target.value) //lvaleur jdid mta3 nom-utilisateur
              }
            />

            {errors.nom_utilisateur !== " " ? (
              <div style={{ textAlign: "left", color: "orangered" }}>
                {errors.nom_utilisateur}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input
              className="input"
              type="text"
              value={prenom_utilisateur}
              onChange={(e) => setPrenon_utilisateur(e.target.value)}
            />

            {errors.prenom_utilisateur !== " " ? (
              <div style={{ textAlign: "left", color: "orangered" }}>
                {errors.prenom_utilisateur}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="form-group">
            <label>Email</label>
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

          <div id="App">
            <div className="select-container">
              <label>Paye</label>

              <select value={pseudo} onChange={handleChange}>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
              <div className="form-group">
                {pseudo === "Tunisie" ? ( //c'est la boucle if
                  <select
                    value={ville_utilisateur}
                    onChange={(e) => SetVille_utilisateur(e.target.value)}
                  >
                    <option value="Ariana">Ariana</option>
                    <option value="Béja">Béja</option>
                    <option value="Ben Arous">Ben Arous</option>
                    <option value="Bizerte">Bizerte</option>
                    <option value="Gabès">Gabès</option>
                    <option value="Gafsa">Gafsa</option>
                    <option value="Jendouba">Jendouba</option>
                    <option value="Kairouan">Kairouan</option>
                    <option value="Kasserine">Kasserine</option>
                    <option value="Kébili">Kébili</option>

                    <option value="Le Kef">Le Kef</option>
                    <option value="Mahdia">Mahdia</option>
                    <option value="La Manouba">La Manouba</option>
                    <option value="Médenine">Médenine</option>
                    <option value="Monastir">Monastir</option>
                    <option value="Nabeul">Nabeul</option>
                    <option value="Sfax">Sfax</option>
                    <option value="Sidi Bouzid">Sidi Bouzid</option>
                    <option value="Siliana">Siliana</option>

                    <option value="Sousse">Sousse</option>
                    <option value="Tataouine">Tataouine</option>
                    <option value="Tozeur">Tozeur</option>
                    <option value="Tunis">Tunis</option>
                    <option value="Zaghouan">Zaghouan</option>
                  </select>
                ) : null}
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="btn btn-block btn-danger"
            _msttexthash="74763"
            _msthash="172"
          >
            singn up
          </button>
          <Link to="/login">I have account</Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
