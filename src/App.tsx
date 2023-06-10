import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import Home from './components/Home'
import Trend from './components/Trend'

function App() {
  return (
    <>
      <div className='sides'>
        <SideBar />
        <Home />
        <Trend />
      </div>
    </>
  )
}

export default App
