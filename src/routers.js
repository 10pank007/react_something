import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./leyouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {PostsPage} from "./pages/PostsPage";

export const routers = createBrowserRouter([
    {path:'', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>}
        ]}
])