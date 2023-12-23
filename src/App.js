import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Heading from './Heading'
import Signup from './Signup'
import Signin from './Signin'
import ConfirmEmail from './ConfirmEmail'
// import Test from './Test'
import Dashboard from './Dashboard'

// import Dashboard from "./components/Super Admin/Dashboard/Dashboard";

// import Api from './Api'

const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Heading/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/cEmail' element={<ConfirmEmail/>}/>
        {/* <Route path='/test' element={<Test/>}/> */}
        <Route path='/dash' element={<Dashboard/>}/>
          {/* <Route path="/superadmin/generate/school" element={<GenerateSchool />} />
          <Route path="/superadmin/school/list" element={<Schools />} />
          <Route path="/superadmin/school/:id" element={<ShowOne />} />
          <Route path="/superadmin/notices" element={<Notice />} />
          <Route path="/superadmin/construct" element={<UnderConstructionSuperAdmin />} /> */}
        {/* <Route path='/api' element={<Api/>} /> */}
    </Routes>
    </>
  )
}

export default App