import {B} from "./B";
import {useAppContext} from "../hooks/useAppContext";

const A = () => {
    const messege = useAppContext();
    return (
        <div>
            A: {messege}
            <B/>
        </div>
    );
};

export {A};