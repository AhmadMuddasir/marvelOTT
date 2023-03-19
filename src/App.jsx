import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WebSeries from './components/WebSeries'
import Card from './components/card'

function App() {

  return (
<>
<Navbar/>
<Header/>
<Card ></Card> 
<WebSeries/>
<Footer/>


</>
  )
}

export default App
