import profilePicture from "../assets/profile.png";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import "../styles/Header.css";
function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Muh Nur Ilham Nurdin</h3>
        <p>Web Developer - Blockchain Developer - Apps Developer</p>
        <div className="socialMedia">
          <a href="https://www.instagram.com/raiss.ilhamm/">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/muh-nurilham-a42110222/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/nurilham524">
            <FaGithub />
          </a>
          <a href="mailto: nurilhamnurdin524@gmail.com">
            <IoIosMail />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
