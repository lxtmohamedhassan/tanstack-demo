import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App.tsx'
import {
  RouterProvider,
} from '@tanstack/router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <TanStackRouterDevtools router={router} />
  </React.StrictMode>,
)
