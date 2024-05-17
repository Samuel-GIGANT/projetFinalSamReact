import { IoHomeOutline } from "react-icons/io5";
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
      <div className="header_Infos">
        <ul>
          <li><a href="FAQ">FAQ</a></li>
          <li><a href="FAQ">A PROPOS</a></li>
          <li><a href="Politiques">Politiques</a></li>
          <li><a href="Moncompte">Mon compte</a></li>
        </ul>
      </div>
      <header className='header'>
        <div className="header_Logo">
          <h2><a href="/"> <span>SVL</span> Sound Vidéo Light</a></h2>
        </div>
        <div className="header_Search">
          <input type="search" name="search" id="searchbar" placeholder="Search" />
          <AiOutlineSearch />
        </div>
        <div className="header_Icons">
        <Link to="/login"><BiSolidUser />login</Link> {/* Lien vers la page de connexion */}
          <div className="header_Icons">
            <a href="cart.jsx"><AiFillShopping />Panier</a>
          </div>
        </div>
      </header>
      <br />
      <nav className='header_Nav'>
        <ul>
          <li><a href="/"><IoHomeOutline /> Home</a></li>
          <li><a href="ProductDetails"><AiOutlineAudio /> Sound</a></li>
          <li><a href="ProductDetails"><GoLightBulb /> Video</a></li>
          <li><a href="ProductDetails"><BsCamera /> Light</a></li>
        </ul>
      </nav>

    </div>
  )
}
export default Header;