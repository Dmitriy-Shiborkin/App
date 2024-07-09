import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Words_1 from './Words_1';
import Words_2 from './Words_2';
import NoteFoundPage from './NotFoundPage';

const router = createBrowserRouter([

   {
      path: '/',
      element: <App />,
      errorElement: <NoteFoundPage />,
   },

   {
      path: '/words_1',
      element: <Words_1 />
   },

   {
      path: '/words_2',
      element: <Words_2 />
   },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);


