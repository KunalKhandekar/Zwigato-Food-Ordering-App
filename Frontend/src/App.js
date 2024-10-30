import { createBrowserRouter, RouterProvider, useLocation, Navigate } from 'react-router-dom';
import { LocationProvider } from './utils/LocationContext'; 
import RestaurantMenu from './component/RestaurantMenu';
import RouteError from './component/Error/RouteError';
import { ToastContainer } from 'react-toastify';
import Restaurant from './component/Restaurant';
import 'react-toastify/dist/ReactToastify.css';
import appStore from './utils/Redux/appStore';
import About from './component/About/About';
import React, { useEffect } from 'react';
import Header from './component/Header';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Cart from './component/Cart';
import Home from './component/Home';
import LoginSignup from './component/Login';
import Wallet from './component/Wallet';


// Function to check authentication status from localStorage
const isUserAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
};


const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App = () => {
    return (
        <Provider store={appStore}>
            <LocationProvider>
                <ToastContainer
                    position="top-center"
                    autoClose={1500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <RouterProvider router={appRouter()} />
            </LocationProvider>
        </Provider>
    );
};

// Custom router configuration
const appRouter = () => {
    const isAuthenticated = isUserAuthenticated();

    return createBrowserRouter([
        {
            path: '/auth',
            element: <LoginSignup />,
            errorElement: <RouteError />
        },
        {
            path: '/',
            element: isAuthenticated ? <Home /> : (
                <Navigate to="/auth" /> // Redirect to auth if not authenticated
            ),
            errorElement: <RouteError />
        },
        {
            path: '/restaurants',
            element: isAuthenticated ? (
                <><ScrollToTop /><Header /><Restaurant /></>
            ) : (
                <Navigate to="/auth" /> // Redirect to auth if not authenticated
            ),
            errorElement: <RouteError />
        },
        {
            path: '/about',
            element: isAuthenticated ? (
                <><ScrollToTop /><Header /><About /></>
            ) : (
                <Navigate to="/auth" /> // Redirect to auth if not authenticated
            ),
            errorElement: <RouteError />
        },
        {
            path: '/wallet',
            element: isAuthenticated ? (
                <><ScrollToTop /><Header /><Wallet /></>
            ) : (
                <Navigate to="/auth" /> // Redirect to auth if not authenticated
            ),
            errorElement: <RouteError />
        },
        {
            path: '/restaurants/:resID',
            element: isAuthenticated ? (
                <><ScrollToTop /><Header /><RestaurantMenu /></>
            ) : (
                <Navigate to="/auth" /> // Redirect to auth if not authenticated
            ),
            errorElement: <RouteError />
        },
        {
            path: '/cart',
            element: isAuthenticated ? (
                <><ScrollToTop /><Header /><Cart /></>
            ) : (
                <Navigate to="/auth" /> // Redirect to auth if not authenticated
            ),
            errorElement: <RouteError />
        },
        {
            path: '*',
            element: <Home />
        }
    ]);
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
