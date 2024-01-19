import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './Pages/Home.jsx';
import NotFound from './Pages/NotFound.jsx';
import Contact from './Pages/Contact.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
       {
        path: '/contact',
        element: <Contact />
      }, 
      // {
      //   path: '/matchup/:id',
      //   element: <Vote />
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
