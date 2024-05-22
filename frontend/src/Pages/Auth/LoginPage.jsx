import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginPage.css';

function LoginPage() {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="login-title"><h2>Veuillez vous connecter</h2></div>
      <div className="form">
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre Email"
              value={inputs.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-container">
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Votre mot de passe"
              value={inputs.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">Se connecter</button>
          </div>
        </form>
        <div>
          <p>Vous n'avez pas de compte ? <Link to="/register">S'inscrire</Link></p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
