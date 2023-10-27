import logo from './logo.svg';
import './App.css';
import {createRef} from "react";

function App() {
    let login = createRef();
    let password = createRef();
    function onSubmit(e) {
        e.preventDefault();
       console.log(login.current.value)
       console.log(password.current.value)
    }
  return (
    <div className="App">
      Hello world!!! Ukraine win war in 2023

        <form action={""} onSubmit={onSubmit}>
            <input type={"text"} name={"login"} ref={login}/>
            <input type={"text"} name={"password"} ref={password}/>
            <button>log in</button>
        </form>
    </div>
  );
}

export default App;
