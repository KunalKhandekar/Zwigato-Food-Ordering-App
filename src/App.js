import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Body from './component/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RouteError from './component/RouteError';
import RestaurantMenu from './component/RestaurantMenu'
import { Provider } from 'react-redux';
import appStore from './utils/Redux/appStore';
import Cart from './component/Cart';
import Home from './component/Home';
import About from './component/About/About';
import { LocationProvider } from './utils/LocationContext';


const App = () => {
    return (
        <Provider store={appStore}>
            <LocationProvider>
            <RouterProvider router={appRouter} />
            </LocationProvider>
        </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement : <RouteError />
    },
    {
        path: '/restaurants',
        element: <><Header /><Body /></>,
        errorElement : <RouteError />
    },
    {
        path: '/about',
        element: <><Header /><About /></>,
        errorElement : <RouteError />
    },
    {
        path: '/restaurants/:resID',
        element: <><Header /><RestaurantMenu /></>,
        errorElement : <RouteError />
    },
    {
        path: '/cart',
        element: <><Header /><Cart /></>,
        errorElement : <RouteError />
    },
    {
        path: '*',
        element: <Home />
    }

])


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
