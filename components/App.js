import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Body from './Body'
import About from './About'
import Contact from './Contact'
import ErrorPage from "./ErrorPage"
/* 
* Header
* - logo
* - nav items
* body
* - search
* - restaurant container
* - restuarant card
* Footer
* - Copyright
* - links
* - address
* - contact
*/

const AppLayout = () =>  {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children : [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);