import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import{createBrowserRouter,RouterProvider, Route} from 'react-router-dom'

import './index.css'

//páginas

import Home from "./routes/Home";
import NewPost from './routes/NewPost';
import EditarFilmes from './routes/EditarFilmes'

const router = createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:"/",
        element: <Home/>,
      },
      {
        path: "/new",
        element: <NewPost/>,
      },
      {
        path: "/EditarFilmes/:id",
        element: <EditarFilmes/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
