import React from "react";
import {FaBars,FaTimes} from 'react-icons/fa'
import "./Navbar.css"
import { useState } from "react";
import {useNavigate} from 'react-router-dom';


function Navbar(){
    const navigate = useNavigate()

    const [down,setDown]= useState(false)

    function handleclick(){
        setDown(!down)

}

    return (
        <div className="header">
            <div className="container">
                <h1>Crypto<span className="subpart">Vault</span></h1>
        <ul className={down ? 'nav-menu active' : 'nav-menu'}>

                    <li><a href="#">Home</a></li>

                    {/* <li><a href="#">Featured</a></li> */}
            <li>
            <a href="#signup" onClick={(e) => {
                e.preventDefault();
                document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
              }}>Earn</a>
          </li>



            <li>
            <a href="#hero" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              }}>Featured</a>
            </li>

                    {/* <li><a href="#">Earn</a></li> */}
     

            <li><a href="#footer" onClick={(e) => {
                         e.preventDefault();
                            document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                 }}>Contact</a>
            </li>

                    {/* <li><a href="/footer">Contact</a></li> */}

                </ul>
                
                <div className="btn-group">
                    <button className="btn" onClick={() => navigate('/login')}>Connect Wallet</button>

                </div>
                <div className="reacticonss" onClick={handleclick}>
                    {down? (<FaTimes/>): (<FaBars/>)}
                    

                </div>

            </div>

        </div>
    )

}

export default Navbar;