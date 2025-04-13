import React, { useState , useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Body from './Body'
import About from './About'
import Contact from './Contact'
import ErrorPage from "./ErrorPage"
import RestaurantMenu from "./RestaurantMenu"
import { UserContext } from '../utils/UserContext'
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
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name : "Ash"
        };
        setUserName(data.name)
    }, [])

    return (
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
            <div className='app'>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
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
            },
            {
                path: '/restaurant/:resid',
                element: <RestaurantMenu />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);