import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import "./register.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Lower from "../../img/registe.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstname: yup.string().required("Le nom est requis"),
  lastname: yup.string().required("Le prénom est requis"),
  address: yup.string().required("L'adresse est requis"),
  ville: yup.string().required("La ville est requis"),
  city: yup.string().required("Le pays est requis"),
  phone: yup.string().required("Le téléphone est requis"),
  email: yup.string().required("Email est requis").email('Email n\'est pas valide'),
  password: yup.string().required("Le mot de passe est requis").min(8, 'Le mot de passe doit comporter au moins 8 caractères '),
  confirmpassword: yup.string().required("Le mot de passe est requis").oneOf([yup.ref("password")], "Les deux mot de passe doivent correspondre").min(8, 'Le mot de passe doit comporter au moins 8 caractères '),
})

function Register() {

  useEffect(() => {
    if(localStorage.getItem('user'))
    {
      navigate('/')
    }
  }, [])

  const navigate = useNavigate();
  const [firstName, setFisrtname] = useState("");
  const [lastName, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [ville, setVille] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  
  async function formSubmit() {
    let data = { firstName, lastName, address, ville, city, phone, email, password };
    let result = await fetch("http://127.0.0.1:8000/api/v1/register", {
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
       toast.success('Inscription réussie')
    // .then((result) => {
    //   // console.warn("result", result);
    //   result.json().then((response) => {
    //     console.warn("response", response);
    //     navigate("/");
    //     toast.success('Inscription réussie')
    //   });
    // });
  }
  return (
    <div className="component-register">
      <div className="container-content">
        <div className="forms-container-register">
          <div className="signin-signup">
            <form action="#" className="sign-up-form" onSubmit={handleSubmit(formSubmit)}>
              <h2 className="title">Créer un nouveau compte</h2>
              <div className="row">
                <div className="col-md-6 input-field-name">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Nom"
                    value={firstName}
                    name="firstName"
                    {...register("firstname")}
                    onChange={(e) => setFisrtname(e.target.value)}
                  />
                  <p className='error-message w-100'>{errors.firstname?.message}</p>
                </div>
                <div className="col-md-6 input-field-name">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="prenom"
                    value={lastName}
                    name="lastName"
                    {...register("lastname")}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                  <p className='error-message'>{errors.lastname?.message}</p>
                </div>
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="adresse"
                  value={address}
                  name="address"
                  {...register("address")}
                  onChange={(e) => setAddress(e.target.value)}
                />         
              </div>
              <p className='error-message'>{errors.address?.message}</p>
              <div className="d-flex">
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control "
                    placeholder="ville"
                    aria-label="ville"
                    value={ville}
                    name="ville"
                    {...register("ville")}
                    onChange={(e) => setVille(e.target.value)}
                  />
                  <p className='error-message'>{errors.ville?.message}</p>
                </div>
                <div class="col-sm">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="pays"
                    aria-label="State"
                    value={city}
                    name="city"
                    {...register("city")}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <p className='error-message'>{errors.city?.message}</p>
                </div>
              </div>
              <div className="input-field">
                <i className="fas fa-phone"></i>
                <input
                  type="number"
                  placeholder="Telephone"
                  value={phone}
                  name="phone"
                  {...register("phone")}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <p className='error-message'>{errors.phone?.message}</p>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  name="email"
                  {...register("email")}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <p className='error-message'>{errors.email?.message}</p>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  name="password"
                  {...register("password")}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className='error-message'>{errors.password?.message}</p>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input 
                  type="password" 
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  name="confirmpassword"
                  {...register("confirmpassword")}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  />
              </div>
              <p className='error-message'>{errors.confirmpassword?.message}</p>
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
