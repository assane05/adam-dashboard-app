import React, { Component } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import Lower from "../../img/registe.svg";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as registerActions from "../../store/register/actions";
export default class register extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  render() {
    return (
      <div className="component-register">
        <div className="container-content">
          <div className="forms-container-register">
            <div className="signin-signup">
              <form action="#" className="sign-up-form">
                <h2 className="title">Créer un nouveau compte</h2>
                <div className="row">
                  <div className="col-md-6 input-field-name">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Nom" />
                  </div>
                  <div className="col-md-6 input-field-name">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="prenom" />
                  </div>
                </div>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="adresse" />
                </div>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="number" placeholder="Telephone" />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Confirm Password" />
                </div>
                <Link to="/">
                  <button type="submit" className="btn-log inscription">
                    s'inscrire
                  </button>
                </Link>
                {/* <p className="social-text">Or Sign up with social platforms</p> */}
                {/* <div className="social-media">
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
                </div> */}
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
                <Link to="/">
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
            {/* <div className="panel right-panel">
              <div className="content">
                <h3>One of us ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum laboriosam ad deleniti.
                </p>
                <button className="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
              </div>
              <img src="img/register.svg" className="image" alt="" />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
// export default connect(
//     ({ register }) => ({ ...register }),
//     dispatch => bindActionCreators({ ...registerActions }, dispatch)
//   )( register );
