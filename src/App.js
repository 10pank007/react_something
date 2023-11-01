import logo from './logo.svg';
import './App.css';
import {createContext} from "react";
import {A} from "./components/A";


export const Context = createContext(null);

function App() {
  return (
    <div className="App">
        <Context.Provider value={"Today"}>
            Hello world!!! Ukraine win war in 2023
            <A/>
        </Context.Provider>

    </div>
  );
}

export default App;
