import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './routes/error-page';
import Dylsite from './routes/root';
import Projects from './routes/projects'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Dylsite />,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path:'/dylsite',
    element: <Dylsite />,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path:'/projects',
    element: <Projects />,
    errorElement: <ErrorPage></ErrorPage>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

