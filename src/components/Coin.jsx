import React, { useState, useEffect } from "react";
import "./Coin.css";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import axios from 'axios';

function Coin() {
    const [data, setData] = useState(null);
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=6&page=1&sparkline=false";

    useEffect(() => {
        axios
    .get(url)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    console.log(data);

    if (!data) return null;

    return (
        <div className="coins">
            <div className="container">
                <div className="left">
                    <h2>Explore Top Crypto's like Bitcoin, Ethereum, and Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    <button className="btn">See more Coins</button>
                </div>
            </div>
            

            <div className="right">
                {data.map((coin, index) => {
                    return (
                        <>
                        <div className="card">
                        <div key={index} className="list">
                            <img src={coin.image} />

                        </div>
                        <div>
                            <h5>{coin.name}</h5>
                            <p>₹{coin.current_price.toLocaleString()}</p>

                        </div>
                        {coin.price_change_percentage_24h<0 ?(
                            <span className="red">
                                <FiArrowDown className="icon"/>
                                {coin.price_change_percentage_24h.toFixed(2)}
                            </span>
                        ): (
                            <span className="green">
                                <FiArrowUpRight className="icon"/>
                                {coin.price_change_percentage_24h.toFixed(2)}


                            </span>
                        )}
                        </div>
                            
                            </>
    
                    );
                })}
            </div>
        </div>
    );
}

export default Coin;
