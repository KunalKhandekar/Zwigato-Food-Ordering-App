import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
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

// Component to scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

// Main App component
const App = () => {
    return (
        <Provider store={appStore}>
            <LocationProvider>
                {/* Toast container for notifications */}
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
                {/* RouterProvider with custom router */}
                <RouterProvider router={appRouter} />
            </LocationProvider>
        </Provider>
    )
};

// Custom router configuration
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <RouteError />
    },
    {
        path: '/restaurants',
        element: <><ScrollToTop /><Header /><Restaurant /></>,
        errorElement: <RouteError />
    },
    {
        path: '/about',
        element: <><ScrollToTop /><Header /><About /></>,
        errorElement: <RouteError />
    },
    {
        path: '/restaurants/:resID',
        element: <><ScrollToTop /><Header /><RestaurantMenu /></>,
        errorElement: <RouteError />
    },
    {
        path: '/cart',
        element: <><ScrollToTop /><Header /><Cart /></>,
        errorElement: <RouteError />
    },
    {
        path: '*',
        element: <Home />
    }
]);

// Render the root component
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
