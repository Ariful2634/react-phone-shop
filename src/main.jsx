import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Home/Home';
import Favourites from './Header/Favourites/Favourites';
import Login from './Login/Login';
import PhoneDetails from './PhoneDetails/PhoneDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/fav',
        element:<Favourites></Favourites>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/phone/:id',
        element:<PhoneDetails></PhoneDetails>,
        loader:()=>fetch('../phone.json')
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
