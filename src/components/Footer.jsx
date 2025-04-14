import React from "react";
import "./Footer.css"
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import { FaHeart } from "react-icons/fa6";

function Footer(){
    return (
        <div className="footer">
            <div className="container">
                <div className="col col-1">
                <h1>Crypto<span className="subpart">Vault</span></h1>

                </div>
                <div className="col">
                    <h5>Support</h5>
                    <span className="first"> </span>
                        <a href="#">Contact Us</a>
                        <a href="#">Chat</a>
                        <a href="#">Help Center</a>
                        <a href="#">FAQ</a>
                   

                    

                </div>


                <div className="col">
                    <h5>Developers</h5>
                    <span className="first"></span>
                        <a href="#">Cloud</a>
                        <a href="#">Commerce</a>
                        <a href="#">Pro</a>
                        <a href="#">API</a>
                        

                    

                </div>

                <div className="col">
                    <h5>Company</h5>
                    <span className="first"></span>
                        <a href="#">About</a>
                        <a href="#">Information</a>
                        <a href="#">Legal</a>
                        <a href="#">Privacy</a>
                        

                    

                </div>

                <div className='col'>
                    <h5>Social</h5>
                    <span className='first'> </span>
                        <a href='/'><FaFacebook className='icon'/></a>
                        <a href='/'><FaTwitter className='icon'/></a>
                        <a href='/'><FaLinkedin className='icon'/></a>
                        <a href='/'><FaGithub className='icon'/></a>
                       

                </div>



            </div>
            <p className="copyright">
        Made with <FaHeart style={{ color: "red" }} /> by Mridul | © 2025 All rights reserved
      </p>

        </div>
    )

}


export default Footer;