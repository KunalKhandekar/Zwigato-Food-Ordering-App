import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Body from './component/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import RouteError from './component/RouteError';
import RestaurantMenu from './component/RestaurantMenu'

const App = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    )
};

const appRputer = createBrowserRouter([
    {
        path: '/',
        element : <App/>,
        children: [
            {
                path: '/',
                element : <Body/>
            },
            {
                path: '/about',
                element : <About/>
            },
            {
                path: '/contact',
                element : <Contact/>
            },
            {
                path: 'restaurants/:resID',
                element : <RestaurantMenu/>,
            }
        ],
        errorElement: <RouteError />
    },
    
])


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRputer}/>);