import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import Product from './Product'
import Contacts from './Contacts'
import Sarvice from './Sarvice'
import Page from './Page'
import Click from './Click'
// import Store from './Store'
// import { Provider } from 'react-redux'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// const router = createBrowserRouter([
//    {
//       path: '/',
//       element: <App />,
//       children: [
//          {
//             path: "Sarvice",
//             element: <Sarvice />
//          },
//          {
//             path: "product",
//             element: <Product />
//          },
//          {
//             path: "Contacts",
//             element: <Contacts />
//          },
//          {
//             path: "page",
//             element: <Page />
//          },
//          {
//             path: "click",
//             element: <Click />
//          },
//       ]
//    },

// ])

ReactDOM.createRoot(document.getElementById('root')).render(



   // <Provider store={Store}>
   // {/* <RouterProvider router={router}> */}
      
   // {/* <//RouterProvider> */}
   //  </Provider>

<React.StrictMode>
   <App/>
</React.StrictMode>







)
