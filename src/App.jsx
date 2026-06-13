import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppRoute from './AppRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './ScrollToTop'
import Loader from './components/Loader'
const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      
      <React.Suspense fallback={<Loader />}>
        <Routes>
            {AppRoute.map((route, index) => (
              <Route key={index} path={route.path} element={<route.element />} />
            ))}
        </Routes>
      </React.Suspense>

      <Footer />
    </div>
  )
}

export default App