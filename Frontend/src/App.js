import { createBrowserRouter, RouterProvider, useLocation, Navigate, Outlet } from 'react-router-dom';
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
const isUserAuthenticated = () => localStorage.getItem('isAuthenticated') === 'true';

// Component to handle scrolling on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

// Layout component for authenticated routes
const AuthenticatedLayout = () => (
    <>
        <ScrollToTop />
        <Header />
        <Outlet /> {/* Renders child components */}
    </>
);

// Higher-order component for protected routes
const ProtectedRoute = ({ element }) => {
    return isUserAuthenticated() ? element : <Navigate to="/auth/in" />;
};

// Routes configuration
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: isUserAuthenticated() ? <Home /> : <Navigate to="/auth/in" />,
        errorElement: <RouteError />
    },
    {
        path: '/auth/in',
        element: !isUserAuthenticated() ? <LoginSignup /> : <Navigate to="/" />,
        errorElement: <RouteError />
    },
    {
        element: <AuthenticatedLayout />, // Wrap authenticated routes
        children: [
            { path: '/restaurants', element: <Restaurant /> },
            { path: '/about', element: <About /> },
            { path: '/wallet', element: <Wallet /> },
            { path: '/restaurants/:resID', element: <RestaurantMenu /> },
            { path: '/cart', element: <Cart /> },
        ],
        errorElement: <RouteError />
    },
    {
        path: '*',
        element: <RouteError />
    }
]);

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
                <RouterProvider router={appRouter} />
            </LocationProvider>
        </Provider>
    );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
