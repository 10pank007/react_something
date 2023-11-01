import {C} from "./C";
import {useAppContext} from "../hooks/useAppContext";

const B = () => {
    const messege = useAppContext();
    return (
        <div>
            B: {messege}
            <C/>
        </div>
    );
};

export {B};