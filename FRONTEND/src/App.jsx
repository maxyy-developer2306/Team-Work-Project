import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Registration from './pages/Registration.jsx'
import Login from './pages/Login.jsx'

function App() {
  return (
    <div>
        <BrowserRouter>

      <Routes>

        <Route path="/" element={<Registration />} />
         <Route path="/login" element={<Login />}/>

      </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App
