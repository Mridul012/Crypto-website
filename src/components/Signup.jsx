import React from "react";
import './Signup.css'


function Signup(){
    return (
        <div className="signup">
            <div className="container">
                <div className="left">
                    <img src="./public/images/trade.png"/>

                </div>

                <div className="right">
                    <h2>Earn passive income with crypto</h2>
                    
                    <p>Earn upto 12% annual rewards on 30+ digital assets.Simply hold your assets in the app to automatically earn rewards at the end of each month
                        with no lockups and no limits
                    </p>
                    <input type="email" placeholder="Enter your email"/>
                    <button className="btn">Learn More</button>

                </div>


            </div>

        </div>
    )

}

export default Signup;