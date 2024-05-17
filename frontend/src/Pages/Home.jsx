import React from "react";
import Categories from "./Categories";
import './home.css';

function Home() {
  return (
    <div className="home">
      <h1>Bienvenue sur SVL </h1>
      <div className="home_gallery">
        <div className="home_img">
          <a href="./Product">
            <img src="./audio.jpg" alt="un microphone" />
            <span className="home_img_text">Explore</span>
          </a>
        </div>
        <div className="home_img">
          <a href="./Product">
            <img src="./light.jpg" alt="une lumiere de cinema" />
            <span className="home_img_text">Explore</span>
          </a>
        </div>
        <div className="home_img">
          <a href="./Product">
            <img src="./video.jpg" alt="une camera" />
            <span className="home_img_text">Explore</span>
          </a>
        </div>
      </div>
      <div className="home_infos">
        <p><strong>SVL</strong> Sound Video Light
          Nous sommes ravis de vous offrir nos services dans le secteur de l'audiovisuel et nous sommes prêts à vous accueillir sur notre site.
          <br />
          Nous travaillons en collaboration avec des marques reconnues dans le domaine avec du matériel fiable et de qualité.
        </p>
      </div>
      <Categories />
    </div>
  );
}

export default Home;
