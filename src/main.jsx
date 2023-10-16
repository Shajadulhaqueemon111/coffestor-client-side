import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffe from './Components/AddCoffe.jsx';
import UpdateCoffe from './Components/UpdateCoffe.jsx';
import SingUp from './Components/SingUp.jsx';
import SingIn from './Components/SingIn.jsx';
import AuthProvider from './Components/Auth/AuthProvider.jsx';
import User from './Components/User.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('https://coffe-stall-server-1-nry1gwko2-md-emons-projects.vercel.app/coffes')
    
  },
  {
    path:"/addcoffe",
    element:<AddCoffe></AddCoffe>

  },
  {
    path:"/updatecoffe/:id",
    element:<UpdateCoffe></UpdateCoffe>,
    loader:({params})=>fetch(`https://coffe-stall-server-1-nry1gwko2-md-emons-projects.vercel.app/coffes/${params.id}`)
  },
  {
    path:"/singup",
    element:<SingUp></SingUp>
  },
  {
    path:"/singin",
    element:<SingIn></SingIn>
  },
  {
    path:"/users",
    element:<User></User>,
    loader:({params})=>fetch('https://coffe-stall-server-1-nry1gwko2-md-emons-projects.vercel.app/users')
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
