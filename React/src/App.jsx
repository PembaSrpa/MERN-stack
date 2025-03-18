import React from 'react'
import {Home} from './components/Home'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Form from './components/Form'
import OnOff from './components/OnOff'

const App = () => {
  return (
    <>
    {/* <div className='flex flex-col min-h-screen items-center'>
      <Navbar />
      <Home />
    </div> */}
    {/* <Form initial="Login"/> */}
    <OnOff />
    </>
  )
}

export default App