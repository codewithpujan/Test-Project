
import NavBar from "./component/Navbar"
import HeroSection from "./component/HeroSection"
import Footer from "./component/Footer"
import { useState } from "react"
 import Form from "./component/Form"
import RamroForm from "./component/RamroForm"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import PageNotFound from "./pages/PageNotFound"
import Room from "./component/Room"
import Rooms from "./pages/Rooms"
import Layout from "./pages/Layouts.jsx/Layout"
import Api from "./pages/API"
import API from "./pages/API"

    
    


function App() {
  
  
  
  
  return (
    <>
      

      
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="room" element={<Rooms />}/>
      <Route path="contacts" element={<Contacts/>}/>
      <Route path="api"element={<API/>}/>

      </Route>
            <Route path='*' element={<PageNotFound/>}/>

      </Routes></BrowserRouter>
      </>
  )
}


export default App
