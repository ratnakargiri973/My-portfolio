import React, { Children } from 'react'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Resume from './pages/Resume.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import First from './components/First.jsx'
import ProjectDetails from './components/ProjectDetails.jsx'
import AddProject from './components/AddProject.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <First />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/resume',
          element: <Resume />
        },
        {
          path: '/projects',
          element: <Projects />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/detail/:id',
          element: <ProjectDetails />
        },
        {
          path: '/project-add',
          element: <AddProject />
        }
      ]
    },
  ])
  return (
   <RouterProvider router={router}/>
  )
}

export default App
