import {D} from "./D";
import {useAppContext} from "../hooks/useAppContext";

const C = () => {
    const messege = useAppContext();
    return (
        <div>
            C: {messege}
            <D/>
        </div>
    );
};

export {C};