import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LogInUser from './LogInUser.jsx'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/login',
        element: <LogInUser />
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
