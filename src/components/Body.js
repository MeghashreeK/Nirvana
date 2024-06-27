import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browser from './Browser';


const Body = () => {
    const AppRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browser/>
        }
    ])

  return (
<div>
    <RouterProvider router={AppRouter}/>
</div>
)
}

export default Body