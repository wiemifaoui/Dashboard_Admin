import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SideNav from "./components/SideNav";
import Register from "./components/Register";
import Contribution from "./page/Contribution";
import Circuit from "./page/Circuit";
import Feedback from "./page/Feedback";
import Monument from "./page/Monument";

import { Button } from "antd";
import NoAccess from "./components/NoAccess";
import "antd/dist/reset.css";
import { Table, Modal, Input } from "antd";
import "./App.css";

import NotFound from "./components/NotFound";
import AddMonument from "./components/AddMonument";

import Profile from "./page/Profile";

import Test from "./Test";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import AdminRouter from "./components/AdminRouter";
import PrivateRouter from "./components/PrivateRouter";
import ForceRedirect from "./components/ForceRedirect";
import User from "./page/User";
import Details from "./page/Details";
import ModifierMonument from "./page/ModifierMonument";
import ModifierCiruit from "./page/ModifierCircuit";
import ModifierContribution from "./page/ModifierContribution";
import AddPartenaire from "./components/AddPartenaire";

import AddCircuit from "./components/AddCircuit";
import AddFeedback from "./components/AddFeedback";
import ModifierFeedback from "./page/ModifierFeedback";
import AddContribution from "./components/AddContribution";
import Partenaire from "./page/Partenaire";
import Fichier from "./page/Fichier";
import ModifierPartenaire from "./page/ModifierPartenaire";
import AddUser from "./components/AddUser";

function App() {
  const user = {
    isConnected: false,

    role: "ADMIN",
  };

  return (
    <Router>
      <Routes></Routes>

      <Header />

      <SideNav />

      <Routes>
        <Route
          exact
          path="/login"
          element={
            <ForceRedirect user={user}>
              <Login />
            </ForceRedirect>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <ForceRedirect user={user}>
              <Register />
            </ForceRedirect>
          }
        />
        <Route exact path="" element={<Home />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/fichier" element={<Fichier />} />

        <Route exact path="user/user/:id" element={<Details />} />
        <Route
          exact
          path="monument/monument/:id"
          element={<ModifierMonument />}
        />
        <Route exact path="circuit/circuit/:id" element={<ModifierCiruit />} />
        <Route exact path="/adduser" element={<AddUser />} />
        <Route exact path="/addmonument" element={<AddMonument />} />
        <Route exact path="/addcircuit" element={<AddCircuit />} />
        <Route exact path="/addpartenaire" element={<AddPartenaire />} />
        <Route
          exact
          path="partenaire/partenaire/:id"
          element={<ModifierPartenaire />}
        />
        <Route
          exact
          path="feedback/feedback/:id"
          element={<ModifierFeedback />}
        />

        <Route
          path="/profile"
          element={
            <AdminRouter user={user}>
              <User />
            </AdminRouter>
          }
        />
        <Route path="/monument" element={<Monument />} />

        <Route exact path="/circuit" element={<Circuit />} />
        <Route exact path="/contribution" element={<Contribution />} />
        <Route exact path="/partenaire" element={<Partenaire />} />

        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/addfeedback" element={<AddFeedback />} />
        {/* <Route
          exact
          path="feedback/feedback/:id"
          element={<ModifierFeedback />}
        /> */}
        <Route
          exact
          path="/contribution/contribution/:id"
          element={<ModifierContribution />}
        />
        <Route exact path="/addcontribution" element={<AddContribution />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/noaccess" element={<NoAccess />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
