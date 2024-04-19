import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Body from './component/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './component/Contact';
import RouteError from './component/RouteError';
import RestaurantMenu from './component/RestaurantMenu'
import userContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './utils/Redux/appStore';
import Cart from './component/Cart';
import Home from './component/Home';

const About = lazy(() => import('./component/About/About'))

const App = () => {
    return (
        <Provider store={appStore}>
            <userContext.Provider value={{ loggedInUser: 'Kunal Khandekar' }}>
                <Header />
                <Outlet />
            </userContext.Provider>
        </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/app',
        element: <App />,
        children: [
            {
                path: '/app',
                element: <Body />
            },
            {
                path: '/app/about',
                element: (
                    <Suspense fallback={<h1>Loading........</h1>}>
                        <About />
                    </Suspense>
                )
            },
            {
                path: '/app/contact',
                element: <Contact />
            },
            {
                path: '/app/restaurants/:resID',
                element: <RestaurantMenu />,
            },
            {
                path: '/app/cart',
                element: <Cart />
            }
        ],
        errorElement: <RouteError />
    },

])


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouter} />);
