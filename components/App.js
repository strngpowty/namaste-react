import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Body from './Body'
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
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);