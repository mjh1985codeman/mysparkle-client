import { useState } from 'react'
import './App.css'

import { Home } from "./pages";

import { NavigationBar } from './components';

function App() {

  return (
    <>
      <NavigationBar />
      <Home />
    </>
  )
}

export default App
