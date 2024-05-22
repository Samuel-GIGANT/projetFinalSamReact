import React from "react";
import { IoHomeOutline } from "react-icons/io5"; //import de la bibliothétque react icons pour les icons
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { AiFillShopping } from "react-icons/ai";
import { GoLightBulb } from "react-icons/go";
import { AiOutlineAudio } from "react-icons/ai";
import { BsCamera } from "react-icons/bs";
import { Link } from 'react-router-dom'; // import du composant Link pour faire la navigation
import './header.css';

const Header = () => {
  return (
    <div>
      <header className='header'>
        <div className="header_Logo">
          <h2><a href="/"> <span>SVL</span> Sound Vidéo Light</a></h2>
        </div>
        <div className="header_Search">
      <div className="search-container">
        <AiOutlineSearch className="search-icon" />
        <input type="search" name="search" id="searchbar" placeholder="Search" />
      </div>
    </div>
        <div className="header_Icons">
          <div>
            <Link to="/login"><BiSolidUser /></Link> {/* Lien vers la page de connexion */}
          </div>
          <div>
            <Link to="/cart"><AiFillShopping /></Link>{/* Lien vers le panier */}
          </div>
        </div>
      </header>
      <br />
      <nav className='header_Nav'>
        <ul>
          <li><a href="/"><IoHomeOutline /> Home</a></li>
          <li><a href="ProductDetails"><AiOutlineAudio /> Sound</a></li>
          <li><a href="ProductDetails"><BsCamera /> Video</a></li>
          <li><a href="ProductDetails"><GoLightBulb /> Light</a></li>
        </ul>
      </nav>

    </div>
  )
}
export default Header;