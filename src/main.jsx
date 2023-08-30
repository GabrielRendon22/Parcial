import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Navbar from './Components/Navbar'
import Index from './Components/Index'
import Nosotros from './Components/Nosotros'
import Contacto from './Components/Contacto'



const router = createBrowserRouter([{
  path: '/',
  element : <Navbar/>, 
  children: [
    { 
      path: '/',
      element: <Index/>
    },
    {
    path: '/Nosotros',
    element:<Nosotros/>
    },
    {
    path: '/Contacto',
    element:<Contacto/>
    }
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>     
  </React.StrictMode>,
)
