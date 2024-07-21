import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaNode } from "react-icons/fa";

import "../styles/About.css";
function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Muh. Nur Ilham Nurdin, commonly known as Garattae, is an Informatics
          student at Universitas Teknologi Digital Indonesia. Garattae has a
          profound interest in web development, with a particular focus on
          front-end and blockchain development. Passionate about creating
          innovative and efficient digital solutions, Garattae is dedicated to
          advancing their skills and knowledge in these cutting-edge fields.
        </p>
        <h4>Programing Language & Tools</h4>
        <div className="skills">
          <FaHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
          <FaReact />
          <FaPhp />
          <IoLogoFirebase />
          <FaBootstrap />
          <RiFlutterFill />
          <SiMysql />
          <VscVscode />
          <FaNode />
        </div>
      </div>
    </section>
  );
}

export default About;
