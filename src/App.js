import './App.css';
import { BrowserRouter,Routes} from "react-router-dom";
import { Router, Switch, Route } from "react-router-dom";

import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
       <Nav/>
       <BrowserRouter>

       </BrowserRouter>
    </div>
  );
}

export default App;
