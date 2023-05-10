import {useEffect, useState} from 'react'

import './App.css'
import {HeaderComp} from "./components/HeaderComp.jsx";
import {FooterComp} from "./components/FooterComp.jsx";
import {MobileComp} from "./components/MobileComp.jsx";
import {HomeComp} from "./components/HomeComp.jsx";


function App() {

  return (
    <>
        <HeaderComp />
        <MobileComp />
        <HomeComp/>
        <FooterComp />
    </>
  )


}




export default App
