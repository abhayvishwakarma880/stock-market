import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppRoute from './AppRoute'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
          {AppRoute.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
      </Routes>
    </div>
  )
}

export default App