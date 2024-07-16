import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";

import '../styles/About.css'
function About() {
  return (
    <section id="about">
        <div className="wrapper">
            <h3>About</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ut recusandae possimus sit repellat! Omnis voluptas ab mollitia accusantium hic, fugit quo iusto quibusdam voluptatibus similique incidunt asperiores. Illum, id!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, amet?</p>
            <h4>Programing Language & Tools</h4>
            <div className="skills">
                <FaHtml5 /><FaCss3Alt /><IoLogoJavascript /><FaReact /><FaPhp /><IoLogoFirebase /><FaBootstrap />

            </div>
        </div>
    </section>
  )
}

export default About