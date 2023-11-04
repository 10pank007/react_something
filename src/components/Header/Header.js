import css from './Header.module.css';

import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks/useAppContext";
import {authService} from "../../services";
const Header = () => {
    let {isAuth, me, setMe, setIsAuth} = useAppContext();
    let navigate = useNavigate();

    const logOut = () => {
        authService.deleteToken();
        setMe(null);
        setIsAuth(null);
        navigate('/login');

    }

    return (
        <div className={css.Header}>
            <h2>Cars</h2>
            {
                isAuth ?  <div>{me.username} <button onClick={logOut}>log out</button></div> :
                    <div>
                        <NavLink to={'login'}>Login</NavLink>
                        <NavLink to={'register'}>Register</NavLink>
                    </div>
            }

        </div>
    );
};

export {Header};