

import { Route,BrowserRouter as Router,Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Certifications from './components/certifications/Certifications'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import './App.css'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
   
    <Router>
    
      <Navbar />
    
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      
      </Router>
  )
}

export default App
