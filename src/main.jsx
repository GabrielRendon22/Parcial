import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Navbar from './Components/Navbar'
import Index from './Components/Index'  
import Doctrina from './Components/Doctrina'
import Novarum from './Components/Novarum'
import Dimensioneshumanas from './Components/Dimensioneshumanas'
import Humanderechos from './Components/Humanderechos'
import Principio from './Components/Principio'



const router = createBrowserRouter([{
  path: '/',
  element : <Navbar/>, 
  children: [
    { 
      path: '/',
      element: <Index/>
    },
    {
    path: '/Doctrina',
    element:<Doctrina/>
    },
    {
    path: '/Novarum',
    element:<Novarum/>
    },
    {
    path: '/Dimensioneshumanas',
    element:<Dimensioneshumanas/>
    },
    {
    path: '/Humanderechos',
    element:<Humanderechos/>
    },
    {
    path: '/Principio',
    element:<Principio/>
    }
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>     
  </React.StrictMode>,
)
