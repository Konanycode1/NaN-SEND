import React, { useRef, useEffect, useState } from "react";
import "../assets/css/NavBar.css";
import { Link } from "react-router-dom";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiEyeCloseLine } from "react-icons/ri";

function NavBar() {
  const nav = useRef(null);
  const burger = useRef(null);
  const close = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  const toggle = () => {
    if (nav.current) {
      nav.current.classList.toggle("active");
      burger.current.style.display = "none";
      close.current.style.display = "block";
    }
  };

  const closeMenu = () => {
    nav.current.classList.remove("active");
    burger.current.style.display = "block";
    close.current.style.display = "none";
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="NavbarComponent">
      <nav>
        <a href="#">
          <span className="reactIcon-logo">
            <BiSolidMessageRoundedDots />
          </span>
          <span className="span1">NaN-</span>
          <span className="span2">SEND</span>
        </a>
        {isMobile ? (
          <>
            <span
              className="menuBurger"
              onClick={toggle}
              ref={burger}
              id="burger"
            >
              <TfiMenuAlt />
            </span>
            <span className="close" onClick={closeMenu} ref={close} id="close">
              <RiEyeCloseLine />
            </span>
          </>
        ) : (
          <ul className="navbar" ref={nav}>
            <li>
              <a href="" className="Acceuil-active">
                Accueil
              </a>
            </li>
            <li>
              <a href="">À propos</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        )}
        <div className="partie-login">
          <Link to="/Login" className="btn">
            Se connecter
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
