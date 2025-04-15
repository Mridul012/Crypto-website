// import { useState } from "react"
// import { Routes, Route } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Coin from "./components/Coin"
import Signup from "./components/Signup"
import UsersTrust from "./components/test"
import Footer from "./components/Footer"
import Login from "./components/Login"




function App() {


  return (<>
  <Navbar/>
      <UsersTrust />
      <Coin />
      <Hero />
      <Signup />
      <Footer />
  </>)

}

export default App
