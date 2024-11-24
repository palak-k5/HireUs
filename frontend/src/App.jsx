import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/navbar'
import Signup from './components/auth/Signup'
import Login from './components/auth/login'
import Home from './components/home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
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
    {
      path:'/jobs',
      element:<Jobs/>
    },
    {
      path:'/browse',
      element:<Browse/>
    },
    {
      path:'/description/:id',
      element:<JobDescription/>
    },
    {
      path:'/profile',
      element:<Profile/>
    }
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
