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
        <div className="container-content overflow-hidden">
          <div className="forms-container">
            <div className="signin-signup">
              <form action="#" className="sign-in-form login-top">
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <Link to="/admin-dashboard">
                  <button type="submit" className="btn-log solid">
                    Login
                  </button>
                </Link>
                <p className="social-text">Mot de passe oublé ?</p>
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

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>C'est votre première fois ici ?</h3>
                <p>Cliquez sur le bouton s'incrire</p>
                <Link to="/register">
                  <button
                    type="submit"
                    className="btn-log transparent"
                    id="sign-up-btn"
                  >
                    s'incrire
                  </button>
                </Link>
              </div>
              <img src={login} className="image" alt="" />
            </div>
            {/* <div className="panel right-panel">
              <div className="content">
                <h3>C'est votre première fois ici ?</h3>
                <p>Cliquez sur le bouton s'incrire</p>
                <button className="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
              </div>
              <img src="" className="image" alt="" />
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
