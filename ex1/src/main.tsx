import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import NotFoundPage from './404.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
