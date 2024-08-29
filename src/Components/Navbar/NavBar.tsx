import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import './NavBar.css';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo">droper</div>
                <ul className="nav-links">
                    <li>Menus</li>
                    <li>Produtos</li>
                    <li>Definições</li>
                    <li>Feed</li>
                </ul>
                <div className="search-container">
                    <input type="text" placeholder="Draper, produtos ou marcas..." />
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <HiMenu />
                </div>
                <button className="login-button">Entrar</button>
            </nav>

            {isMenuOpen && (
                <div className="sidebar">
                    <button className="close-button" onClick={toggleMenu}>×</button>
                    <div className="sidebar-logo">DroopShop</div>
                    <button className="login-button">ENTRAR</button>
                    <ul className="menu-items">
                        <li><span>🔍</span> Pesquisar</li>
                        <hr />
                        <li><span>🎥</span> Novidades</li>
                        <li><span>📰</span> Feed</li>
                        <li><span>💸</span> Cupons</li>
                        <hr />
                        <li><span>❓</span> Como o Droper funciona?</li>
                        <li><span>🏬</span> Nossa loja</li>
                        <li><span>💬</span> Fale conosco</li>
                        <li><span>🔄</span> Trocas e devoluções</li>
                        <li><span>📃</span> Termos de Uso</li>
                        <li><span>🔏</span> Políticas de privacidade</li>
                        <hr />
                        <li><span>🌙</span> Modo escuro</li>
                        <li><span>⚙️</span> Configurações</li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default NavBar;