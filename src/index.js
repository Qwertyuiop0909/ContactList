import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import ContactHelper from './components/ContactHelper/ContactHelper'
import Index from './components/Index/Index'
import ContextProvider from './components/ContextProvider/ContextProvider'
import EditContact from './components/EditContact/EditContact'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      {
        path: 'contacts/:id/',
        element: <ContactHelper />,
      },
      {
        path: 'contacts/:id/edit',
        element: <EditContact />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ContextProvider>
        <RouterProvider router={myRouter} />
      </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
