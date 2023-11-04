import {createBrowserRouter, Navigate} from "react-router-dom";

import {AuthLayouts, MainLayouts, PublicLayouts} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayouts/>, children: [
            {index: true, element: <Navigate to={'login'}/>},
            {
                element: <PublicLayouts/>, children: [
                    {path: 'login', element: <LoginPage/>},
                    {path: 'register', element: <RegisterPage/>}
                ]
            },
            {element: <AuthLayouts/>, children: [
                    {path: 'cars', element: <CarsPage/>}
                ]
            }
        ]
    }
]);

export {router}