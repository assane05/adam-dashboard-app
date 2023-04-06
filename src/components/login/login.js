import React, { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import login from "../../img/login.svg";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as loginActions from "../../store/login/actions";
class Login extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  render() {
    return (
      <div className="component-login">
        <div class="container-content overflow-hidden">
          <div class="forms-container">
            <div class="signin-signup">
              <form action="#" class="sign-in-form login-top">
                <h2 class="title">Sign in</h2>
                <div class="input-field">
                  <i class="fas fa-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div class="input-field">
                  <i class="fas fa-lock"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <Link to="/dashbord">
                  <button type="submit" class="btn solid">
                    Login
                  </button>
                </Link>
                <p class="social-text">Mot de passe oublé ?</p>
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

          <div class="panels-container">
            <div class="panel left-panel">
              <div class="content">
                <h3>C'est votre première fois ici ?</h3>
                <p>Cliquez sur le bouton s'incrire</p>
                <Link to="/register">
                  <button
                    type="submit"
                    class="btn transparent"
                    id="sign-up-btn"
                  >
                    s'incrire
                  </button>
                </Link>
              </div>
              <img src={login} class="image" alt="" />
            </div>
            {/* <div class="panel right-panel">
              <div class="content">
                <h3>C'est votre première fois ici ?</h3>
                <p>Cliquez sur le bouton s'incrire</p>
                <button class="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
              </div>
              <img src="" class="image" alt="" />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
// export default connect(
//     ({ login }) => ({ ...login }),
//     dispatch => bindActionCreators({ ...loginActions }, dispatch)
//   )( login );
