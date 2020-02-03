import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './homepage'
import Weather from '../Fetch/weather.js'


const App = () => (
    <Router>
        <div>
            <Link to="/">
            </Link>
            
            <Link to="/weather">
            </Link>
        </div>

            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>

                <Route path="/weather/:city" exact>
                    <Weather/>
                </Route>
            </Switch>
    </Router>
)

export default App