
import Nav from "./componentd/Nav/Nav"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./componentd/Home/Home"
import About from "./componentd/About/About"
import Contact from "./componentd/Contact/Contact"
import Project from "./componentd/Project/Project"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/About" Component={About}/> 
        <Route path="/Contact" Component={Contact}/>
        <Route path="/Projrct" Component={Project}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
