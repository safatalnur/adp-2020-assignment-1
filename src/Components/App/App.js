import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => (
    <Router>
        <div>
            <Link to="/">
                Home
            </Link>
            {' '}
            <Link to="/weather">
                Weather
            </Link>
        </div>

            <Switch>
                <Route path="/" exact>
                    <h1>Home Page</h1>
                </Route>
                
                <Route path="/weather/" exact>
                    <h1>Weather Page</h1>
                </Route>
            </Switch>
    </Router>
)

export default App