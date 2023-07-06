import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom";
import Menu from './routes/Menu';
import Booking from './routes/Booking';
import Orders from './routes/Orders';
import About from './routes/About';
import Login from './routes/Login';
import Header from './componentes/Header';

const router = createBrowserRouter([
{
 path: "/",
 element: <App />,
}, {
 path: "/home",
 element: <App />,
}, {
 path: "/menu",
 element: <Menu/>,
}, {
 path: "/reservations",
 element: <Booking/>,
},{
 path: "/orders",
 element: <Orders/>,
},{
 path: "/about",
 element: <About/>,
},{
 path: "/login",
 element: <Login/>,
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
