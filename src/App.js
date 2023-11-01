import './App.css';
import {leaguesService} from "./services/leaguesService";

function App() {
    leaguesService.getAll().then(({data})=> console.log(data));
  return (
    <div className="App">
      Hello world!!! Ukraine win war in 2023
    </div>
  );
}

export default App;
