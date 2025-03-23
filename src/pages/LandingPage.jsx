import React from 'react'
import Navbar from './components/Navbar'
import ItemsDisplay from './components/ItemsDisplay'
import Chains from './components/Chain'
import FirmCollections from './components/FirmCollections'
import Products from './components/Products'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <div className="landingSection">
        <ItemsDisplay />
        <Chains />
        <FirmCollections />
        </div>
    </div>
  )
}

export default LandingPage