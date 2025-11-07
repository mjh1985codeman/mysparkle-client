import { useState } from 'react'
import './App.css'

import { Home } from "./pages";

import { NavigationBar, Hero } from './components';

function App() {

  return (
    <>
      <NavigationBar />
      <Hero />
      <Home />
    </>
  )
}

export default App
