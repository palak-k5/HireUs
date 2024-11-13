import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/navbar'
import Signup from './components/auth/Signup'
import Login from './components/auth/login'
import Home from './components/home'
const appRouter=  createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/Login',
      element:<Login/>
    },
    {
      path:'/Signup',
      element:<Signup/>
    },
  ]
)
function App() {
 
  return (
    
    <div>
      <RouterProvider router= {appRouter} />
    </div>
    
    
  )
}

export default App
