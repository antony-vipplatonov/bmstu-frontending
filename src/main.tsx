import React from 'react'
import ReactDOM from 'react-dom/client'
import Ships from './Ships.tsx'
import ShipPage from './Ship.tsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navbar'

const router = createBrowserRouter(
  [
  {
    path: '/bmstu-frontend/',
    element: <Outlet/>,
    children: [
  {
    path: '/bmstu-frontend/seabattles',
    element: <Ships/>
  },
  {
    path: '/bmstu-frontend/seabattles/:id',
    element: <ShipPage/>
  }]
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)