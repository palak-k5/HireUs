import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Navbar from './components/shared/Navbar'
import Signup from './components/auth/Signup'
import Login from './components/auth/login'
import Home from './components/home'
import Jobs from './components/Jobs'
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
      path:'/profile',
      element:<Profile/>
    },
    {
      path:"/description/:id",
      element :   <JobDescription />
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
