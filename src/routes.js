import React from "react";
import Home from "./pages/home";
import Chisiamo from './pages/chisiamo';
import  Contattaci from './pages/contattaci';
import Ricetta from './pages/ricetta';
import ErrorPage from './pages/errorPage';


 export const routes = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/chisiamo",
        element: <Chisiamo/>,
    },
    {
        path: "/contattaci",
        element: <Contattaci/>,
    },
    {
        path: "/ricetta/:id",
        element: <Ricetta />,
      },
    {
        path: "*",
        element: <ErrorPage/>,
    },
]