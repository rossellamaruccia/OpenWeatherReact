import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyNav from './components/MyNav'
import 'bootstrap/dist/css/bootstrap.min.css' 
import HomeContainer from './components/HomeContainer'
import MyFooter from './components/MyFooter'

function App() {
  return (
    <>
      <MyNav />
      <HomeContainer />
      <MyFooter />
    </>
  )
}

export default App
