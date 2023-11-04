import React, {useEffect, useState} from 'react';
import {carService} from "../../services/carService";
import {Car} from "./Car";
import {useSearchParams} from "react-router-dom";
import {date} from "joi";

const Cars = () => {
    const [cars, setCars] = useState([]);
    let [quary, setQuary] = useSearchParams({page:'1'});
    const [prevNext, setPrevNext] = useState({prev:null, next: null})


    useEffect(() => {
        carService.getAll(quary.get('page')).then(({data}) =>{
            setCars(data.items);
            setPrevNext({prev: data.prev, next: data.next})

        })
    }, [quary.get('page')]);
    const prev = () => {
        setQuary(prev => {
            prev.set('page', `${+prev.get('page') -1 }`);
            return prev;
        })
    }
    const next = () => {
        setQuary(prev => {
            prev.set('page', `${+prev.get('page') +1 }`);
            return prev;
        })
    }


        return (
            <div>
                {cars.map((car, index)=> <Car key={index} car={car}/>)}
                <button disabled={!prevNext.prev} onClick={prev}>prev</button>
                <button disabled={!prevNext.next} onClick={next}>next</button>

            </div>
        );
}



export {Cars};