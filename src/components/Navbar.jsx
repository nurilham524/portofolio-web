import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import '../styles/Navbar.css'
import { useState } from "react";
function Navbar() {
    const [statusTampil, setStatusTampi] = useState('')

    function tampilMenu(){
        if(statusTampil == ''){
            setStatusTampi('tampil')
        } else {
            setStatusTampi('')
        }
            
        
    }
  return (
    <nav>
        <div className="wrapper">
            <div className="logo">
                <a href="">Nur Ilham</a>
            </div>
            <button onClick={tampilMenu}>
                {
                    statusTampil == ''?(<FaBars />):(<IoIosClose />)
                }
            </button>
            <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
                <ul>
                    <li><a href="#portfolio"></a>Portfolio</li>
                    <li><a href="#about"></a>About</li>
                    <li><a href="#experience"></a>Experience</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar