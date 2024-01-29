import React from "react";
import './Sidebar.css';
import logoSpotify from '../assets/icons/logo-spotify.png';
import { FaHome, FaSearch, FaBook, FaPlus, FaGlobe } from 'react-icons/fa';

const Sidebar = () => {
    return(
        <div className="sidebar">

            <nav className="sidebar_navigation">
                <div className="logo">
                    <a href="">
                        <img src={logoSpotify} alt="Logo do spotify" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <FaHome />
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FaSearch/>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <FaBook/>
                        <span>Sua biblioteca</span>
                    </button>
                    <FaPlus/>
                </div>

                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>

                <div className="cookies">
                    <a href="">cookies</a>
                </div>

                <div className="languages">
                    <button className="languages__button">
                        <FaGlobe/>
                        <span>Português do Brasil</span>
                    </button>
                </div>

            </div>
        </div>

    )
}

export default Sidebar;