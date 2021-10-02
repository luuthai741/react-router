import React from 'react';
import About from '../components/About';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Products from '../components/Products'
import Contact from '../components/Contact'
import Login from '../components/Login'
const routes = [
    {
        path: "/",
        exact: true,
        main: () => {
            return (
                <Home />
            )
        }
    },
    {
        path: "/about",
        exact: false,
        main: () => {
            return (
                <About />
            )
        }
    },
    {
        path: "/contact",
        exact: false,
        main: () => {
            return (
                <Contact />
            )
        }
    },
    {
        path: "/products",
        exact: false,
        main: ({ match }) => {
            return (
                <Products match={match} />
            )
        }
    },
    {
        path: "/login",
        exact: false,
        main: () => {
            return (
                <Login />
            )
        }
    },
    {
        path: "/logout",
        exact: false,
        main: () => {
            return null
        }
    },
    {
        path: '',
        exact: false,
        main: () => {
            return (
                <NotFound />
            )
        }
    },

]

export default routes;