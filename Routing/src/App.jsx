import './App.css'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import About from './Components/About.jsx'
import User from './Components/User.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar /> <Home /> </>
    },
    {
      path: "/login",
      element: <> <Navbar /> <Login /></>
    },
    {
      path: "/about",
      element: <> <Navbar /> <About /> </>
    },{
      path: "/user/:username",
      element: <> <Navbar /> <User /> </>
    }
  ])

  return (
    <>
     
      <RouterProvider router={router} />
    </>
  )
}

export default App
