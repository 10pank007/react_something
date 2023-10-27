import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainPage} from "./pages/main-page/MainPage";
import {ErrorPage} from "./pages/error-page/ErrorPage";
import {UsersPage} from "./pages/users-page/UsersPage";
import {PostsPage} from "./pages/posts-page/PostsPage";
import {UserDetailsPage} from "./pages/user-details-page/UserDetailsPage";
import {PostsDetailsPage} from "./pages/posts-details-page/PostsDetailsPage";


const routes = createBrowserRouter([
    {path: "/", element: <MainPage/>, errorElement: <ErrorPage/>, children: [
            {path:"users", element:<UsersPage/>},
            {path:"users/details", element:<UserDetailsPage/>},
            {path:"posts", element:<PostsPage/>},
            {path:"posts/details", element:<PostsDetailsPage/>},
        ]},
    {path: "/asd", element: <h1>hello2</h1>},
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <RouterProvider router={routes}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
