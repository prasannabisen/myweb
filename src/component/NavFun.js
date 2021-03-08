import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import About from "./About"
import Contact from "./Contact"
import Home from './Home'
import Project from './Project'

export default class NavFun extends React.Component{
    render(){
        return(<div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/About' component={About}></Route>
                    <Route path="/Contact" component={Contact}></Route>
                    <Route path="/Home" component={Home}></Route>
                    <Route path="/Project" component={Project}></Route>
                </Switch>
            </Router>
        </div>)
    }
}