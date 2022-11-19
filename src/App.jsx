import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'


import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import SignUpPage from './Pages/SignupPage/SignUpPage'
function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = { <HomePage/>} />
            <Route path='/login' element = {<LoginPage/>} />
            <Route path='/signup' element = {<SignUpPage/>} />
          </Routes>
        </BrowserRouter>
       
        
    </div>
  )
}

export default App