import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { PiShoppingCartLight } from "react-icons/pi";
import { LiaBarsSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom"; 
import logo from '../../Assets/Logo.png';
import "./NavBar.scss";

const Navbar = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [screenSize, setScreenSize] = useState({
    isMobile: window.innerWidth <= 600,
    isFablet: window.innerWidth > 600 && window.innerWidth <= 750,
    isTablet: window.innerWidth > 750 && window.innerWidth <= 990,
    isDesktop: window.innerWidth > 990,
  });
  const navigate = useNavigate();

  
  const toggleSidebar = () => {
    
    setIsSidebarOpen((prevState) => !prevState);
  };

  const goToHomePage = () => {
    navigate("/");
  };

  
  useEffect(() => {
    const handleResize = () => {
      setScreenSize((prevSize) => ({
        ...prevSize,
        isMobile: window.innerWidth <= 600,
        isFablet: window.innerWidth > 600 && window.innerWidth <= 750,
        isTablet: window.innerWidth > 750 && window.innerWidth <= 990,
        isDesktop: window.innerWidth > 990,
      }));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left" onClick={goToHomePage}>
          <img src={logo} alt="Logo" className="navbar-logo" />
          {(screenSize.isDesktop || screenSize.isTablet || screenSize.isFablet ) && (
            <>
                <div className="logo">DroopShop</div>
            </>
          )}
          
        </div>

        {(screenSize.isTablet || screenSize.isDesktop) && (
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
        )}

        <div className="navbar-right">
          <ul className="navbar-menu">
            
            {(screenSize.isTablet || screenSize.isDesktop) && (
              <>
                <li className="navbar-item itens-text">Categorias</li>
                <li className="navbar-item itens-text">Blog</li>
              </>
            )}
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
          {(screenSize.isMobile || screenSize.isTablet || screenSize.isFablet) && (
            <>
              <li>Categoria</li>
              <li>Blog</li>
            </>
          )}
          <li>Sobre</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
