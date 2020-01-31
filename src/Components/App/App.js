import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './homepage'


const App = () => (
    <Router>
        <div>
            <Link to="/">
                Home
            </Link>
            
            <Link to="/weather">
                Weather
            </Link>
        </div>

            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                
                <Route path="/weather/" exact>
                    {/* <h1>Weather Page</h1> */}
                </Route>
            </Switch>
    </Router>
)

export default App