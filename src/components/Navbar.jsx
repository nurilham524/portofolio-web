import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
    const [statusTampil, setStatusTampil] = useState('')

    function tampilMenu(){
        if(statusTampil === ''){
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
                        statusTampil === '' ? (<FaBars />) : (<IoIosClose />)
                    }
                </button>
                <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
                    <ul>
                        <li className="nav-list"><HashLink to="/#portfolio">Portfolio</HashLink></li>
                        <li className="nav-list"><HashLink to="/#about">About</HashLink></li>
                        <li className="nav-list"><Link to="/experience">Experience</Link></li>
                        <li className="nav-list"><a href="/CV_NurIlham.pdf" download>Download&nbsp;CV</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
