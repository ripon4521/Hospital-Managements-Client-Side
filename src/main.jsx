import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();


import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Routers/Routers.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <QueryClientProvider client={queryClient}>
 
    <AuthProvider>
    <RouterProvider router={router}> </RouterProvider>
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
