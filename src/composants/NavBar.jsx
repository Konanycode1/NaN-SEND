import React from "react";
import "../assets/css/NavBar.css";
import { Link } from "react-router-dom";
import {BiSolidMessageRoundedDots} from "react-icons/bi";

function NavBar() {
  return (
    <>
      <div className="laNav">
        <nav>
          <a href="#">
            <span><BiSolidMessageRoundedDots/></span>
            <span>NAN-</span>
            <span>SEND</span>
          </a>
          <ul className="navbar">
            <li>
              <a href="" className="Acceuil-active">
                Accueil
              </a>
            </li>
            <li>
              <a href="">À propos</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="partie-login">
            <Link to="/Login" className="btn">
              Se connecter
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
