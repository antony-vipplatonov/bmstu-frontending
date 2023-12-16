import React from 'react'
import ReactDOM from 'react-dom/client'
import VoteList from './VoteList.tsx'
import VotingPage from './Voting.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navbar'

const router = createBrowserRouter(
  [
  {
    path: '/bmstu-frontend/vybory/:id',
    element: <VotingPage/>
  },
  {
    path: '/bmstu-frontend/vybory',
    element: <VoteList/>
  },
  {
    path: '/bmstu-frontend/',
    element: <a href='/vybory'><h1>TEST SUCCESS</h1></a>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)