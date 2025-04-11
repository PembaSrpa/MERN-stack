import React from "react";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Apifetch from "./components/Api";
import Product from "./components/Product";
import Button from "./components/Button";
import Form from "./components/Form";
import OnOff from "./components/OnOff";
import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
    const Layout = () => {
        return (
            <>
                <Navbar />
                <Outlet />
                <Footer />
            </>
        );
    };
    const pageRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/form",
                    element: <Form />,
                },
                {
                    path: "/onoff",
                    element: <OnOff />,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/apifetch",
            element: <Apifetch />,
        },
        {
            path: "/product/:id",
            element: <Product />,
        },
    ]);

    return (
        <>
            <RouterProvider router={pageRoutes} />
            {/* <Navbar /> */}
            {/* <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/form' element={<Form initial='Login' />} />
                <Route path='/onoff' element={<OnOff />} />
            </Routes> */}
        </>
    );
};

export default App;
