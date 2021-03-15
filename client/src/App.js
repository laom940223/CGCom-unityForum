import React from "react"
import {BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom"
import NavBar from "./components/navigation/NavBar"
import Home from "./components/pages/Home"

import './App.css';


function App() {
  return (

    <Router>
        <NavBar/>
        <Switch>

            <Route path="/" exact>
                
                <div class="container">
                <Home/>
                </div>
                  
            </Route>

        </Switch>
    </Router>
  );
}

export default App;
