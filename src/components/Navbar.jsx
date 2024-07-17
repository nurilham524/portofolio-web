import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
    const [statusTampil, setStatusTampil] = useState('')

    function tampilMenu(){
        if(statusTampil == ''){
            setStatusTampil('tampil')
        } else {
            setStatusTampil('')
        }
            
        
    }
  return (
    <nav>
        <div className="wrapper">
            <div className="logo">
                <Link to="/">Nur Ilham</Link>
            </div>
            <button onClick={tampilMenu}>
                {
                    statusTampil == ''?(<FaBars />):(<IoIosClose />)
                }
            </button>
            <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
                <ul>
                    <li><HashLink to="/#portfolio">Portfolio</HashLink></li>
                    <li><HashLink to="/#about">About</HashLink></li>
                    <li><Link to="/experience">Experience</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar