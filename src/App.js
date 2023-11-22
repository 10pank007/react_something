import {Test} from "./Test";
import {useEffect, useState} from "react";

function App() {
    console.log("constructor");
    const [flag, setFlag] = useState(true);
    useEffect(() => {
        console.log("componentDidMount");
        return () => {
            console.log("componentWillUnmount");
        }
    }, []);

    useEffect(() => {
        console.log("componentDidUpdate")
    }, [flag]);
  return (
    <div className="App">
      Hello world!!! Ukraine win war in 2023
        {console.log("render")}
        {/*{flag && <Test b={25}/>}*/}
        <button onClick={()=> setFlag(prevState => !prevState)}>Hide</button>
    </div>
  );
}

export default App;
