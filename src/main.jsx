import React from 'react'
import ReactDOM from 'react-dom/client'
import Loginscr from './Loginscr.jsx'
import Registerscr from './Registerscr.jsx'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Loginscr/>
  },
  {
    path:"/app",
    element: <App/>
  },
  {
    path:"/register",
    element: <Registerscr/>
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>
  <App/>
</React.StrictMode> 
);

/* import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
) */