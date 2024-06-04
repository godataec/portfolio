import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from './routes/error-page.jsx';
import ModernWebApp from "./routes/modernwebapp.jsx";
import AnalyticalApp from "./routes/analyticalapp.jsx";
import OperationalApp from "./routes/operationalapp.jsx";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: 
    [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "modernwebapp",
        element: <ModernWebApp />,
      },
      {
        path: "analyticalapp",
        element: <AnalyticalApp />,
      },
      {
        path: "operationalapp",
        element: <OperationalApp />,
      },   
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);