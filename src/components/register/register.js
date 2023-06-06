import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import Lower from "../../img/registe.svg";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as registerActions from "../../store/register/actions";
function Register() {
  const [firstName, setFisrtname] = useState("");
  const [lastName, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [ville, setVille] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");

  function formSubmit() {
    console.warn(firstName, lastName, address, ville, city, phone, email);
    let data = { firstName, lastName, address, ville, city, phone, email };
    fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      // console.warn("result", result);
      result.json().then((response) => {
        console.warn("response", response);
      });
    });
  }
  return (
    <div className="component-register">
      <div className="container-content">
        <div className="forms-container-register">
          <div className="signin-signup">
            <form action="#" className="sign-up-form" onSubmit={formSubmit}>
              <h2 className="title">Créer un nouveau compte</h2>
              <div className="row">
                <div className="col-md-6 input-field-name">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Nom"
                    value={firstName}
                    name="firstName"
                    onChange={(e) => setFisrtname(e.target.value)}
                  />
                </div>
                <div className="col-md-6 input-field-name">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="prenom"
                    value={lastName}
                    name="lastName"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="adresse"
                  value={address}
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="d-flex">
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control "
                    placeholder="ville"
                    aria-label="ville"
                    value={ville}
                    name="ville"
                    onChange={(e) => setVille(e.target.value)}
                  />
                </div>
                <div class="col-sm">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="pays"
                    aria-label="State"
                    value={city}
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="input-field">
                <i className="fas fa-phone"></i>
                <input
                  type="number"
                  placeholder="Telephone"
                  value={phone}
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Confirm Password" />
              </div>
              {/* <Link to="/"> */}
              <button className="btn-log inscription">s'inscrire</button>
              {/* </Link> */}
              {/* <p className="social-text">Or Sign up with social platforms</p> */}
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="">
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Vous avez déjà votre compte ?</h3>
              <p>Cliquez sur le bouton !</p>
              <Link to="/login">
                <button
                  type="submit"
                  className="btn-log transparent"
                  id="sign-up-btn"
                >
                  se connecter
                </button>
              </Link>
            </div>
            <img src={Lower} className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
// export default connect(
//     ({ register }) => ({ ...register }),
//     dispatch => bindActionCreators({ ...registerActions }, dispatch)
//   )( register );
