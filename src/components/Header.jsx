import profilePicture from '../assets/profile.png'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import '../styles/Header.css'
function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture} />
            <h3>Muh Nur Ilham Nurdin</h3>
            <p>Web Developer - Blockchain Developer - Apps Developer</p>
            <div className="socialMedia">
                <a href=""><FaInstagram />
                </a>
                <a href=""><FaLinkedin />
                </a>
                <a href=""><FaGithub />
                </a>
                <a href=""><FaWhatsapp />
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header