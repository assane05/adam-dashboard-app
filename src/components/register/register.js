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
        <div class="container-content">
          <div class="forms-container-register">
            <div class="signin-signup">
              <form action="#" class="sign-up-form">
                <h2 class="title">Créer un nouveau compte</h2>
                <div className="row">
                  <div class="col-md-6 input-field-name">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Nom" />
                  </div>
                  <div class="col-md-6 input-field-name">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="prenom" />
                  </div>
                </div>
                <div class="input-field">
                  <i class="fas fa-user"></i>
                  <input type="text" placeholder="adresse" />
                </div>
                <div class="input-field">
                  <i class="fas fa-user"></i>
                  <input type="number" placeholder="Telephone" />
                </div>
                <div class="input-field">
                  <i class="fas fa-envelope"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div class="input-field">
                  <i class="fas fa-lock"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <div class="input-field">
                  <i class="fas fa-lock"></i>
                  <input type="password" placeholder="Confirm Password" />
                </div>
                <Link to="/">
                  <button type="submit" class="btn inscription">
                    s'inscrire
                  </button>
                </Link>
                {/* <p class="social-text">Or Sign up with social platforms</p> */}
                {/* <div class="social-media">
                  <a href="#" class="social-icon">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fab fa-google"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div> */}
              </form>
            </div>
          </div>
        </div>

        <div className="">
          <div class="panels-container">
            <div class="panel left-panel">
              <div class="content">
                <h3>Vous avez déjà votre compte ?</h3>
                <p>Cliquez sur le bouton !</p>
                <Link to="/">
                  <button
                    type="submit"
                    class="btn transparent"
                    id="sign-up-btn"
                  >
                    se connecter
                  </button>
                </Link>
              </div>
              <img src={Lower} class="image" alt="" />
            </div>
            {/* <div class="panel right-panel">
              <div class="content">
                <h3>One of us ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum laboriosam ad deleniti.
                </p>
                <button class="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
              </div>
              <img src="img/register.svg" class="image" alt="" />
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
