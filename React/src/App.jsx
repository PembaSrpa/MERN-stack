import React from 'react'
import { Home } from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <div className='flex flex-col items-center'>
      <Navbar />
      <Home />
    </div>
    </>
  )
}

export default App