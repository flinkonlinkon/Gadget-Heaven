import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './compnets/Home.jsx'
import Das from './compnets/Das.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import My from './My.jsx'
import Statistics from './compnets/Statistics.jsx'
import DetalesPage from './compnets/DetalesPage.jsx'
import Card from './Card.jsx'
import Allproduct from './compnets/Allproduct.jsx'
import Accessories from './compnets/Accessories.jsx'
import Phone from './Phone.jsx'
import Pc from './compnets/Pc.jsx'
import Laptop from './compnets/Laptop.jsx'
import Watch from './compnets/Watch.jsx'
import Iphone from './compnets/Iphone.jsx'
import Datatransfer from './Datatransfer.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children:[
          {
            path:'/',
            element:<Allproduct></Allproduct>
          },
          {
            path:'/accessories',
            element:<Accessories></Accessories>
          },
          {
            path:'/phones',
            element:<Phone></Phone>
          },
          {
            path:'/pc',
            element:<Pc></Pc>
          },
          {
            path:'/laptop',
            element:<Laptop></Laptop>
          },
          {
            path:'/watches',
            element:<Watch></Watch>
          },
          {
            path:'/iphone',
            element:<Iphone></Iphone>
          }
        ]
      },
      {
        path:'/dashboard',
        element:<Das></Das>
      },
      {
        path:'/my',
        element: <My></My>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/details/:id',
        element:<DetalesPage></DetalesPage>,
        loader: ()=> fetch('../gadgetdata.json')
      }
    ],
    },
    
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Datatransfer><RouterProvider router={router}></RouterProvider></Datatransfer>
 
  </StrictMode>,
)
