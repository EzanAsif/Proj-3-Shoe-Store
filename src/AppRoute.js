import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from 'react-router-dom'
import {FeaturedCol} from './Components/FeaturedCol'
import {NavbarM} from './Components/Navbar'
import App from './App'
export function AppRoute(){
    return(
        <Router>
            <Switch>
                <Route path = "/" component = {App} />
                <Route exact path = "/product" component = {FeaturedCol} />
                {/* <Route  path = "*" component = {() => <h2>404 page not found</h2>} /> */}
            </Switch>
        </Router>
    )
}