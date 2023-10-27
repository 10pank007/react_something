import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    // const [login, setLogin] = useState('dafault');
    // const [password, setPassword] = useState('');
    // function onLoginChange(e) {
    //     setLogin(e.target.value);
    // }
    // function onPassWordChange(e) {
    //     setPassword(e.target.value);
    // }
    let [formSatate, setFormState] = useState({login:"", password: ""})
    function onSubmit(e) {
        console.log(e.target.login.value);
        console.log(e.target.password.value);
        e.preventDefault();
        console.log(formSatate);

    }
    function onChange(e) {
        setFormState({...formSatate, [e.target.name] : e.target.value})
    }

  return (
    <div className="App">
      Hello world!!! Ukraine win war in 2023
        <form onSubmit={onSubmit}>
            <input type={"text"} name={"login"} value={formSatate.login} onChange={onChange}/>
            <input type={"text"} name={"password"} value={formSatate.password} onChange={onChange}/>
            <button>submit</button>
        </form>
    </div>
  );
}

export default App;
