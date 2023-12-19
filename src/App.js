import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Heading from './Heading'
import Signup from './Signup'
import Signin from './Signin'
import ConfirmEmail from './ConfirmEmail'
import Test from './Test'
// import Api from './Api'

const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Heading/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/cEmail' element={<ConfirmEmail/>}/>
        <Route path='/test' element={<Test/>}/>
        {/* <Route path='/api' element={<Api/>} /> */}
    </Routes>
    </>
  )
}

export default App