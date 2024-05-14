import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { router } from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
