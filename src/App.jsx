import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

// imported pages are here
import Home from './pages/Home'
import Team from './pages/Team'
import Service from './pages/Service'
import Projects from './pages/Projects'
import Testimonials from './pages/Testimonials'
import MemberDetails from './components/Team/MemberDetails'
import ServiceDetails from './components/service/Servicedetails'
import ProjectDetails from './components/projects/ProjectDetails'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/member/:id' element={<MemberDetails />} />
          <Route path='/service' element={<Service />} />
          <Route path='/singleservice/:id' element={<ServiceDetails />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/singleproject/:id' element={<ProjectDetails />} />
          <Route path='/testimonials' element={<Testimonials />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
