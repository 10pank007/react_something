import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {registerValidator} from "../../validators/registerValidator";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {
    const [serverError, setServerError] = useState(null)
    const {register,
        reset,
        handleSubmit,
        formState:{errors, isValid}} = useForm({mode: "onBlur", resolver: joiResolver(registerValidator)});
    let navigate = useNavigate();
    const save = async (users) => {
        try {
            await authService.register(users);
            setServerError(null);
            navigate('/login')
        } catch (e) {
           setServerError(e.response.data)
        }
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <div>User name:<input type={'text'} {...register('username')}/></div>
            {serverError && <div>user name already exists</div>}
            {errors.username && <div>{errors.username.message}</div>}
            <div>Password:<input type={'text'} {...register('password')}/></div>
            {errors.password && <div>{errors.password.message}</div>}
            <div>Confirm Password:<input type={'text'} {...register('re_password')}/></div>
            {errors.re_password && <div>{errors.re_password.message}</div>}
            <button disabled={!isValid}>register</button>
        </form>
    );
};

export {RegisterForm};