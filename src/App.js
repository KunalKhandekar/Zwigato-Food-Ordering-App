import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Body from './component/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './component/Contact';
import RouteError from './component/RouteError';
import RestaurantMenu from './component/RestaurantMenu'

const About = lazy(()=> import('./component/About'))

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
                element : (
                    <Suspense fallback={<h1>Loading........</h1>}>
                        <About/>
                    </Suspense>
                )
            },
            {
                path: '/contact',
                element : <Contact/>
            },
            {
                path: 'restaurants/:resID',
                element : <RestaurantMenu />,
            }
        ],
        errorElement: <RouteError />
    },
    
])


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRputer}/>);