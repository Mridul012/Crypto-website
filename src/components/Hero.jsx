import React from "react"
import "./Hero.css"


function Hero(){
    return (
        <div className="hero">
            <div className="container">

                <div className="left">
                    <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                    <h1>Invest in Cryptocurrency with Your IRA</h1>
                    <p>Buy,Sell and store hundreds of cryptocurrencies</p>

                    <div className="input-container">
                        <input type="email" placeholder="Enter your email"></input>
                        <button className="btn">Learn More</button>

                    </div>
                </div>
                <div className="right">
                    <div className="img-container">
                        <img src="./src/assets/hero-img.png" alt="wait"/>
                    </div>
                </div>


            </div>

        </div>
    )

}

export default Hero