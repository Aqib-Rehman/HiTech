import { useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { Landing } from "./Components/Landing/Landing"
import { Services } from "./Components/Services/Services"
import { Projects } from "./Components/Projects/Projects"
import { Contact } from "./Components/Contact/Contact"
import { ProjectDetails } from "./Components/Projects/ProjectDetails/ProjectDetails"
import { ServicesDetail } from "./Components/Services/ServicesDetail/ServicesDetail"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/services-detail/:id' element={<ServicesDetail />} />
      <Route path='/project' element={<Projects />} />
      <Route path='/project-detail/:id' element={<ProjectDetails />} />
    </Routes>
  )
}

export default App
