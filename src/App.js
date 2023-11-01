import logo from './logo.svg';
import './App.css';
import {A} from "./components/A";
import {createContext} from "react";


export let MyContext = createContext('default');
function App() {
  let drill = 'some info';


  return (
    <div className="App">
      Hello world!!! Ukraine win war in 2023
        APP component
      <MyContext.Provider value={'some info2'}>
        <A drill={drill}/>
      </MyContext.Provider>

    </div>
  );
}

export default App;
