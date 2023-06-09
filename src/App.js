
import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './container/home'
import About from './container/About'
import Contact from './container/Contact'
import Navigation from './container/navigation'
import NotFound from './container/NotFound'
import './App.css'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}