import { useState } from "react"
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Coin from "./components/Coin"
import Signup from "./components/Signup"
import UsersTrust from "./components/test"
import Footer from "./components/Footer"


function App() {

  return (<>
 
    <Navbar/>
    <UsersTrust/>
    <Coin/>
    <Hero/>
    <Signup/>
    <Footer/>
    
    </>)
  
}

export default App
