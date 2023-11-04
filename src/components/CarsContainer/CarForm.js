import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";

const CarForm = () => {

    let {register, reset, handleSubmit} = useForm();

    const save = async (car) => {
        await carService.create(car);
        reset();
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={"text"} {...register('brand')} placeholder={'brand'}/>
            <input type={"text"} {...register('price')} placeholder={'price'}/>
            <input type={"text"} {...register('year')} placeholder={'year'}/>
            <button>save</button>

        </form>
    );
};

export {CarForm};