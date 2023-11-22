import {Test} from "./Test";
import {useState} from "react";

function App() {
    const [flag, setFlag] = useState(true);
  return (
    <div className="App">
      Hello world!!! Ukraine win war in 2023
        {flag && <Test b={25}/>}
        <button onClick={()=> setFlag(prevState => !prevState)}>Hide</button>
    </div>
  );
}

export default App;
