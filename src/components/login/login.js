import { useState, useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import login from "../../img/login.svg";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required("Email est requis").email('Email n\'est pas valide'),
  password: yup.string().required("Le mot de passe est requis").min(8, 'Le mot de passe doit comporter au moins 8 caractères '),
})
function Login () {

  useEffect(() => {
    if(localStorage.getItem('user'))
    {
      navigate('/')
    }
  }, [])

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  async function formSubmit() {
    let data = { email, password };
    let result = await fetch("http://127.0.0.1:8000/api/v1/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    result = await result.json();
    console.warn(result);
    localStorage.setItem('user',JSON.stringify(result));
       navigate('/');

    // .then((result) => {
    //   // console.warn("result", result);
    //   result.json().then((response) => {
    //     console.warn("response", response);
    //     navigate("/");
    //     toast.success('Connexion réussie')
    //   });
    // });
  }
    return (
      <div className="component-login">
        <div className="container-content overflow-hidden">
          <div className="forms-container">
            <div className="signin-signup">
              <form className="sign-in-form login-top" onSubmit={handleSubmit(formSubmit)}>
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    {...register("email")}
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <p className='error-message'>{errors.email?.message}</p>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    {...register("password")}
                    name="password"
                    value={password}  
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p className='error-message'>{errors.password?.message}</p>
                  <button className="btn-log solid">
                    Login
                  </button>              
                <p className="social-text">Mot de passe oublé ?</p>
                <div className="social-media">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  {/* <a href="#" className="social-icon">
                    <i className="fab fa-google"></i>
                  </a> */}
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

export default Login;
// export default connect(
//     ({ login }) => ({ ...login }),
//     dispatch => bindActionCreators({ ...loginActions }, dispatch)
//   )( login );
