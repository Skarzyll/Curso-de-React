import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import NotFoundPage from './404.tsx'
import Contato from './pages/Contato.tsx'
import Empresa from './pages/Empresa.tsx'
import NovoProjeto from './pages/NovoProjeto.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/pages/Contato.tsx',
    element: <Contato />
  },
  {
    path: '/pages/Empresa.tsx',
    element: <Empresa />
  },
  {
    path: '/pages/NovoProjeto.tsx',
    element: <NovoProjeto />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
