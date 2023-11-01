
import {useAppContext} from "../hooks/useAppContext";

const D = () => {
    const messege = useAppContext();
    return (
        <div>
           D: {messege}
        </div>
    );
};

export {D};