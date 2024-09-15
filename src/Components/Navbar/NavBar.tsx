import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { PiShoppingCartLight } from "react-icons/pi";
import { LiaBarsSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom"; 
import logo from '../../Assets/Logo.png';
import "./NavBar.scss";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const goToHomePage = () => {
    navigate("/"); 
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left" onClick={goToHomePage}>
          <img src={logo} alt="Logo" className="navbar-logo" />
          <div className="logo">DroopShop</div>
        </div>

        <div className="navbar-center">
          <div className="search-bar">
            <BiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Anúncio, usuário ou categoria"
              className="search-input"
            />
          </div>
        </div>

        <div className="navbar-right">
          <ul className="navbar-menu">
            <li className="navbar-item">Categorias</li>
            <li className="navbar-item">Blog</li>
            <li className="navbar-item">
              <button className="anunciar-button">Anunciar</button>
            </li>
            <li className="navbar-item">
              <BiSearch className="search-icon icon" />
            </li>
            <li className="navbar-item">
              <PiShoppingCartLight className="icon" />
            </li>
            <li className="navbar-item" onClick={toggleSidebar}>
              <LiaBarsSolid className="icon" />
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          &times;
        </button>
        <ul>
          <li>Entrar</li>
          <li>Registrar</li>
          <li>Sobre</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
