import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_page from './pages/Landing_page'
import Main_page from './pages/Main_page'
import Calender from './pages/Calender'
import Monasteries from './pages/Monasteries'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="/main" element={<Main_page />} />
         <Route path="/calendar" element={<Calender />} />
          <Route path="/monasteries" element={<Monasteries />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
